import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const PeopleRow = ({person}) => (
  <tr>
    <td><Link to={`/people/${person.id}`}>{person.name}</Link></td>
    <td>{person.age}</td>
    <td>{person.hasHair ? 'Yes' : ''}</td>
    <td>{person.hairColor}</td>
    <td>{person.randomField}</td>
  </tr>
)

PeopleRow.propTypes = {
  person: PropTypes.object.isRequired,
}

export default PeopleRow
