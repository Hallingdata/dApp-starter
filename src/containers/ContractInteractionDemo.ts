import { drizzleConnect } from "drizzle-react"
import ContractInteractionDemo from "../components/ContractInteractionDemo"

const mapStateToProps = (state: any) => {
  return {
    simpleStorageStatus: state.contracts.SimpleStorage,
    account: state.accounts[0],
  }
}

export default drizzleConnect(
  ContractInteractionDemo,
  mapStateToProps
)
