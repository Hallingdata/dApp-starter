import * as React from "react"
import { DrizzleProvider } from "drizzle-react"

import { LoadingContainer } from "drizzle-react-components"
import ContractInteractionContainer from "./containers/ContractInteractionContainer"

import store from "./store"
import Layout from "./components/Layout"
import drizzleOptions from "./drizzleOptions"

class App extends React.Component {
  render() {
    return (
      <DrizzleProvider options={drizzleOptions} store={store}>
        <LoadingContainer>
          <Layout>
            <div>
              <header>
                <h1>Demo</h1>
              </header>
              <ContractInteractionContainer />
            </div>
          </Layout>
        </LoadingContainer>
      </DrizzleProvider>
    )
  }
}

export default App
