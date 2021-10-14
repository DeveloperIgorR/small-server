const express = require('express')
const Tasks = require('../Tasks.js')

const router = express.Router()

router.post('/', async (req,res) => {
    try {
        const{title, completed} = req.body
        const tasks = await Tasks.create({title, completed})
        res.status(200).json('Ну и запросы у вас')
        
    }
    catch (e) {
        console.log(e)        
    }
})