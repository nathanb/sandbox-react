import React from "react"
import {Link} from "react-router-dom"
import DefaultLayout from "./default-layout"

const AboutPage = () => (
  <DefaultLayout>
    <h1>About</h1>
    <p>
      <Link to="/">Link to home test</Link>
    </p>
  </DefaultLayout>
)

export default AboutPage
