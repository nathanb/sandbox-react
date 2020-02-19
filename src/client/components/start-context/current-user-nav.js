import React from "react"
import {useAppContext} from "./use-context-hook"

const CurrentUserNav = () => {
  let {user, busy, refresh} = useAppContext()
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
