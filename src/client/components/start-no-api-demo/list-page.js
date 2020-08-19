import React, {useState, useEffect} from 'react'
import DefaultLayout from '../start-context/default-layout'
import PeopleList from '../people/list'
import PeopleControls from '../people/controls'
import fetchJson from '../../lib/fetch-json'
import Alert from '../common/alert'
import Icon from '../common/icon'

const PeoplePage = () => {
  const [people, setPeople] = useState([])
  const [status, setStatus] = useState(null)
  const [busy, setBusy] = useState(false) // this is just quick and dirty
  const [error, setError] = useState(null)

  async function loadPeople() {
    setStatus('loading...')
    setBusy(true)
    setError(null)
    const result = await fetchJson('/people.json')
    if (result.ok) {
      setPeople(result.json)
      setStatus(null)
      setBusy(false)
    } else {
      setError(result.errorMessage)
    }
  }

  const addPerson = async(totalPeople) => {
    setError(null)
    let newPerson = {id: (+people[people.length - 1].id + 1) + '', name: 'George', age: 30 + totalPeople}
    setPeople([...people, newPerson])
  }

  useEffect(() => {
    console.log('PeoplePage: useEffect onload only, denoted by: []')
    loadPeople()
  }, [])

  return (
    <DefaultLayout>
      <h1>People</h1>
      <Alert message={error}/>
      <PeopleControls addPerson={addPerson} people={people} refresh={loadPeople}/>
      <PeopleList data={people} />
      <p>{status}{busy ? <Icon spin icon="sync"/> : null}</p>
    </DefaultLayout>
  )
}

export default PeoplePage
