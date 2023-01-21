require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_RPC_URL = process.env.ALCHEMY_GOERLI_URL;
const PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_KEY;

module.exports = {
	solidity: "0.8.17",
	networks: {
		goerli: {
			url: GOERLI_RPC_URL,
			accounts: [PRIVATE_KEY],
			chainId: 5,
		},
	},
	etherscan: {
		apiKey: ETHERSCAN_API_KEY,
	},
};
