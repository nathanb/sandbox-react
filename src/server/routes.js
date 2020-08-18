const express = require('express')

const router = express.Router()
const joi = require('@hapi/joi')

var people = [{id: '0', name: 'Fred', age: 44}, {id: '1', name: 'George', age: 25, hasHair: true, hairColor: 'Brown', randomField: 'First'}]
const _assignIn = require('lodash/assignIn')

router.get('/people', (req, res) => {
  // return res.status(500).json({error: "pink fluffy slippers"})
  return res.json(people)
})

router.get('/people/:id', (req, res) => {
  let person = people.find(p => p.id === req.params.id)
  if (person) return res.json(person)
  res.status(404).send('Person not found.')
})


const personSchema = joi.object({
  name: joi.string().required().trim().max(100), // add alphanum to see 400
  age: joi.number().required().max(200).min(0),
  id: joi.string().alphanum().max(200).optional().allow(null),
  hasHair: joi.boolean().optional().default(false),
  hairColor: joi.string().optional().default('').allow('').max(50),
  randomField: joi.string().optional().default('').allow('').max(50),
})
const validatePerson = (req, res, next) => {
  const {error, value} = personSchema.validate(req.body, {allowUnknown: false})
  if (error) return next(error)
  req.validatedBody = value
  next()
}

router.post('/people', validatePerson, (req, res) => {
  // return res.status(500).json({error: "pink fluffy slippers 2"})
  let newPerson = req.body
  newPerson.id = `${people.length + 1}` // example...
  people.push(newPerson)
  res.json({id: newPerson.id})
})
router.put('/people/:id', validatePerson, (req, res) => {
  let person = people.find(p => p.id === req.params.id)
  if (person) {
    _assignIn(person, req.validatedBody)
    return res.status(200).end()
  }
  res.status(404).send('Person not found.')
})

module.exports = router
