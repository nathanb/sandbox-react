import React, {useState, useEffect} from "react"
import DefaultLayout from "./default-layout"
import PeopleList from "../people/list"
import PeopleControls from "../people/controls"
import fetchJson from "../../lib/fetch-json"
import Alert from "../common/alert"

const PeoplePage = () => {
  const [people, setPeople] = useState([])
  const [status, setStatus] = useState(null)
  const [error, setError] = useState(null)

  async function loadPeople() {
    setStatus("loading...")
    setError(null)
    const result = await fetchJson("http://localhost:3001/people")
    if (result.ok) {
      setPeople(result.json)
      setStatus(null)
    } else {
      setError(result.errorMessage)
    }
  }

  const addPerson = async (totalPeople) => {
    setError(null)
    let newPerson = {name: "George", age: 30 + totalPeople}
    let result = await fetchJson("http://localhost:3001/people", {method: "POST", json: newPerson})
    if (result.ok) {
      let responseBody = result.json
      setStatus(`Added new person: ${responseBody.id}`)
      loadPeople()
    } else {
      setError(result.errorMessage)
    }
  }

  useEffect(() => {
    console.log("PeoplePage: useEffect onload only, denoted by: []")
    loadPeople()
  }, [])

  return (
    <DefaultLayout>
      <h1>People</h1>
      <Alert message={error}/>
      <PeopleControls addPerson={addPerson} people={people} refresh={loadPeople}/>
      <PeopleList data={people} />
      <p>{status}</p>
    </DefaultLayout>
  )
}

export default PeoplePage
