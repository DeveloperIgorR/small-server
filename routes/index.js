const express = require('express')
const router = express.Router()
const todosRoutes = require('./todos.routes')

router.use('/todos', todosRoutes)

module.exports = router