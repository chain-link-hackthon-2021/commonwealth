/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ICuratedProjectFactoryInterface extends ethers.utils.Interface {
  functions: {
    "addAcceptedTokens(address[])": FunctionFragment;
    "createProject(bytes32,bytes32,bytes32,address,address,uint256,uint256,uint256)": FunctionFragment;
    "isAcceptedToken(address)": FunctionFragment;
    "numProjects()": FunctionFragment;
    "owner()": FunctionFragment;
    "projectImp()": FunctionFragment;
    "projects(uint32)": FunctionFragment;
    "protocolData()": FunctionFragment;
    "setCWTokenImpl(address)": FunctionFragment;
    "setFeeTo(address)": FunctionFragment;
    "setProjectImpl(address)": FunctionFragment;
    "setProtocolFee(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addAcceptedTokens",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "createProject",
    values: [
      BytesLike,
      BytesLike,
      BytesLike,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "isAcceptedToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "numProjects",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "projectImp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "projects",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "protocolData",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCWTokenImpl",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setFeeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setProjectImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setProtocolFee",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addAcceptedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createProject",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAcceptedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numProjects",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "projectImp", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "projects", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "protocolData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCWTokenImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setFeeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setProjectImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProtocolFee",
    data: BytesLike
  ): Result;

  events: {
    "ProjectCreated(uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProjectCreated"): EventFragment;
}

export class ICuratedProjectFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ICuratedProjectFactoryInterface;

  functions: {
    addAcceptedTokens(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "addAcceptedTokens(address[])"(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createProject(
      _name: BytesLike,
      _ipfsHash: BytesLike,
      _cwUrl: BytesLike,
      _beneficiary: string,
      _acceptedToken: string,
      _threshold: BigNumberish,
      _deadline: BigNumberish,
      _curatorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "createProject(bytes32,bytes32,bytes32,address,address,uint256,uint256,uint256)"(
      _name: BytesLike,
      _ipfsHash: BytesLike,
      _cwUrl: BytesLike,
      _beneficiary: string,
      _acceptedToken: string,
      _threshold: BigNumberish,
      _deadline: BigNumberish,
      _curatorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isAcceptedToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isAcceptedToken(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    numProjects(overrides?: CallOverrides): Promise<[BigNumber]>;

    "numProjects()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    projectImp(overrides?: CallOverrides): Promise<[string]>;

    "projectImp()"(overrides?: CallOverrides): Promise<[string]>;

    projects(
      projectIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "projects(uint32)"(
      projectIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    protocolData(
      overrides?: CallOverrides
    ): Promise<[[number, string] & { fee: number; feeTo: string }]>;

    "protocolData()"(
      overrides?: CallOverrides
    ): Promise<[[number, string] & { fee: number; feeTo: string }]>;

    setCWTokenImpl(
      _cwToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setCWTokenImpl(address)"(
      _cwToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setFeeTo(address)"(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProjectImpl(
      _projectImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setProjectImpl(address)"(
      _projectImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setProtocolFee(
      _protocolFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "setProtocolFee(uint256)"(
      _protocolFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addAcceptedTokens(
    _tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "addAcceptedTokens(address[])"(
    _tokens: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createProject(
    _name: BytesLike,
    _ipfsHash: BytesLike,
    _cwUrl: BytesLike,
    _beneficiary: string,
    _acceptedToken: string,
    _threshold: BigNumberish,
    _deadline: BigNumberish,
    _curatorFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "createProject(bytes32,bytes32,bytes32,address,address,uint256,uint256,uint256)"(
    _name: BytesLike,
    _ipfsHash: BytesLike,
    _cwUrl: BytesLike,
    _beneficiary: string,
    _acceptedToken: string,
    _threshold: BigNumberish,
    _deadline: BigNumberish,
    _curatorFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isAcceptedToken(token: string, overrides?: CallOverrides): Promise<boolean>;

  "isAcceptedToken(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  numProjects(overrides?: CallOverrides): Promise<BigNumber>;

  "numProjects()"(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  projectImp(overrides?: CallOverrides): Promise<string>;

  "projectImp()"(overrides?: CallOverrides): Promise<string>;

  projects(
    projectIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "projects(uint32)"(
    projectIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  protocolData(
    overrides?: CallOverrides
  ): Promise<[number, string] & { fee: number; feeTo: string }>;

  "protocolData()"(
    overrides?: CallOverrides
  ): Promise<[number, string] & { fee: number; feeTo: string }>;

  setCWTokenImpl(
    _cwToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setCWTokenImpl(address)"(
    _cwToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeTo(
    _feeTo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setFeeTo(address)"(
    _feeTo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProjectImpl(
    _projectImpl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setProjectImpl(address)"(
    _projectImpl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setProtocolFee(
    _protocolFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "setProtocolFee(uint256)"(
    _protocolFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addAcceptedTokens(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "addAcceptedTokens(address[])"(
      _tokens: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    createProject(
      _name: BytesLike,
      _ipfsHash: BytesLike,
      _cwUrl: BytesLike,
      _beneficiary: string,
      _acceptedToken: string,
      _threshold: BigNumberish,
      _deadline: BigNumberish,
      _curatorFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "createProject(bytes32,bytes32,bytes32,address,address,uint256,uint256,uint256)"(
      _name: BytesLike,
      _ipfsHash: BytesLike,
      _cwUrl: BytesLike,
      _beneficiary: string,
      _acceptedToken: string,
      _threshold: BigNumberish,
      _deadline: BigNumberish,
      _curatorFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    isAcceptedToken(token: string, overrides?: CallOverrides): Promise<boolean>;

    "isAcceptedToken(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    numProjects(overrides?: CallOverrides): Promise<BigNumber>;

    "numProjects()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    projectImp(overrides?: CallOverrides): Promise<string>;

    "projectImp()"(overrides?: CallOverrides): Promise<string>;

    projects(
      projectIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "projects(uint32)"(
      projectIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    protocolData(
      overrides?: CallOverrides
    ): Promise<[number, string] & { fee: number; feeTo: string }>;

    "protocolData()"(
      overrides?: CallOverrides
    ): Promise<[number, string] & { fee: number; feeTo: string }>;

    setCWTokenImpl(_cwToken: string, overrides?: CallOverrides): Promise<void>;

    "setCWTokenImpl(address)"(
      _cwToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setFeeTo(_feeTo: string, overrides?: CallOverrides): Promise<void>;

    "setFeeTo(address)"(
      _feeTo: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setProjectImpl(
      _projectImpl: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setProjectImpl(address)"(
      _projectImpl: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setProtocolFee(
      _protocolFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setProtocolFee(uint256)"(
      _protocolFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ProjectCreated(
      projectIndex: null,
      newProject: null
    ): TypedEventFilter<
      [BigNumber, string],
      { projectIndex: BigNumber; newProject: string }
    >;
  };

  estimateGas: {
    addAcceptedTokens(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "addAcceptedTokens(address[])"(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createProject(
      _name: BytesLike,
      _ipfsHash: BytesLike,
      _cwUrl: BytesLike,
      _beneficiary: string,
      _acceptedToken: string,
      _threshold: BigNumberish,
      _deadline: BigNumberish,
      _curatorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "createProject(bytes32,bytes32,bytes32,address,address,uint256,uint256,uint256)"(
      _name: BytesLike,
      _ipfsHash: BytesLike,
      _cwUrl: BytesLike,
      _beneficiary: string,
      _acceptedToken: string,
      _threshold: BigNumberish,
      _deadline: BigNumberish,
      _curatorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isAcceptedToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isAcceptedToken(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numProjects(overrides?: CallOverrides): Promise<BigNumber>;

    "numProjects()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    projectImp(overrides?: CallOverrides): Promise<BigNumber>;

    "projectImp()"(overrides?: CallOverrides): Promise<BigNumber>;

    projects(
      projectIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "projects(uint32)"(
      projectIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    protocolData(overrides?: CallOverrides): Promise<BigNumber>;

    "protocolData()"(overrides?: CallOverrides): Promise<BigNumber>;

    setCWTokenImpl(
      _cwToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setCWTokenImpl(address)"(
      _cwToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setFeeTo(address)"(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProjectImpl(
      _projectImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setProjectImpl(address)"(
      _projectImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setProtocolFee(
      _protocolFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "setProtocolFee(uint256)"(
      _protocolFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addAcceptedTokens(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "addAcceptedTokens(address[])"(
      _tokens: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createProject(
      _name: BytesLike,
      _ipfsHash: BytesLike,
      _cwUrl: BytesLike,
      _beneficiary: string,
      _acceptedToken: string,
      _threshold: BigNumberish,
      _deadline: BigNumberish,
      _curatorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "createProject(bytes32,bytes32,bytes32,address,address,uint256,uint256,uint256)"(
      _name: BytesLike,
      _ipfsHash: BytesLike,
      _cwUrl: BytesLike,
      _beneficiary: string,
      _acceptedToken: string,
      _threshold: BigNumberish,
      _deadline: BigNumberish,
      _curatorFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isAcceptedToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isAcceptedToken(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numProjects(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "numProjects()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    projectImp(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "projectImp()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    projects(
      projectIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "projects(uint32)"(
      projectIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    protocolData(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "protocolData()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setCWTokenImpl(
      _cwToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setCWTokenImpl(address)"(
      _cwToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeTo(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setFeeTo(address)"(
      _feeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProjectImpl(
      _projectImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setProjectImpl(address)"(
      _projectImpl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setProtocolFee(
      _protocolFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "setProtocolFee(uint256)"(
      _protocolFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}