import React from 'react'
import {render} from 'react-dom'
import {Router} from "react-router-dom"
import {createBrowserHistory} from "history"
// import Routes from "./components/start-simple/routes"
// import Routes from "./components/start-layout/routes"
import Routes from "./components/start-people/routes"

import "../stylesheets/index.scss"

const customHistory = createBrowserHistory()
const target = document.querySelector('#main')

render((
  <Router history={customHistory}>
    <Routes />
  </Router>
), target)
