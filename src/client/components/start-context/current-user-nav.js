import React, {useContext} from 'react'
import AppContext from './app-context'
import Icon from '../common/icon'

const CurrentUserNav = () => {
  let {user, refresh, busy} = useContext(AppContext)
  return (
    user ? (
      <span className="nav-text mr-3">Hi {user?.username}!</span>
    ) : (
      <span className="nav-text mr-3">
        {busy ? (
          <Icon icon="sync" spin/>
        ) : (
          <a href="#" onClick={(e) => { e.preventDefault(); refresh() }}>Login</a>
        )}
      </span>)
  )
}

export default CurrentUserNav
