import * as React from "react"
import { SFC } from "react"
import { StyleRulesCallback, withStyles } from "@material-ui/core"

type Props = {
  drizzleStatus: any
  miningToken: any
}
type AllProps = Props & { classes: StyleClassNames }

const DrizzleStatus: SFC<AllProps> = ({ classes, drizzleStatus, miningToken }) => (
  <div className={classes.root}>
    <p>drizzleStatus: {JSON.stringify(drizzleStatus)}</p>
    <p>miningToken: {JSON.stringify(miningToken)}</p>
  </div>

)

type StyleClassNames = {
  root: string
}

const styles: StyleRulesCallback = theme => ({
  root: {
    flexGrow: 1,
  },
})

export default withStyles(styles)<Props>(DrizzleStatus)
