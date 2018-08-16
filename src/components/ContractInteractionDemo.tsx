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
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@material-ui/core"
import { ContractData, ContractForm } from "drizzle-react-components"
import PropTypes from "prop-types"
import SwarmDemo from "../containers/SwarmDemo"

type Props = {
  simpleStorageStatus: any
  account: string
  dataArray: string[]
  addData: (data: string) => void
}

type AllProps = Props & { classes: StyleClassNames }

type Context = {
  drizzle: {
    web3: any
    contracts: any
  }
}

const ContractInteraction: SFC<AllProps> = (
  { simpleStorageStatus, dataArray, account, addData, classes },
  { drizzle }: Context
) => {
  const contracts = drizzle.contracts

  // How to interact with contracts directly
  const resetSimpleStorage = () => contracts.SimpleStorage.methods.set(0).send()

  // How to get ahold of web3:
  const web3 = drizzle.web3
  console.log("web3 version: " + web3.version)

  const simpleStorageSynced = simpleStorageStatus.synced

  const addDateToDataArray = () => addData(Date.now().toString())

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={4}>
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
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary">
              GustavoCoin - smart contract
            </Typography>
            <Typography variant="headline" component="h2">
              Symbol: <ContractData contract="GustavoCoin" method="symbol" />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
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
      </Grid>
      <SwarmDemo />
      <Typography>Active account: {account}</Typography>
    </Grid>
  )
}

type StyleClassNames = {
  root: string
  card: string
  title: string
  progress: string
}

const styles: StyleRulesCallback = theme => ({
  root: {
    flexGrow: 1,
  },
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

ContractInteraction.contextTypes = {
  drizzle: PropTypes.object,
}

export default withStyles(styles)<Props>(ContractInteraction)
