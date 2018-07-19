import GustavoCoin from "./contracts/GustavoCoin.json"

const drizzleOptions = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545",
    },
  },
  contracts: [GustavoCoin],
  events: [],
}

export default drizzleOptions
