import React from "react"
import {useAppContext} from "./use-context-hook"

const RandomDataUpdate = () => {
  let {backgroundUpdateData} = useAppContext()
  return (
    <span className="nav-text mr-3"><code>random: {backgroundUpdateData}</code></span>
  )
}

export default RandomDataUpdate
