import React from "react"
import {Link, NavLink} from "react-router-dom"

const AboutPage = () => (
  <div className="container">
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">React Sandbox</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" exact={true} className="nav-link" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" exact={true} className="nav-link" activeClassName="active">About</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-text text-light">v1.0.0</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div role="main" data-hook="main" className="container mt-4">
      <h1>About</h1>
      <p>
        <Link to="/">Link to home test</Link>
      </p>
    </div>
  </div>
)

export default AboutPage
