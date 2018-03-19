pragma solidity ^0.4.20;

import "../node_modules/zeppelin-solidity/contracts/math/SafeMath.sol";
import "../node_modules/zeppelin-solidity/contracts/ownership/Ownable.sol";

contract Mining is Ownable {
  using SafeMath for uint256;

  string public name = "ThsMiningToken";
  string public symbol = "TMT";
  uint public decimals = 0;

  struct MiningContract {
    uint startBlock;
    uint expieringBlock;
    uint ths;
    uint lastPayout;
  }

  struct Payout {
    uint blockNumber;
    uint ethAmount;
    uint totalThs;
  }

  uint totalThs = 0;

  MiningContract[] public mContracts;
  Payout[] public payouts;

  mapping (uint => address) public mContractOwner;
  mapping (address => uint) mContractCount;

  // get all active and expired contracts by this owner
  function getMContractsByOwner(address _owner) external view returns(uint[]) {
    uint[] memory result = new uint[](mContractCount[_owner]);
    uint counter = 0;
    for (uint i = 0; i < mContracts.length; i++) {
      if (mContractOwner[i] == _owner) {
        result[counter] = i;
        counter++;
      }
    }
    return result;
  }

  function distributeMiningProfits() public payable {
    payouts.push(Payout(block.number, msg.value, totalThs));
  }

    // token holders withdraw profits
  function withdraw(uint contractId, uint payoutId) public {
    Payout memory payout = payouts[payoutId];
    MiningContract memory mContract = mContracts[contractId];
    require(msg.sender == mContractOwner[contractId]);
    require(contractIsActive(payout.blockNumber, contractId));
    require(mContract.lastPayout == payoutId.sub(1));
    uint amount = payout.ethAmount * (mContract.ths / payout.totalThs);
    mContractOwner[contractId].transfer(amount);
  }

  function contractIsActive(uint blockNumber, uint contractId) public view returns(bool) {
    return mContracts[contractId].startBlock < blockNumber && mContracts[contractId].expieringBlock > blockNumber;
  }

  function transfare(address _to, uint contractId) public returns (bool) {
    return true;
  }

  // mint new tokens when more hashingpower is avalible
  function mintTokens(address _to, uint amount) public onlyOwner {
        
  }

}
