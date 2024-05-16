const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const PowerBikeNFTFactory = await hre.ethers.getContractFactory(
    "PowerBikeNFT"
  );
  const powerBikeNft = await PowerBikeNFTFactory.attach(
    process.env.CONTRACT_ADDRESS
  );

  const mintTx = await powerBikeNft.safeMint(5);
  await mintTx.wait();

  console.log(
    "Successfully minted: " +
      (await powerBikeNft.balanceOf(process.env.WALLET_ADDRESS)) +
      " PowerBike NFTs to " +
      process.env.WALLET_ADDRESS
  );
  console.log(await powerBikeNft.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// CONTRACT_ADDRESS=0x320cD64973b40c072645e73c6F3B8224ea6DA139
