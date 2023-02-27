require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { PRIVATE_KEY } = process.env;

module.exports = {
    solidity: '0.8.19',
    defaultNetwork: 'goerli',
    networks: {
        hardhat: {},
        goerli: {
            url: 'https://rpc.ankr.com/eth_goerli',
            accounts: [`0x${PRIVATE_KEY}`]
        }
    },
    settings: {
        optimizer: {
            enabled: true,
            runs: 200,
        },
    },
};