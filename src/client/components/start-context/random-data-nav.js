import React from "react"
import AppContext from "./app-context"

const RandomDataUpdate = () => (
  <AppContext.Consumer>
    {({context, refresh}) => (
      <span className="nav-text mr-3"><code>random: {context.backgroundUpdateData}</code></span>)
    }
  </AppContext.Consumer>
)

export default RandomDataUpdate
