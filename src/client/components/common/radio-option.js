import React from 'react'
import PropTypes from 'prop-types'

const RadioOption = ({label, name, value, checked, disabled, onChange}) => (
  <div className="form-check">
    <label className="form-check-label">
      <input className="form-check-input" type="radio" name={name} onChange={onChange} value={value} checked={checked} disabled={disabled}/>
      {label || value}
    </label>
  </div>
)
RadioOption.propTypes = {
  disabled: false,
  checked: false,
}
RadioOption.propTypes = {
  disabled: PropTypes.bool,
  checked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default RadioOption
