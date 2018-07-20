import * as React from "react"
import { SFC } from "react"
import { StyleRulesCallback, withStyles, Button } from "@material-ui/core"
import { ContractData, ContractForm } from "drizzle-react-components"
import PropTypes from "prop-types"

type Props = {}
type AllProps = Props & { classes: StyleClassNames }

const ContractInteraction: SFC<AllProps> = ({ classes }, context) => {
  const contracts = context.drizzle.contracts

  return (
    <div className={classes.root}>
      <div>
        <h2>SimpleStorage</h2>
        Value: <ContractData contract="SimpleStorage" method="get" />
        <ContractForm
          contract="SimpleStorage"
          method="set"
          labels={["Change the value"]}
        />
        <Button
          variant="raised"
          onClick={() => contracts.SimpleStorage.methods.set(0).send()}
        >
          Set storage to 0
        </Button>
      </div>
      <div>
        <h2>GustavoCoin</h2>
        Symbol: <ContractData contract="GustavoCoin" method="symbol" />
      </div>
    </div>
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
