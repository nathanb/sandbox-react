import React from 'react'
import {Route, Switch} from 'react-router-dom'

import NotFoundPage from '../not-found-page'
import IndexPage from './index-page'
import AboutPage from './about-page'
import PersonPage from './detail-page'
import PeoplePage from './list-simple-page'
// import PeoplePage from "./list-page"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={IndexPage}/>
    <Route exact path="/about" component={AboutPage}/>
    <Route exact path="/people" component={PeoplePage}/>
    <Route exact path="/people/:id" component={PersonPage}/>
    <Route component={NotFoundPage} />
  </Switch>
)
export default Routes
