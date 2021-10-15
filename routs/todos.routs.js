const express = require('express')
const Tasks = require('../Tasks.js')
const TasksControllers = require('./controllers/tasks.controller.js')

const router = express.Router()

router.post('/create',TasksControllers.create)
router.get('/',TasksControllers.getAll)
router.get('/:id',TasksControllers.getOne)
router.put('/update',TasksControllers.udate)
router.delete('/delete/:id',TasksControllers.delete)

module.exports = router