import React, {useState, useEffect} from "react"
import ajax from "../../lib/ajax"
import DefaultLayout from "../common/default-layout"
import PeopleList from "./people-list"
import PeopleControls from "./people-controls"

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

  const addPerson = async (totalPeople) => {
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
    debugger

    console.log("useEffect onload only, denoted by: []")
    refresh()
  }, [])

  return (
    <DefaultLayout>
      <h1>People</h1>
      <PeopleControls addPerson={addPerson} people={people} refresh={refresh}/>
      <PeopleList data={people} />
      <p>{status}</p>
    </DefaultLayout>
  )
}

export default PeoplePage
