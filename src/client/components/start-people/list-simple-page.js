import React, {useState, useEffect} from 'react'
import DefaultLayout from './default-layout'
import {Link} from 'react-router-dom'
import fetchJson from '../../lib/fetch-json'

const PeoplePage = () => {
  const [people, setPeople] = useState([])
  const [status, setStatus] = useState(null)
  const [error, setError] = useState(null)

  async function loadPeople() {
    setStatus('loading...')
    setError(null)
    const result = await fetchJson('http://localhost:3001/people')
    if (result.ok) {
      setPeople(result.json)
      setStatus(null)
    } else {
      setError(result.errorMessage)
    }
  }

  const addPerson = async(totalPeople) => {
    setError(null)
    let newPerson = {name: 'George', age: 30 + totalPeople}
    let result = await fetchJson('http://localhost:3001/people', {method: 'POST', json: newPerson})
    if (result.ok) {
      let responseBody = result.json
      setStatus(`Added new person: ${responseBody.id}`)
      loadPeople()
    } else {
      setError(result.errorMessage)
    }
  }

  useEffect(() => {
    // happens every render
    console.log('useEffect onload only, denoted by: []')
    loadPeople()
  }, [])

  return (
    <DefaultLayout>
      <h1>People</h1>
      {error ? (<div className="alert alert-danger">{error}</div>) : null}
      <p>
        <button className="btn btn-primary mr-1" onClick={() => { loadPeople() }}>Refresh</button>
        <button className="btn btn-secondary" onClick={() => { addPerson(people.length) }}>Add</button>
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
            {people.map((p, px) => (
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
