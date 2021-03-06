import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import CurrentUserNavItem from './current-user-nav'
import RandomDataUpdateItem from './random-data-nav'

const HeaderNav = () => {
  // We're not being fancy here. We could use key-frames to animate the markup or make it pretty but for simplicity; we'll just hide/show it
  const [show, setShow] = useState(false)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">React Sandbox</Link>
      <button className="navbar-toggler" type="button" onClick={() => { setShow(!show) }} aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${show ? 'show' : ''}`}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" exact={true} className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/people" exact={true} className="nav-link">People</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/chart" exact={true} className="nav-link">Test Chart (code splitting)</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact={true} className="nav-link">About</NavLink>
          </li>
        </ul>
        <RandomDataUpdateItem />
        <CurrentUserNavItem />
        <span className="nav-text">v1.0.0</span>
      </div>
    </nav>
  )
}
export default HeaderNav
