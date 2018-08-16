import { drizzleConnect } from "drizzle-react"
import ReduxDemo from "../components/ReduxDemo"
import { addData } from "../actions/data"

const mapStateToProps = (state: any) => {
  return {
    dataArray: state.data.dataArray,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addData: (data: string) => dispatch(addData(data)),
  }
}

export default drizzleConnect(ReduxDemo, mapStateToProps, mapDispatchToProps)
