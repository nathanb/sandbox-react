import React from "react"

const Alert = ({message}) => (
  message ? (<div className="alert alert-danger">{message}</div>) : null
)

export default Alert
