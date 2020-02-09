import React from "react"
import Nav from "./nav"

const DefaultLayout = ({children}) => (
  <div className="container">
    <header>
      <Nav />
    </header>
    <div role="main" data-hook="main" className="container mt-4">
      {children}
    </div>
  </div>
)

export default DefaultLayout
