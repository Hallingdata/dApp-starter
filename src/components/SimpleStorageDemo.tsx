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
  CircularProgress,
} from "@material-ui/core"
import { ContractData, ContractForm } from "drizzle-react-components"

type Props = {
  simpleStorageStatus: any
  contract: any
}

type AllProps = Props & { classes: StyleClassNames }

const SimpleStorageDemo: SFC<AllProps> = (
  { simpleStorageStatus, contract, classes }
) => {

  // How to interact with contracts directly
  const resetSimpleStorage = () => contract.methods.set(0).send()

  const simpleStorageSynced = simpleStorageStatus.synced

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          SimpleStorage - smart contract
        </Typography>
        <Typography variant="headline" component="h2">
          Value:
          <ContractData contract="SimpleStorage" method="get" />
        </Typography>

        <ContractForm
          contract="SimpleStorage"
          method="set"
          labels={["Change the value"]}
        />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={resetSimpleStorage} variant="raised">
          Set storage to 0
        </Button>
      </CardActions>
      {simpleStorageSynced ? (
        ""
      ) : (
        <CircularProgress className={classes.progress} size={20} />
      )}
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

export default withStyles(styles)<Props>(SimpleStorageDemo)