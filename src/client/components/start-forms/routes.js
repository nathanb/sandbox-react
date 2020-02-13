import React,{lazy, Suspense} from 'react'
import {Route, Switch} from "react-router-dom"
import NotFoundPage from "../not-found-page"
import IndexPage from "../start-context/index-page"
import AboutPage from "../start-context/about-page"
// import PeoplePage from "../start-context/list-page"
// import PersonEditPage from "./edit-page-full"
import Loading from "../common/loading"
// import PersonPage from "./detail-page"
// import PersonEditPage from "./edit-page"
const PeoplePage = lazy(() => import("../start-context/list-page"))
const PersonPage = lazy(() => import("./detail-page"))
const PersonEditPage = lazy(() => import("./edit-page"))
const TestChartPage = lazy(() => import("./test-chart"))



const Routes = () => (
  <Suspense fallback={<Loading/>}>
    <Switch>
      <Route exact path="/" component={IndexPage}/>
      <Route exact path="/about" component={AboutPage}/>
      <Route exact path="/people" component={PeoplePage}/>
      <Route exact path="/people/:id" component={PersonPage}/>
      <Route exact path="/people/:id/edit" component={PersonEditPage}/>
      <Route exact path="/chart" component={TestChartPage}/>
      <Route component={NotFoundPage} />
    </Switch>
  </Suspense>
)
export default Routes
