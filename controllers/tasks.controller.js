const TasksService = require("../services/tasks.service")
const Tasks = require("../Tasks")

class TasksController{
    async create(req,res) {
        try {            
            const tasks = await TasksService.create(req.body)
            return res.json(tasks)            
        }
        catch (e) {
            res.status(500).json(e)        
        }
    }
    async getAll(req,res) {
        try {           
            const tasks = await TasksService.getAll()
            return res.json(tasks)            
        }
        catch (e) {
            res.status(500).json(e)        
        }
    }
    async getOne(req,res) {
        try {           
            const tasks = await TasksService.getOne(req.params.id)
            return res.json(tasks)            
        }
        catch (e) {
            res.status(500).json(e)        
        }
    }
    async udate(req,res) {
        try {           
            const updatedTask = await TasksService.udate(req.body)
            return res.json(updatedTask)            
        }
        catch (e) {
            res.status(500).json(e)        
        }
    }
    async delete(req,res) {
        try {            
            const task = await TasksService.delete(req.params.id)
            return res.json(task)            
        }
        catch (e) {
            res.status(500).json(e)        
        }
    }
}

module.exports = new TasksController