import React, {useContext} from "react"
import AppContext from "./app-context"

const CurrentUserNav = () => {
  let {user, refresh, busy} = useContext(AppContext)
  return (
    user ? (
      <span className="nav-text mr-3">Hi {user?.username}!</span>
    ) : (
      <span className="nav-text mr-3">
        {busy ? (
          <i className="fa fa-spin fa-sync" />
        ) : (
          <a href="#" onClick={(e) => {e.preventDefault(); refresh()}}>Login</a>
        )}
      </span>)
  )
}

export default CurrentUserNav
