const express = require('express')
const hbs = require('express-handlebars') 
const router = require('./routes.js')
const server = express()

//middleware
server.engine('hbs', hbs({
    defaultLayout: 'main',
    extname: 'hbs'
  }))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({extended:false}))
server.use('/',router)

module.exports = server