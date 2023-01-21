// https://dev.to/yakult/a-concise-hardhat-tutorial-part-2-writing-erc20-2jpm

const { ethers } = require("hardhat");

const address = "0xd90F74f68BFb40FEa89b37019F80A04ea6D4524e";

const fromWei = ethers.utils.formatEther;
const toWei = ethers.utils.parseEther;

async function main() {
	const pakoToken = await ethers.getContractAt("PakoToken", address);

	await pakoToken.transfer(
		"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
		toWei("10")
	);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});
