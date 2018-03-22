import { drizzleConnect } from "drizzle-react"
import DrizzleStatus from "../components/DrizzleStatus"

const mapStateToProps = (state: any) => {
  console.log("state: " + JSON.stringify(state))
  return {
    drizzleStatus: state.drizzleStatus,
    miningToken: state.contracts.MiningToken,
  }
}

export default drizzleConnect(DrizzleStatus, mapStateToProps)
