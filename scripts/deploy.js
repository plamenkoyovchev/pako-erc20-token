const { ethers } = require("hardhat");

async function main() {
	const [deployer] = await ethers.getSigners();

	console.log(`Deploying contract with account: ${deployer.address}`);

	const weiAmount = (await deployer.getBalance()).toString();

	console.log(`Account balance: ${ethers.utils.formatEther(weiAmount)}`);

	const tokenContractFactory = await ethers.getContractFactory("PakoToken");
	const token = await tokenContractFactory.deploy();

	console.log(`Token address: ${token.address}`);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});
