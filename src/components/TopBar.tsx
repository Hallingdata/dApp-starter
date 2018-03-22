import * as React from "react"
import { SFC } from "react"
import { withStyles } from "material-ui/styles"
import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import Typography from "material-ui/Typography"
import { StyleRulesCallback } from "material-ui"

type Props = {
    title: string
}
type AllProps = Props & { classes: StyleClassNames }

const TopBar: SFC<AllProps> = ({ classes, title }) => (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap={true}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
)

type StyleClassNames = {
  root: string
  appBar: string
}

const styles: StyleRulesCallback = theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
})

export default withStyles(styles)<Props>(TopBar)
