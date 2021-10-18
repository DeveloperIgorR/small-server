const TasksService = require("../services/tasks.service")

class TasksController{
    async create(req,res) {
        try {            
            const tasks = await TasksService.create(req.body)
            return res.json(tasks)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }
    async getAll(req,res) {
        try {           
            const tasks = await TasksService.getAll()
            return res.json(tasks)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }
    async getOne(req,res) {
        try {           
            const tasks = await TasksService.getOne(req.params.id)
            return res.json(tasks)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }
    async udate(req,res) {
        try {           
            const updatedTask = await TasksService.udate(
                req.params.id,
                req.body
                )
            return res.json(updatedTask)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }
    async delete(req,res) {
        try {            
            const task = await TasksService.delete(req.params.id)
            return res.json(task)            
        }
        catch (e) {
            res.status(500).json(e.message)        
        }
    }
}

module.exports = new TasksController