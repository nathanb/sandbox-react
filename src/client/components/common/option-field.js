import React from "react"
import PropTypes from "prop-types"

const OptionField = ({checked, name, label, disabled, required, onChange}) => (
  <div className="form-group row">
    <div className="offset-2 col-10">
      <div className="custom-control custom-switch">
        <input type="checkbox" name={name} className="custom-control-input" id={`input_${name}`} onChange={onChange} checked={checked}/>
        {label ? (<label className="custom-control-label" htmlFor={`input_${name}`}>{label}</label>) : null}
      </div>
    </div>
  </div>
)

OptionField.defaultProps = {
  disabled: false
  ,required: false
  ,checked: false
  ,label: null
}

OptionField.propTypes = {
  disabled: PropTypes.bool
  ,required: PropTypes.bool
  ,checked: PropTypes.bool.isRequired
  ,label: PropTypes.string
  ,name: PropTypes.string.isRequired
  ,onChange: PropTypes.func.isRequired
}
export default OptionField
