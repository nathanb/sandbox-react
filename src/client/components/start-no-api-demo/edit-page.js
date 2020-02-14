import React, {useEffect, useState} from "react"
import {useParams, useHistory} from "react-router-dom"
import fetchJson from "../../lib/fetch-json"
import DefaultLayout from "../start-context/default-layout"
import PersonForm from "../start-forms/person-form"
import Alert from "../common/alert"

const PersonEditPage = () => {
  const [data, setData] = useState({name: "", age: 0, id: "", hasHair: true, hairColor: "brown"})
  const [error, setError] = useState(null)
  const params = useParams()
  const history = useHistory()

  const loadPerson = async (personId) => {
    let result = await fetchJson(`/people.json`)
    if (result.ok) {
      //TODO: this is just a hack for an offline demo.
      let person = result.json?.find(p => p.id === personId)
      setData(person)
    } else
      setError(result.errorMessage)
  }

  const onSave = async (newData) => {
    setError(null)
    //Does really do anything in offline demo mode
    return history.push(`/people/${params.id}`)
  }

  //will re-run on every render where the params.id is different.
  useEffect(() => {
    if (typeof params.id !== "undefined") loadPerson(params.id)
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
