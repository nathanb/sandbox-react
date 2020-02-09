import React from "react"
import PropTypes from "prop-types"

const PeopleControls = ({refresh, addPerson, people}) => (
  <p>
    <button className="btn btn-primary mr-1" onClick={() => {refresh()}}>Refresh</button>
    <button className="btn btn-secondary" onClick={() => {addPerson(people.length)}}>Add</button>
  </p>
)

PeopleControls.propTypes = {
  refresh: PropTypes.func.isRequired
  ,addPerson: PropTypes.func.isRequired
  ,people: PropTypes.array.isRequired
}

export default PeopleControls
