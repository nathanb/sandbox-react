import React, {useEffect, useState, useRef} from "react"
import {Link, useParams, useHistory} from "react-router-dom"
import ajax from "../../lib/ajax"
import DefaultLayout from "../start-context/default-layout"

const PersonEditPage = () => {
  const [data, setData] = useState({name: "", age: 0, id: ""})
  const [message, setMessage] = useState()
  const [formClassName, setFormClassName] = useState("needs-validation")
  const params = useParams()
  const history = useHistory()
  const formRef = useRef(null)

  const loadPerson = async (personId) => {
    try {
      let response = await ajax({url: `http://localhost:3001/people/${personId}`})
      setData(response.body)
    } catch(err) {
      setMessage(err.message)
    }
  }
  const onChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    let shallowClone = {...data}
    shallowClone[name] = value
    setData(shallowClone)
    console.log(`changed ${name} to ${value}`)
  }
  const onSaveClicked = async (e) => {
    setMessage(null)
    setFormClassName("needs-validation")
    event.preventDefault()
    event.stopPropagation()

    if (formRef.current.checkValidity() === true) {
      try {
        await ajax({url: `http://localhost:3001/people/${params.id}`, method: "PUT", data})
        history.push(`/people/${params.id}`)
      } catch(err) {
        if (err.status === 400)
          setMessage(err.response.text)
        else setMessage(err.message)
      }
    }
    setFormClassName("was-validated")
  }

  //will re-run on every render where the match.id is different.
  useEffect(() => {
    let id = params.id
    if (id) loadPerson(id)
  }, [params.id])

  return (
    <DefaultLayout>
      {message ? (<div className="alert alert-danger">{message}</div>) : null}
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
