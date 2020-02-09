import React from "react"
import {Link, useRouteMatch} from "react-router-dom"
import DefaultLayout from "../context/default-layout"

const IndexPage = () => {
  let match = useRouteMatch() //can use from anywhere
  return (
    <DefaultLayout>
      <h1>Home</h1>
      <p>
        We have access to the current path from any component using <code>useRouteMatch()</code>: {match.url}
      </p>
      <p>
        <Link to="/about">Link to about test</Link>
      </p>
    </DefaultLayout>
  )
}

export default IndexPage
