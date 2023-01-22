import { ethers } from "hardhat";

const fromWei = ethers.utils.formatEther;
const toWei = ethers.utils.parseEther;

module.exports = {
	fromWei,
	toWei,
};
