import React, {useEffect, useState} from "react"
import {useParams, useHistory} from "react-router-dom"
import ajax from "../../lib/ajax"
import DefaultLayout from "../start-context/default-layout"
import PersonForm from "./person-form"
import Alert from "../common/alert"

const PersonEditPage = () => {
  const [data, setData] = useState({name: "", age: 0, id: ""})
  const [message, setMessage] = useState()
  const params = useParams()
  const history = useHistory()

  const loadPerson = async (personId) => {
    try {
      let response = await ajax({url: `http://localhost:3001/people/${personId}`})
      setData(response.body)
    } catch(err) {
      setMessage(err.message)
    }
  }
  const onFieldChanged = (e) => {
    let name = e.target.name
    let value = e.target.value
    let shallowClone = {...data}
    shallowClone[name] = value
    setData(shallowClone)
    console.log(`changed ${name} to ${value}`)
  }
  const onSave = async (e) => {
    setMessage(null)
    try {
      //make the change on the server
      await ajax({url: `http://localhost:3001/people/${params.id}`, method: "PUT", data})

      //if successful, redirect to the view page
      history.push(`/people/${params.id}`)
    } catch(err) {
      //if validation fail, read the response (just for an example)
      if (err.status === 400)
        setMessage(err.response.text)

      //any other errors, show the message
      else setMessage(err.message)
    }
  }

  //will re-run on every render where the params.id is different.
  useEffect(() => {
    if (params.id) loadPerson(params.id)
  }, [params.id])

  return (
    <DefaultLayout>
      <Alert message={message}/>
      <h1>Editing Person</h1>
      <PersonForm person={data} onFieldChanged={onFieldChanged} onSave={onSave}/>
    </DefaultLayout>
  )
}

export default PersonEditPage
