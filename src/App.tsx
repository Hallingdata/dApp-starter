import * as React from "react"
import TopBar from "./components/TopBar"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TopBar title="Bitmine"/>
        <header className="App-header">
          <h1 className="App-title">Mining Token</h1>
        </header>
        <p className="App-intro">
          .
        </p>
      </div>
    )
  }
}

export default App
