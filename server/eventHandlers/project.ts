import Web3 from 'web3';
import BN from 'bn.js';
import { providers } from 'ethers';
import {
  IEventHandler,
  CWEvent,
  IChainEventData,
  CommonwealthTypes,
} from '@commonwealth/chain-events';
import { ICuratedProject__factory } from '../../shared/eth/types';
import { addPrefix, factory } from '../../shared/logging';
import { DB } from '../database';
import { ChainNodeAttributes } from '../models/chain_node';
export default class extends IEventHandler {
  public readonly name = 'Project';

  constructor(
    private readonly _models: DB,
    private readonly _node: ChainNodeAttributes
  ) {
    super();
  }

  /**
   * Handles a project-related event by writing the corresponding update into
   * the database.
   */
  public async handle(event: CWEvent<IChainEventData>, dbEvent) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const log = factory.getLogger(addPrefix(__filename, [event.network, event.chain]));

    if (event.data.kind === CommonwealthTypes.EventKind.ProjectCreated) {
      // handle creation event by checking against projects table
      const entityId = dbEvent?.entity_id;
      if (!entityId) {
        log.error(`Entity not found on dbEvent: ${dbEvent.toString()}`);
        return; // oops, should not happen
      }
      const index = event.data.index;
      const creator = event.data.creator;
      const ipfsHash = event.data.ipfsHash;

      const projectRow = await this._models.Project.findOne({
        where: { id: +index },
      });
      if (projectRow) {
        log.error(`Project ${index} already exists in db.`);
        return;
      }

      // first, query data from contract
      const url = this._node.private_url;
      const provider = new Web3.providers.WebsocketProvider(url);
      const contractApi = ICuratedProject__factory.connect(
        event.data.id,
        new providers.Web3Provider(provider)
      );
      await contractApi.deployed();
      const beneficiary = await contractApi.beneficiary();
      const token = await contractApi.acceptedToken();
      const curator_fee = await contractApi.curatorFee();
      const threshold = await contractApi.threshold();
      const deadline = await contractApi.deadline();
      const funding_amount = await contractApi.totalFunding();
      provider.disconnect(1000, 'finished');

      const ipfsHashId = await this._models.IpfsPins.findOne({
        where: { ipfs_hash: ipfsHash }
      });
      const ipfsParams = ipfsHashId ? { ipfs_hash_id: ipfsHashId.id } : {};

      // create new project (this should be the only place Projects are created)
      await this._models.Project.create({
        id: +index,
        entity_id: entityId,
        creator,
        beneficiary,
        token,
        curator_fee,
        threshold: threshold.toString(),
        deadline: deadline.toNumber(),
        funding_amount: funding_amount.toString(),
        ...ipfsParams,
      });
    } else if (
      event.data.kind === CommonwealthTypes.EventKind.ProjectBacked ||
      event.data.kind === CommonwealthTypes.EventKind.ProjectCurated
    ) {
      // update funding amount in project
      const entityId = dbEvent?.entity_id;
      if (!entityId) {
        log.error(`Entity not found on dbEvent: ${dbEvent.toString()}`);
        return;
      }
      const amount = new BN(event.data.amount);
      const projectRow = await this._models.Project.findOne({
        where: { entity_id: entityId }
      });
      if (!projectRow) {
        log.error(`Entity not found for id: ${entityId}`);
        return;
      }
      const existingAmount = new BN(projectRow.funding_amount);
      const newAmount = existingAmount.add(amount);
      projectRow.funding_amount = newAmount.toString();
      await projectRow.save();
    }

    return dbEvent;
  }
}