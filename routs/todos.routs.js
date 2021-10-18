const express = require('express')
const Tasks = require('../Tasks.js')
const TasksController = require('../controllers/tasks.controller.js')

const router = express.Router()

router.post('/create',TasksController.create)
router.get('/',TasksController.getAll)
router.get('/:id',TasksController.getOne)
router.put('/update/:id',TasksController.udate)
router.delete('/delete/:id',TasksController.delete)

module.exports = router