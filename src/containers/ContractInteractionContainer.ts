import { drizzleConnect } from "drizzle-react"
import ContractInteraction from "../components/ContractInteraction"

const mapStateToProps = (state: any) => {
  return {
    drizzleStatus: state.drizzleStatus,
    contracts: state.contracts,
  }
}

export default drizzleConnect(ContractInteraction, mapStateToProps)
