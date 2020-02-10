const express     = require("express")
const logger      = require("morgan")
const bodyParser  = require("body-parser")
const app         = express()
const cors        = require("cors")
const compression = require("compression")
const helmet = require("helmet")

// view engine setup
app.enable("trust proxy") //enables trust for proxy terminated SSL.

app.use(helmet())

if (process.env.NODE_ENV === 'production')
  app.use(logger('combined'))
else
  app.use(logger('dev'))

if (process.env.NODE_ENV === "production")
  app.use(cors(/iws\.io$/))
else
  app.use(cors(/localhost:\d+$/))

app.use(compression())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(require("./routes"))

app.use((req, res, next) => {
  res.status(404).send("Not found.")
})

app.use((err, req, res, next) => {
  if (err.isJoi) {
    let errors = err.details.map(e => e.message).join("\n")
    let e = new Error(errors)
    e.status = 400
    return next(e)
  }
  return next(err)
})
app.use((err, req, res, next) => {
  console.dir(err)
  let status = err.status || 500
  res.status(status).send(err.message)
})

module.exports = app
