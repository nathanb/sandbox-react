const express = require('express')
const logger = require('morgan')

const app = express()
const compression = require('compression')
const helmet = require('helmet')
const path = require('path')

// view engine setup
app.enable('trust proxy') // enables trust for proxy terminated SSL.

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'", 'localhost:3001'],
  },
}))
app.use(helmet.dnsPrefetchControl())
app.use(helmet.expectCt())
app.use(helmet.frameguard())
app.use(helmet.hidePoweredBy())
app.use(helmet.hsts())
app.use(helmet.ieNoOpen())
app.use(helmet.noSniff())
app.use(helmet.permittedCrossDomainPolicies())
app.use(helmet.referrerPolicy())
app.use(helmet.xssFilter())

if (process.env.NODE_ENV === 'production') { app.use(logger('combined')) } else { app.use(logger('dev')) }

app.use(compression())

app.use(express.static(path.join(__dirname, '../../dist')))
app.use(express.static(path.join(__dirname, '../../assets')))

app.get(/.*/, (req, res) => {
  console.log(`landed... ${req.path}`)
  res.sendFile(path.join(__dirname, '../../dist/index.html'))
})

module.exports = app
