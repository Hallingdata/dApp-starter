
import * as React from "react"
import { SFC } from "react"
import {
  StyleRulesCallback,
  withStyles,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core"
import { ContractData, ContractForm } from "drizzle-react-components"

type Props = {
}

type AllProps = Props & { classes: StyleClassNames }

const GustavoCoinDemo: SFC<AllProps> = (
  { classes }
) => {

  return (
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

export default withStyles(styles)<Props>(GustavoCoinDemo)