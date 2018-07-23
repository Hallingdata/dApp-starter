import { drizzleConnect } from "drizzle-react"
import ContractInteractionDemo from "../components/ContractInteractionDemo"
import { addData } from "../actions/data"

const mapStateToProps = (state: any) => {
  return {
    simpleStorageStatus: state.contracts.SimpleStorage,
    account: state.accounts[0],
    dataArray: state.data.dataArray
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addData: (data: string) => dispatch(addData(data)),
  }
}

export default drizzleConnect(
  ContractInteractionDemo,
  mapStateToProps,
  mapDispatchToProps
)
