require('dotenv').config();
require('@nomiclabs/hardhat-ethers');

const { PRIVATE_KEY } = process.env;

module.exports = {
  solidity: '0.8.19',
  defaultNetwork: 'goerli',
  networks: {
    hardhat: {},
    goerli: {
      url: 'https://rpc.ankr.com/eth_goerli',
      // https://rpc.ankr.com/eth_goerli
      accounts: [`0x${PRIVATE_KEY}`],
    },
    local: {
      url: 'http://127.0.0.1:8545',
      accounts: [`0x${PRIVATE_KEY}`],
      chainId: 355113,
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
