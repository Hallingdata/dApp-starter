import * as React from "react"
import { DrizzleProvider } from "drizzle-react"

import LoadingContainer from "./containers/LoadingContainer"
import DrizzleStatusContainer from "./containers/DrizzleStatusContainer"

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
                <h1>GustavoCoin</h1>
              </header>
              <DrizzleStatusContainer />
            </div>
          </Layout>
        </LoadingContainer>
      </DrizzleProvider>
    )
  }
}

export default App
