import React from 'react'

const AboutPage = () => (
  <div className="container">
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">React Sandbox</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">About</a>
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
        <a href="/">Link to home test</a>
      </p>
    </div>
  </div>
)

export default AboutPage
