import React from "react"
import PropTypes from "prop-types"
import RadioOption from "./radio-option"

const RadioField = ({value, name, label, disabled, required, onChange, options}) => (
  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
      <div className="col-sm-10">
        {options.map((o,ox) => (
          <RadioOption
            key={ox}
            name={name}
            value={typeof o === "string" ? o : o.value}
            checked={(typeof o === "string" ? o : o.value) === value}
            label={typeof o === "string" ? o : o.label}
            onChange={onChange}
            disabled={o.disabled}
          />
        ))}
      </div>
    </div>
  </fieldset>
)
RadioField.defaultProps = {
  disabled: false
  ,required: false
  ,value: ""
  ,label: null
  ,options: [""]
}
RadioField.propTypes = {
  disabled: PropTypes.bool
  ,required: PropTypes.bool
  ,value: PropTypes.string.isRequired
  ,label: PropTypes.string
  ,name: PropTypes.string.isRequired
  ,onChange: PropTypes.func.isRequired
  ,options: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string]))
}
export default RadioField
