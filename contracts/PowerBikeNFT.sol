// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.20;

import "erc721a/contracts/ERC721A.sol";

contract PowerBikeNFT is ERC721A {
    uint8 public maxSupply = 5;

    constructor() ERC721A("PowerBike", "PBK") {}

    function safeMint(uint8 _quantity) external payable {
        _safeMint(msg.sender, _quantity);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmSUZJkovpkvpToa36WdLpq7mV3EbaCbS755wtiZGB7vuh/";
    }

    function promptDescription() external pure returns (string memory) {
        return "Power Bike NFT";
    }

    function balanceOf(address owner) public view override returns (uint256) {
        return super.balanceOf(owner);
    }
}

// c/a 
