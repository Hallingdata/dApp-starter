import * as React from "react"
import { SFC } from "react"
import { StyleRulesCallback, withStyles } from "@material-ui/core"
import { ContractData } from "drizzle-react-components"

type Props = {
  drizzleStatus: any
  contracts: any
}
type AllProps = Props & { classes: StyleClassNames }

const DrizzleStatus: SFC<AllProps> = (
  { classes, drizzleStatus, contracts },
  context
) => {
  // const contracts = context.drizzle.contracts

  return drizzleStatus.initialized ? (
    <div className={classes.root}>
      <p>
        drizzleStatus: {drizzleStatus.initialized ? "initialized" : "loading.."}
      </p>
      <h2>GustavoCoin:</h2>
      <p>
        Symbol: <ContractData contract="GustavoCoin" method="symbol" />
      </p>
    </div>
  ) : (
    <p>Loading...</p>
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

export default withStyles(styles)<Props>(DrizzleStatus)
