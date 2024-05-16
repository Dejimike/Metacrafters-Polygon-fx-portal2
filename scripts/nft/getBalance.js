const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const PowerBikeNFT = await hre.ethers.getContractFactory("PowerBikeNFT");

  const powerBikeNft = await PowerBikeNFT.attach(process.env.CONTRACT_ADDRESS);
  const balance = (
    await powerBikeNft.balanceOf(process.env.WALLET_ADDRESS)
  ).toString();

  console.log("Balance: ", balance);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
