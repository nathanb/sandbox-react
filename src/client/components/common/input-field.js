import React from "react"
import PropTypes from "prop-types"

const InputField = ({value, name, label, type, placeholder, required, onChange}) => (
  <div className="form-group row">
    {label ? (<label htmlFor={`input_${name}`} className="col-sm-2 col-form-label">{label}</label>) : null}
    <div className="col-sm-10">
      <input type={type} name={name} id={`input_${name}`} className="form-control" placeholder={placeholder} maxLength="100" required={required} value={value} onChange={onChange} />
    </div>
  </div>
)
InputField.defaultProps = {
  type: "text"
  ,required: false
  ,value: ""
  ,label: null
  ,name: "input"
}
InputField.propTypes = {
  type: PropTypes.string
  ,required: PropTypes.bool
  ,value: PropTypes.string.isRequired
  ,label: PropTypes.string
  ,name: PropTypes.string
  ,onChange: PropTypes.func.isRequired
}
export default InputField
