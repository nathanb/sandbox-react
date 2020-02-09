import React, {useState, useEffect} from "react"
import ajax from "../../lib/ajax"
import DefaultLayout from "../common/default-layout"
import {Link} from "react-router-dom"

const PeoplePage = () => {
  const [people, setPeople] = useState([])
  const [status, setStatus] = useState(null)

  const refresh = async () => {
    setStatus("loading...")
    try {
      setStatus(null)
      let response = await ajax({url: "http://localhost:3001/people"})
      setPeople(response.body)
    } catch(err) {
      setStatus(err.message)
    }
  }

  const addToServer = async (totalPeople) => {
    try {
      let newPerson = {name: "George", age: 30 + totalPeople, id: totalPeople + 1}
      let response = await ajax({url: "http://localhost:3001/people", method: "POST", data: newPerson})
      setStatus(`Added new person: ${response.body.id}`)
      //we can update on the client side using client data... or we can reload.
      refresh()
    } catch (err) {
      setStatus(err.message)
    }
  }

  useEffect(() => {
    //happens every render
    console.log("useEffect onload only, denoted by: []")
    refresh()
  }, [])

  return (
    <DefaultLayout>
      <h1>People</h1>
      <p>
        <button className="btn btn-primary mr-1" onClick={() => {refresh()}}>Refresh</button>
        <button className="btn btn-secondary" onClick={() => {addToServer(people.length)}}>Add</button>
      </p>
      {people.length ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {people.map((p,px) => (
              <tr key={px}>
                <td><Link to={`/people/${p.id}`}>{p.name}</Link></td>
                <td>{p.age}</td>
              </tr>))}
          </tbody>
        </table>
      ) : (<span>No people to display</span>)}

      <p>{status}</p>
    </DefaultLayout>
  )
}

export default PeoplePage
