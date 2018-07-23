import * as React from "react"
import { SFC } from "react"

import { DrizzleProvider } from "drizzle-react"
import { LoadingContainer } from "drizzle-react-components"
import ContractInteractionDemo from "./containers/ContractInteractionDemo"
import store from "./store"
import Layout from "./components/Layout"
import drizzleOptions from "./drizzleOptions"

const App: SFC = () => (
  <DrizzleProvider options={drizzleOptions} store={store}>
    <LoadingContainer>
      <Layout>
        <header>
          <h1>Demo</h1>
        </header>
        <ContractInteractionDemo />
      </Layout>
    </LoadingContainer>
  </DrizzleProvider>
)

export default App
