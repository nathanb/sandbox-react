const express     = require("express")
const logger      = require("morgan")
const app         = express()
const compression = require("compression")
const helmet      = require("helmet")
const path        = require("path")

// view engine setup
app.enable("trust proxy") //enables trust for proxy terminated SSL.

app.use(helmet())

if (process.env.NODE_ENV === 'production')
  app.use(logger('combined'))
else
  app.use(logger('dev'))

app.use(compression())

app.use(express.static(path.join(__dirname, "../../dist")))
app.use(express.static(path.join(__dirname, "../../assets")))

app.get(/.*/, (req, res, next) => {
  console.log(`landed... ${req.path}`)
  res.sendFile(path.join(__dirname, "../../dist/index.html"))
})

module.exports = app
