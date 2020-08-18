import React from 'react'
import {Route, Switch} from 'react-router-dom'

import NotFoundPage from '../not-found-page'
import IndexPage from './index-page' // "index" left for verbosity
import AboutPage from './about-page'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={IndexPage}/>
    <Route exact path="/about" component={AboutPage}/>
    <Route component={NotFoundPage} />
  </Switch>
)
export default Routes
