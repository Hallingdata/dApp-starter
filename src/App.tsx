import * as React from "react"
import { SFC } from "react"

import { DrizzleProvider } from "drizzle-react"
import { LoadingContainer } from "drizzle-react-components"
import ContractInteraction from "./components/ContractInteraction"
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
        <ContractInteraction />
      </Layout>
    </LoadingContainer>
  </DrizzleProvider>
)

export default App
