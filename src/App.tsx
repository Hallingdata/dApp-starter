import * as React from "react"
import TopBar from "./components/TopBar"
import { DrizzleProvider } from "drizzle-react"
import { Provider } from "react-redux"

// Import contract
import GustavoCoin from "./contracts/GustavoCoin.json"

import LoadingContainer from "./containers/LoadingContainer"
import DrizzleStatusContainer from "./containers/DrizzleStatusContainer"

console.log("Gustavo: " + GustavoCoin)
import store from "./store"

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545",
    },
  },
  contracts: [GustavoCoin],
  events: [],
}

class App extends React.Component {
  render() {
    return (
      <DrizzleProvider options={options}>
        <Provider store={store}>
          <LoadingContainer>
            <div className="App">
              <TopBar title="Bitmine" />
              <header className="App-header">
                <h1 className="App-title">Mining Token</h1>
              </header>
              <h1>LOADED!!!! YHEA!!</h1>
              <p className="App-intro">App</p>
              <DrizzleStatusContainer/>
            </div>
          </LoadingContainer>
        </Provider>
      </DrizzleProvider>
    )
  }
}

export default App
