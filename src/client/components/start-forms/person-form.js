import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import InputField from '../common/input-field'
import SelectField from '../common/select-field'
import OptionField from '../common/option-field'
import RadioFields from '../common/radio-field'
import ValidatedForm from '../common/validated-form'
import _defaults from 'lodash/defaults'

const PersonForm = ({person, onSave}) => {
  const defaultValues = {name: '', age: 0, id: '', hasHair: false, hairColor: '', randomField: ''}
  const [canSelectHair, setCanSelectHair] = useState(false)

  // this component will keep its own field data. It must be initialized with all the props for the fields because of the bindings. We'll use _defaults to init an empty form
  const [fields, setFields] = useState(defaultValues)
  // const [errors, setErrors] = useState({})

  useEffect(() => {
    // init the form with the person data when its id changes
    // we're using defaults to protect the props and ensure all props have values for input.
    setFields(_defaults({}, person, defaultValues))
  }, [person.id])

  useEffect(() => {
    // when hasHair changes, we're updating the canSelectHair state for rendering updates
    setCanSelectHair(!fields.hasHair)
  }, [fields.hasHair])

  const onFieldChanged = (e) => {
    let name = e.target.name
    let value = e.target.value
    let shallowClone = {...fields}
    switch (e.target.type) {
      case 'checkbox': value = e.target.checked
    }
    shallowClone[name] = value
    setFields(shallowClone)
    console.log(`changed ${name} to ${value}`)
  }

  const onSubmit = () => {
    // this is already validated. Send the new data up the chain for a save
    onSave(fields)
  }

  return (
    <ValidatedForm onValidSubmit={onSubmit}>
      <InputField value={fields.name} name="name" label="Name" placeholder="Enter name" required={true} onChange={onFieldChanged} />
      <InputField type="number" value={fields.age + ''} name="age" label="Age" placeholder="Enter age" required={true} onChange={onFieldChanged} />
      <OptionField name="hasHair" label="Has hair" checked={fields.hasHair} onChange={onFieldChanged}/>
      <SelectField name="hairColor" label="Hair color" onChange={onFieldChanged} value={fields.hairColor} disabled={canSelectHair} options={[{text: 'Not set', value: ''}, 'Blonde', 'Blue', 'Brown', 'Black', 'Red', 'Orange', 'Purple']}/>

      <RadioFields name="randomField" value={fields.randomField} options={['First', 'Second', {value: 'Third', disabled: true}]} onChange={onFieldChanged}/>

      <p>
        <Link className="btn btn-secondary mr-1" to={`/people/${fields.id}`}>Cancel</Link>
        <button type="submit" className="btn btn-primary">Save</button>
      </p>
    </ValidatedForm>
  )
}

PersonForm.propTypes = {
  person: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
}

export default PersonForm
