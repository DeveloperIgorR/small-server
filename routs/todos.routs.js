const express = require('express')
const Tasks = require('../Tasks.js')

const router = express.Router()

router.post('/', async (req,res) => {
    try {
        const{title, completed} = req.body
        const tasks = await Tasks.create({title, completed})
        res.json(tasks)
        
    }
    catch (e) {
        console.log(e)        
    }
})