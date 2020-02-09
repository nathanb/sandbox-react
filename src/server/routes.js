const express = require("express")
const router  = express.Router()

const people = [{id: 0, name: "Fred", age: 44}, {id: 1, name: "George", age: 25}]

router.get("/people", (req, res, next) => {
  return res.json(people)
})
router.post("/people", (req, res, next) => {
  let newPerson = req.body
  newPerson.id = people.length + 1 //example...
  people.push(newPerson)
  res.json({id: newPerson.id})
})
router.get("/people/:id", (req, res, next) => {
  let person = people.find(p => p.id === +req.params.id)
  if (person) return res.json(person)
  res.status(404).send("Person not found.")
})

module.exports = router
