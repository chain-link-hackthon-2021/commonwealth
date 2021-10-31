/* eslint-disable */
// NOTE: IF YOU GET CHROMEDRIVE VERSION ERROR DO THE FOLLOWING:
// `yarn remove chromedriver` then `DETECT_CHROMEDRIVER_VERSION=true yarn add chromedriver --dev`
// NOTE: TESTS ASSUME THE ADDRESS HAS ALREADY BEEN USED TO LOGIN BEFORE I.E. NO ASKING FOR NAME, HEADLINE, OR BIO (todo?)

import { HomePage } from '../util/seleniumObjects/Pages/home';
import { CommunityHome } from '../util/seleniumObjects/Pages/communityHome';
import chai from 'chai';
import { LoginModal, WalletName } from '../util/seleniumObjects/modals/loginModal';
import { getWindow, getWindowTitles, waitForWindow } from '../util/seleniumObjects/util';
import { BasePage } from '../util/seleniumObjects/chrome-base';

const { assert } = chai;
require('dotenv').config();

describe('Commonwealth.im Chrome Selenium Tests', function() {
  let driver;
  describe('Wallet Login Tests', function() {
    beforeEach('start server and reset db', async function () {
      this.timeout(300000)
      // TODO: start local server and use that for selenium testing
    })

    afterEach('close driver', async function () {
      await driver.quit()
    })


    it('Should login with metamask', async () => {
      const home = new HomePage();
      // creates driver with MetaMask
      await home.initWithMetaMask();

      driver = await home.loadPage();
      assert(await driver.getCurrentUrl() === 'https://commonwealth.im/', 'Home page failed to load');

      driver = await home.startLogin()
      const loginModal = new LoginModal(driver);
      await loginModal.connectWallet(WalletName.METAMASK, home.metamask);
      await getWindow(driver, 'Commonwealth');

      // wait for new url/redirect to load
      await driver.wait(async () => {
        const url = await driver.getCurrentUrl()
        if (url) return url.includes('commonwealth.im/ethereum');
        else return false
      }, 10000)

      assert((await driver.getCurrentUrl()).includes('commonwealth.im/ethereum/'),
        'MetaMask login flow failed to load Ethereum community page')
      const communityHome = new CommunityHome(driver);
      const accountName = await communityHome.getAccountName();
      assert(accountName === 'Tim', 'Account loaded from MetaMask is incorrect');
    }).timeout(60000)

    xit('Should login with TerraStation', async () => {
      const home = new HomePage();

      // TODO: Switch to use extension page wallet import instead of "on login popup" to ensure consistency across tests
      // terra station does not open window upon installation so only import wallet AFTER clicking Login on commonwealth.im
      await home.initWithTerraStation();
      driver = await home.loadPage();
      assert(await driver.getCurrentUrl() === 'https://commonwealth.im/', 'Home page failed to load');

      driver = await home.startLogin()
      const loginModal = new LoginModal(driver);
      await loginModal.connectWallet(WalletName.TERRASTATION, home.terraStation);
      await getWindow(driver, 'Commonwealth');

      // wait for new url/redirect to load
      await driver.wait(async () => {
        const url = await driver.getCurrentUrl()
        if (url) return url.includes('commonwealth.im/terra');
        else return false
      }, 10000)

      assert((await driver.getCurrentUrl()).includes('commonwealth.im/terra/'),
        'TerraStation login flow failed to load Osmosis community page')
      const communityHome = new CommunityHome(driver);
      const accountName = await communityHome.getAccountName();
      assert(accountName === 'Tim', 'Account loaded from TerraStation is incorrect');
    }).timeout(60000)

    it('Should login with Polkadot', async () => {
      const home = new HomePage();

      await home.initWithPolkadotJs();
      driver = await home.loadPage();
      assert(await driver.getCurrentUrl() === 'https://commonwealth.im/', 'Home page failed to load');

      driver = await home.startLogin()
      const loginModal = new LoginModal(driver);
      await loginModal.connectWallet(WalletName.POLKADOT, home.polkadotJs);

      await waitForWindow(driver, 'Commonwealth');
      assert((await driver.getCurrentUrl()).includes('commonwealth.im/edgeware/'),
        'PolkadotJs login flow failed to load Edgeware community page')
      const communityHome = new CommunityHome(driver);
      const accountName = await communityHome.getAccountName();
      assert(accountName === 'Tim', 'Account loaded from PolkadotJs is incorrect');
    }).timeout(60000)

    it('Should login with Keplr', async () => {
      const home = new HomePage();

      await home.initWithKeplr();
      driver = await home.loadPage();

      assert(await driver.getCurrentUrl() === 'https://commonwealth.im/', 'Home page failed to load');

      driver = await home.startLogin();
      const loginModal = new LoginModal(driver);
      await loginModal.connectWallet(WalletName.COSMOS, home.keplr);

      await waitForWindow(driver, 'Commonwealth');

      assert((await driver.getCurrentUrl()).includes('commonwealth.im/osmosis/'),
        'Keplr login flow failed to load Osmosis community page')
      const communityHome = new CommunityHome(driver);
      const accountName = await communityHome.getAccountName();
      assert(accountName === 'Tim', 'Account loaded from Keplr is incorrect');
    }).timeout(600000)
  })
  describe('Chain Connection Tests', function() {
    afterEach('close driver', async function () {
      await driver.quit()
    })

    it('Should connect to Ethereum', async () => {
      const base = new CommunityHome()
      driver = await base.initNoExtension();
      await driver.get('https://commonwealth.im/ethereum');
      const result = await base.connectToChain();
      assert.isTrue(result);
    }).timeout(60000)

    it('Should connect to Edgeware', async () => {
      const base = new CommunityHome();
      driver = await base.initNoExtension();
      await driver.get("https://commonwealth.im/edgeware");
      const result = await base.connectToChain();
      assert.isTrue(result);
    }).timeout(60000)
  })
})

describe('Commonwealth.im Firefox Selenium Tests', function() {})