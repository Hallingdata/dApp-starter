import * as React from "react"
import { Component, Children } from "react"

class Loading extends Component {
  constructor(props: any, context: any) {
    super(props)
  }

  render() {
    if ((this.props as any).web3.status === "failed") {
      return (
        // Display a web3 warning.
        <main>
          <h1>⚠️</h1>
          <p>
            This browser has no connection to the Ethereum network. Please use
            the Chrome/FireFox extension MetaMask, or dedicated Ethereum
            browsers Mist or Parity.
          </p>
        </main>
      )
    }

    if ((this.props as any).drizzleStatus.initialized) {
      // Load the dapp.
      return Children.only(this.props.children)
    }

    return (
      // Display a loading indicator.
      <main>
        <h1>⚙️</h1>
        <p>Loading dapp...</p>
        <pre>{JSON.stringify((this.props as any).drizzleStatus)}</pre>
      </main>
    )
  }
}

export default Loading
