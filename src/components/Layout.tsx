import * as React from "react"
import { SFC } from "react"
import { StyleRulesCallback, withStyles } from "@material-ui/core"
import TopBar from "./TopBar"

type Props = { children: any }
type AllProps = Props & { classes: StyleClassNames }

const Layout: SFC<AllProps> = ({ classes, children }) => (
  <div className={classes.root}>
    <TopBar title="dApp starter" />
    <main className={classes.content}>{children}</main>
  </div>
)

type StyleClassNames = {
  root: string
  content: string
}

const styles: StyleRulesCallback = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
    paddingTop: 64,
  },
})

export default withStyles(styles)<Props>(Layout)
