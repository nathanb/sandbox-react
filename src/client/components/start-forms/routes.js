import React from 'react'
import {Route, Switch} from "react-router-dom"

import NotFoundPage from "../not-found-page"
import IndexPage from "../start-context/index-page"
import AboutPage from "../start-context/about-page"
import PeoplePage from "../start-context/list-page"
import PersonPage from "./detail-page"
// import PersonEditPage from "./edit-page-full"
import PersonEditPage from "./edit-page"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={IndexPage}/>
    <Route exact path="/about" component={AboutPage}/>
    <Route exact path="/people" component={PeoplePage}/>
    <Route exact path="/people/:id" component={PersonPage}/>
    <Route exact path="/people/:id/edit" component={PersonEditPage}/>
    <Route component={NotFoundPage} />
  </Switch>
)
export default Routes
