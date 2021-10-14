const express = require('express')
const TasksControllers = require('./controllers/tasks.controller')
const router = express.Router()

router.post('/', (req,res) => {
    try {
        const resData = await TasksControllers.setTasks(req.body)
        res.json(resData)
    }
    catch (e) {
        console.log(e)        
    }
})