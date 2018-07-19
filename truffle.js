var path = require("path")

module.exports = {
  // See <http://truffeframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "./src/contracts"),
  //contracts_build_directory: "./src/contracts", // this is not working do to a bug (https://github.com/trufflesuite/truffle/issues/862)
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
    },
  },
}
