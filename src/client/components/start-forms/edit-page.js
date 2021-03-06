import React, {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import fetchJson from '../../lib/fetch-json'
import DefaultLayout from '../start-context/default-layout'
import PersonForm from './person-form'
import Alert from '../common/alert'

const PersonEditPage = () => {
  const [data, setData] = useState({name: '', age: 0, id: '', hasHair: true, hairColor: 'brown'})
  const [error, setError] = useState(null)
  const params = useParams()
  const history = useHistory()

  const loadPerson = async(personId) => {
    console.log(`PersonPage: loadPerson called... personId: ${personId}`)
    let result = await fetchJson(`http://localhost:3001/people/${personId}`)
    if (result.ok) { setData(result.json) } else { setError(result.errorMessage) }
  }

  const onSave = async(newData) => {
    setError(null)
    let result = await fetchJson(`http://localhost:3001/people/${params.id}`, {method: 'PUT', json: newData})
    // if successful, redirect to the view page
    if (result.ok) {
      return history.push(`/people/${params.id}`)
    }

    if (result.status === 400) {
      setError(result.json.map(e => e.message).join('\n'))
    } else setError(result.errorMessage)
  }

  // will re-run on every render where the params.id is different.
  useEffect(() => {
    if (typeof params.id !== 'undefined') loadPerson(params.id)
  }, [params.id])

  return (
    <DefaultLayout>
      <Alert message={error}/>
      <h1>Editing Person</h1>
      <PersonForm person={data} onSave={onSave}/>
    </DefaultLayout>
  )
}

export default PersonEditPage
