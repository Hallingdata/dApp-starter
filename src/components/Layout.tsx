import * as React from "react"
import { SFC } from "react"
import { Drawer, List, StyleRulesCallback, withStyles } from "@material-ui/core"
import MenuItems from "./MenuItems"
import TopBar from "./TopBar"

type Props = { children: any }
type AllProps = Props & { classes: StyleClassNames }

const drawerWidth = 240

const Layout: SFC<AllProps> = ({ classes, children }) => (
  <div className={classes.root}>
    <TopBar title="MiningToken" />
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>{MenuItems}</List>
    </Drawer>
    <main className={classes.content}>{children}</main>
  </div>
)

type StyleClassNames = {
  root: string
  drawerPaper: string
  content: string
  toolbar: string
}

const styles: StyleRulesCallback = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: "hidden",
    position: "relative",
    display: "flex",
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
})

export default withStyles(styles)<Props>(Layout)
