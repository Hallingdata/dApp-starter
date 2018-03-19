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
  <div className={classes.root}>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="title" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
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

export default withStyles(styles)<Props>(TopBar)
