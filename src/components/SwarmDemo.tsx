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
  ListItemText,
  Grid,
} from "@material-ui/core"
import { ContractData, ContractForm } from "drizzle-react-components"

type Props = {
  swarmHashes: string[]
  publishToSwarm: (data: any) => void
  selectedContent: any
  fetchFromSwarm: (hash: string) => void
}

type AllProps = Props & { classes: StyleClassNames }

const SwarmDemo: SFC<AllProps> = ({
  swarmHashes,
  publishToSwarm,
  fetchFromSwarm,
  selectedContent,
  classes,
}) => {
  const content = { boy: "asgeir", time: Date.now() }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          SWARM demo
        </Typography>
        <Typography component="h2">
          Click to publish some data to SWARM
        </Typography>
        <CardActions>
          <Button size="small" onClick={() => publishToSwarm(content)} variant="raised">
            Publish data to SWARM
          </Button>
        </CardActions>
        {swarmHashes.length !== 0 ? (
          <Typography component="h2">
            Click a hash to retrieve the content
          </Typography>
        ) : (
          <span />
        )}

        <List>
          {swarmHashes.map(hash => (
            <ListItem key={hash} button>
              <ListItemText
                primary={hash.slice(0, 10) + "..."}
                onClick={() => fetchFromSwarm(hash)}
              />
            </ListItem>
          ))}
        </List>
        {selectedContent !== "" ? (
          <Typography variant="caption" className={classes.title}>
            Selected content:{" "}
            <pre>{JSON.stringify(selectedContent, null, " ")}</pre>
          </Typography>
        ) : (
          <span />
        )}
      </CardContent>
    </Card>
  )
}

type StyleClassNames = {
  card: string
  title: string
}

const styles: StyleRulesCallback = theme => ({
  card: {
    width: 275,
    minHeight: 200,
    marginBottom: 50,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
})

export default withStyles(styles)<Props>(SwarmDemo)
