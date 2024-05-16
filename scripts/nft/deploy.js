const hre = require("hardhat");

async function main() {
  const PowerBikeNFT = await hre.ethers.getContractFactory("PowerBikeNFT");

  const powerBikeNft = await PowerBikeNFT.deploy();

  console.log("PowerBike NFT deployed to: ", powerBikeNft.target);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
