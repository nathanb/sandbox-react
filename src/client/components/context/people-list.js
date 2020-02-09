import React from "react"
import {Link} from "react-router-dom"
import PropTypes from "prop-types"

const Row = ({p}) => (
  <tr>
    <td><Link to={`/people/${p.id}`}>{p.name}</Link></td>
    <td>{p.age}</td>
  </tr>
)

const PeopleList = ({data}) => (
  <div>
    {data.length ? (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p,px) => (<Row key={px} p={p} />))}
        </tbody>
      </table>
    ) : (<span>No people to display</span>)}
  </div>
)

PeopleList.propTypes = {
  data: PropTypes.array.isRequired
}

export default PeopleList
