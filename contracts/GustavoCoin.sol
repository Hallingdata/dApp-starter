pragma solidity ^0.4.19;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract GustavoCoin is MintableToken {
  string public name = "GUSTAVO COIN";
  string public symbol = "GUS";
  uint8 public decimals = 18;
}