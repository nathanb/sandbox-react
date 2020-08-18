import React from 'react'
import PropTypes from 'prop-types'

const SelectField = ({value, name, label, onChange, options, ...more}) => (
  <div className="form-group row">
    {label ? (<label htmlFor={`input_${name}`} className="col-sm-2 col-form-label">{label}</label>) : null}
    <div className="col-sm-10">
      <select className="form-control" id={`input_${name}`} name={name} value={value} onChange={onChange} {...more}>
        {options.map((o, ox) => (<option key={ox} value={typeof o === 'string' ? o : o.value}>{typeof o === 'string' ? o : o.text}</option>))}
      </select>
    </div>
  </div>
)
SelectField.defaultProps = {
  disabled: false,
  required: false,
  value: '',
  label: null,
  options: [''],
}
SelectField.propTypes = {
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string])),
}
export default SelectField
