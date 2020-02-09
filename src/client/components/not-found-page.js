import React from 'react'
import {Link} from "react-router-dom"

const NotFoundPage = () => (
  <div className="container">
    <h1>Page not found</h1>
    <p className="lead">The page you're looking for doesn't exist. <Link to="/">Try from here</Link></p>
  </div>
)

export default NotFoundPage
