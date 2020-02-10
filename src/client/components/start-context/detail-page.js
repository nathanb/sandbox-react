import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"
import DefaultLayout from "./default-layout"
import fetchJson from "../../lib/fetch-json"
import Alert from "../common/alert"

const PersonPage = () => {
  const [data, setData] = useState()
  const [error, setError] = useState(null)
  const params = useParams()

  const loadPerson = async (personId) => {
    console.log(`PersonPage: loadPerson called... personId: ${personId}`)
    let result = await fetchJson(`http://localhost:3001/people/${personId}`)
    if (result.ok)
      setData(result.json)
    else
      setError(result.errorMessage)
  }

  //will re-run on every render where the match.id is different.
  useEffect(() => {
    console.log("PersonPage: useEffect invoked...")
    if (typeof params.id !== "undefined") loadPerson(params.id)
    else setError("Invalid person id.")
  }, [params.id])

  return (
    <DefaultLayout>
      <Alert message={error}/>
      {data ? (<div>
        <h1>{data.name}</h1>
        <h3 className="text-secondary">Age {data.age}</h3>
        <pre>{JSON.stringify(params)}</pre>
      </div>) : (<span>Loading...</span>)}

      <h3>Two links</h3>
      <p>useEffect will be invoked everytime params.id changes.</p>
      <p>
        <Link to="/people/0">Fred</Link>
        <br/><Link to="/people/1">George</Link>
      </p>

      <h3>Two links</h3>
      <p>Render is called, but nothing changes. params.id remains the same, so useEffect is not triggered.</p>
      <p><button type="button" className="btn btn-secondary" onClick={() => {loadPerson(params.id)}}>Refresh</button></p>
    </DefaultLayout>
  )
}

export default PersonPage
