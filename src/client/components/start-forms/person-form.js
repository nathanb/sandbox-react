import React from "react"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import InputField from "../common/input-field"
import ValidationForm from "../common/validation-form"

const PersonForm = ({person, onSave, onFieldChanged}) => {
  return (
    <ValidationForm onValidSubmit={onSave}>
      <InputField value={person.name} name="name" label="Name" placeholder="Enter name" required={true} onChange={onFieldChanged} />
      <InputField type="number" value={person.age + ""} name="age" label="Age" placeholder="Enter age" required={true} onChange={onFieldChanged} />
      <p>
        <Link className="btn btn-secondary mr-1" to={`/people/${person.id}`}>Cancel</Link>
        <button type="submit" className="btn btn-primary">Save</button>
      </p>
    </ValidationForm>
  )
}

PersonForm.propTypes = {
  person: PropTypes.object.isRequired
  ,onSave: PropTypes.func.isRequired
  ,onFieldChanged: PropTypes.func.isRequired
}

export default PersonForm
