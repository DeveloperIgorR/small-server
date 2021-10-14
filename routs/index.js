const express = require('express')
const router = express.Router()
const todosRouts = require('./todos.routs')

router.use('/todos', todosRouts)

module.exports = router