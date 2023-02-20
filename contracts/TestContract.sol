// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract TestContract{

  mapping(uint => uint) someData;

  function writeData(uint256[] memory numbersA, uint256[] memory numbersB) public {
    for (uint i = 0; i < numbersA.length; i++) {
      someData[numbersA[i]] = numbersB[i];
    }
  }

}
