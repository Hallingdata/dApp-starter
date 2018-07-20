import GustavoCoin from "./contracts/GustavoCoin.json"
import SimpleStorage from "./contracts/SimpleStorage.json"

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545",
    },
  },
  contracts: [GustavoCoin, SimpleStorage],
  events: [],
}

export default drizzleOptions
