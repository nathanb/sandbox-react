import React from "react"

const Alert = ({message, type}) => (
  message ? (<div className={`alert alert-${type}`}>{message}</div>) : null
)
Alert.defaultProps = {
  type: "danger"
}
export default Alert
