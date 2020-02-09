import React, {useEffect, useState} from "react"
import {Link, useRouteMatch} from "react-router-dom"
import ajax from "../../lib/ajax"
import DefaultLayout from "./default-layout"
import _get from "lodash/get"

const PersonPage = () => {
  const [data, setData] = useState()
  const [message, setMessage] = useState()
  let match = useRouteMatch()

  const loadPerson = async (personId) => {
    console.log(`loadPerson called... personId: ${personId}`)
    try {
      let response = await ajax({url: `http://localhost:3001/people/${personId}`})
      setData(response.body)
    } catch(err) {
      setMessage(err.message)
    }
  }

  //will re-run on every render where the match.id is different.
  useEffect(() => {
    let id = match.params.id
    console.log("PersonPage: useEffect invoked...")
    if (id) loadPerson(id)
    else setMessage("Invalid person id.")
  }, [_get(match, "params.id")])

  return (
    <DefaultLayout>
      {message ? (<div className="alert alert-danger">{message}</div>) : null}
      {data ? (<div>
        <h1>{data.name}</h1>
        <h3 className="text-secondary">Age {data.age}</h3>
        <p>We have access to the current path: {match.path}</p>
        <pre>{JSON.stringify(match)}</pre>
      </div>) : (<span>Loading...</span>)}

      <h3>Two links</h3>
      <p>useEffect will be invoked everytime match.params.id changes.</p>
      <p>
        <Link to="/people/0">Fred</Link>
        <br/><Link to="/people/1">George</Link>
      </p>

      <h3>Two links</h3>
      <p>Render is called, but nothing changes. match.params.id remains the same, so useEffect is not triggered.</p>
      <p><button type="button" className="btn btn-secondary" onClick={() => {loadPerson(match.params.id)}}>Refresh</button></p>
    </DefaultLayout>
  )
}

export default PersonPage
