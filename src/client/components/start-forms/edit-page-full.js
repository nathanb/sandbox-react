import React, {useEffect, useState, useRef} from 'react'
import {Link, useParams, useHistory} from 'react-router-dom'
import fetchJson from '../../lib/fetch-json'
import DefaultLayout from '../start-context/default-layout'

const PersonEditPage = () => {
  const [data, setData] = useState({name: '', age: 0, id: ''})
  const [error, setError] = useState(null)
  const [formClassName, setFormClassName] = useState('needs-validation')
  const params = useParams()
  const history = useHistory()
  const formRef = useRef(null)

  const loadPerson = async(personId) => {
    console.log(`PersonPage: loadPerson called... personId: ${personId}`)
    let result = await fetchJson(`http://localhost:3001/people/${personId}`)
    if (result.ok) { setData(result.json) } else { setError(result.errorMessage) }
  }

  const onChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    let shallowClone = {...data}
    shallowClone[name] = value
    setData(shallowClone)
    console.log(`changed ${name} to ${value}`)
  }
  const onSaveClicked = async() => {
    setError(null)
    setFormClassName('needs-validation')
    event.preventDefault()
    event.stopPropagation()

    if (formRef.current.checkValidity() === true) {
      let result = await fetchJson(`http://localhost:3001/people/${params.id}`, {method: 'PUT', json: data})
      // if successful, redirect to the view page
      if (result.ok) {
        return history.push(`/people/${params.id}`)
      }

      if (result.status === 400) {
        setError(result.json.map(e => e.message).join('\n'))
      } else setError(result.errorMessage)
    }
    setFormClassName('was-validated')
  }

  // will re-run on every render where the match.id is different.
  useEffect(() => {
    if (typeof params.id !== 'undefined') loadPerson(params.id)
  }, [params.id])

  return (
    <DefaultLayout>
      {error ? (<div className="alert alert-danger">{error}</div>) : null}
      <h1>Editing Person</h1>
      <form ref={formRef} className={formClassName} noValidate={true} onSubmit={onSaveClicked}>
        <div className="form-group row">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" name="name" className="form-control" id="inputName" placeholder="Enter name" required={true} value={data.name} onChange={onChange} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputAge" className="col-sm-2 col-form-label">Age</label>
          <div className="col-sm-10">
            <input type="number" name="age" id="inputAge" className="form-control" placeholder="Enter age" required={true} value={data.age} onChange={onChange} />
          </div>
        </div>
      </form>
      <p>
        <Link className="btn btn-secondary mr-1" to={`/people/${params.id}`}>Cancel</Link>
        <button type="button" className="btn btn-primary" onClick={onSaveClicked}>Save</button>
      </p>
    </DefaultLayout>
  )
}

export default PersonEditPage
