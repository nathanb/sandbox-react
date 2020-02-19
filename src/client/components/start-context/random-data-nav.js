import React, {useContext} from "react"
import AppContext from "./app-context"

const RandomDataUpdate = () => {
  let {backgroundUpdateData} = useContext(AppContext)
  return (
    <span className="nav-text mr-3"><code>random: {backgroundUpdateData}</code></span>
  )
}

export default RandomDataUpdate
