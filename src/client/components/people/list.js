import React from "react"
import PropTypes from "prop-types"
import PersonRow from "./row"

const PeopleList = ({data}) => (
  <div>
    {data.length ? (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Has Hair</th>
            <th>Hair Color</th>
            <th>randomField</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p,px) => (<PersonRow key={px} person={p} />))}
        </tbody>
      </table>
    ) : (<span>No people to display</span>)}
  </div>
)

PeopleList.propTypes = {
  data: PropTypes.array.isRequired
}

export default PeopleList
