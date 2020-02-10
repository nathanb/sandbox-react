import React, {useRef, useState} from "react"
import PropTypes from "prop-types"

const ValidatedForm = ({children, onValidSubmit}) => {
  const formRef = useRef(null)
  const [className, setClassName] = useState("needs-validation")

  const onSubmit = (event) => {
    setClassName("needs-validation")
    event.preventDefault()
    event.stopPropagation()
    let form = formRef.current
    if (form.checkValidity() === true) {
      if (onValidSubmit) onValidSubmit()
    }
    setClassName("was-validated")
  }
  return (
    <form ref={formRef} onSubmit={onSubmit} className={className} noValidate={true}>
      {children}
    </form>
  )
}

ValidatedForm.propTypes = {
  onValidSubmit: PropTypes.func.isRequired
  ,children: PropTypes.any.isRequired
}


export default ValidatedForm
