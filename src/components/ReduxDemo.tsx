import * as React from "react"
import { SFC } from "react"
import {
  StyleRulesCallback,
  withStyles,
  Button,
  Typography,
  Card,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core"

type Props = {
  dataArray: string[]
  addData: (data: string) => void
}

type AllProps = Props & { classes: StyleClassNames }

const ReduxDemo: SFC<AllProps> = ({ dataArray, addData, classes }) => {
  const addDateToDataArray = () => addData(Date.now().toString())
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Redux demo
        </Typography>
        <Typography variant="headline" component="h2">
          Data:
        </Typography>
        <CardActions>
          <Button size="small" onClick={addDateToDataArray} variant="raised">
            Add date
          </Button>
        </CardActions>
        <List>
          {dataArray.map(data => (
            <ListItem key={data}>
              <ListItemText primary={data} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

type StyleClassNames = {
  card: string
  progress: string
  title: string
}

const styles: StyleRulesCallback = theme => ({
  card: {
    width: 275,
    minHeight: 200,
    marginBottom: 50,
  },
  progress: {
    float: "right",
    padding: 5,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
})

export default withStyles(styles)<Props>(ReduxDemo)