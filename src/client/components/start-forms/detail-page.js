import React, {useEffect, useState} from "react"
import {Link, useParams} from "react-router-dom"
import ajax from "../../lib/ajax"
import DefaultLayout from "../start-context/default-layout"

const PersonPage = () => {
  const [data, setData] = useState()
  const [message, setMessage] = useState()
  let params = useParams()

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
    let id = params.id
    console.log("PersonPage: useEffect invoked...")
    if (typeof id !== "undefined") loadPerson(id)
    else setMessage("Invalid person id.")
  }, [params.id])

  return (
    <DefaultLayout>
      {message ? (<div className="alert alert-danger">{message}</div>) : null}
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
      <p>
        <button type="button" className="btn btn-secondary mr-1" onClick={() => {loadPerson(params.id)}}>Refresh</button>
        <Link className="btn btn-primary" to={`/people/${params.id}/edit`}>Edit</Link>
      </p>
    </DefaultLayout>
  )
}

export default PersonPage
