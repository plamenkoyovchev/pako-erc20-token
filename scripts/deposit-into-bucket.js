/*
    1. approve Bucket contract (0x873289a1aD6Cf024B927bd13bd183B264d274c68)
    PakoToken.approve(bucketContractAddress, toWei('5'));

    2. deposit pako token into bucket contract
    bucketContract.drop(pakoTokenContractAddress, toWei('5'));
*/
const { ethers } = require("hardhat");
const { toWei } = require("../utils/utils");

const pakoTokenContractAddress = "0xd90F74f68BFb40FEa89b37019F80A04ea6D4524e";
const bucketContractAddress = "0x873289a1aD6Cf024B927bd13bd183B264d274c68";
const bucketContractABI = [
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: "address", name: "", type: "address" },
		],
		name: "Winner",
		type: "event",
	},
	{
		inputs: [
			{ internalType: "address", name: "erc20", type: "address" },
			{ internalType: "uint256", name: "amount", type: "uint256" },
		],
		name: "drop",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];

async function main() {
	const [signer] = await ethers.getSigners();

	// Get signer's owned contract
	const pakoToken = await ethers.getContractAt(
		"PakoToken",
		pakoTokenContractAddress
	);

	// Get already deployed contract instance
	const bucketContract = new ethers.Contract(
		bucketContractAddress,
		bucketContractABI,
		signer
	);

	const pakoTokensAmount = 5;
	console.log(
		`Approving transaction of ${pakoTokensAmount} Pako tokens to bucket contract...`
	);
	await pakoToken.approve(bucketContractAddress, toWei(`${pakoTokensAmount}`));
	console.log("Transaction approved!");

	console.log(
		`Transferring ${pakoTokensAmount} pako tokens to bucket contract...`
	);
	await bucketContract.drop(
		pakoTokenContractAddress,
		toWei(`${pakoTokensAmount}`)
	);
	console.log("Transfer completed!");
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});
