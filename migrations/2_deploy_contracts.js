const GustavoCoinCrowdsale = artifacts.require("./GustavoCoinCrowdsale.sol")
const GustavoCoin = artifacts.require("./GustavoCoin.sol")
const SimpleStorage = artifacts.require("./SimpleStorage")

module.exports = function(deployer, network, accounts) {
  const openingTime = web3.eth.getBlock("latest").timestamp + 2 // two secs in the future
  const closingTime = openingTime + 86400 * 20 // 20 days
  const rate = new web3.BigNumber(1000)
  const wallet = accounts[1]

  return deployer
    .then(() => {
      return deployer.deploy(SimpleStorage, 2)
    })
    .then(() => {
      return deployer.deploy(GustavoCoin)
    })
    .then(() => {
      return deployer.deploy(
        GustavoCoinCrowdsale,
        openingTime,
        closingTime,
        rate,
        wallet,
        GustavoCoin.address
      )
    })
}
