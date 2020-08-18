import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import fetchJson from '../../lib/fetch-json'
import DefaultLayout from '../start-context/default-layout'
import Alert from '../common/alert'

const PersonPage = () => {
  const [data, setData] = useState()
  const [error, setError] = useState(null)
  const params = useParams()

  const loadPerson = async(personId) => {
    console.log(`PersonPage: loadPerson called... personId: ${personId}`)
    let result = await fetchJson('/people.json')
    if (result.ok) {
      // TODO: this is just a hack for an offline demo.
      let person = result.json?.find(p => p.id === personId)
      if (person) { setData(person) } else setError('Person not found')
    } else { setError(result.errorMessage) }
  }

  // will re-run on every render where the match.id is different.
  useEffect(() => {
    console.log('PersonPage: useEffect invoked...')
    if (typeof params.id !== 'undefined') loadPerson(params.id)
    else setError('Invalid person id.')
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
      <p>
        <button type="button" className="btn btn-secondary mr-1" onClick={() => { loadPerson(params.id) }}>Refresh</button>
        <Link className="btn btn-primary" to={`/people/${params.id}/edit`}>Edit</Link>
      </p>
    </DefaultLayout>
  )
}

export default PersonPage
