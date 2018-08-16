import * as React from "react"
import { SFC } from "react"
import {
  StyleRulesCallback,
  withStyles,
  Typography,
  Grid,
} from "@material-ui/core"
import PropTypes from "prop-types"
import SwarmDemo from "../containers/SwarmDemo"
import SimpleStorageDemo from "./SimpleStorageDemo"
import GustavoCoinDemo from "./GustavoCoinDemo"
import ReduxDemo from "../containers/ReduxDemo"

type Props = {
  simpleStorageStatus: any
  account: string
  dataArray: string[]
  addData: (data: string) => void
}

type AllProps = Props & { classes: StyleClassNames }

type Context = {
  drizzle: {
    web3: any
    contracts: any
  }
}

const ContractInteraction: SFC<AllProps> = (
  { simpleStorageStatus, dataArray, account, addData, classes },
  { drizzle }: Context
) => {
  const contracts = drizzle.contracts

  // How to get ahold of web3:
  const web3 = drizzle.web3
  console.log("web3 version: " + web3.version)

  const addDateToDataArray = () => addData(Date.now().toString())

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={4}>
        <SimpleStorageDemo
          simpleStorageStatus={simpleStorageStatus}
          contract={contracts.SimpleStorage}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <GustavoCoinDemo />
      </Grid>
      <Grid item xs={12} sm={4}>
        <ReduxDemo />
      </Grid>
      <Grid item xs={12} sm={4}>
        <SwarmDemo />
      </Grid>
      <Typography>Active account: {account}</Typography>
    </Grid>
  )
}

type StyleClassNames = {
  root: string
}

const styles: StyleRulesCallback = theme => ({
  root: {
    flexGrow: 1,
  },
})

ContractInteraction.contextTypes = {
  drizzle: PropTypes.object,
}

export default withStyles(styles)<Props>(ContractInteraction)
