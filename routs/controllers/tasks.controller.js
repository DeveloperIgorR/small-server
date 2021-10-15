const Tasks = require("../../Tasks")

class TasksControllers{
    async create(req,res) {
        try {
            const{title, completed} = req.body
            const tasks = await Tasks.create({title, completed})
            res.json(tasks)
            
        }
        catch (e) {
            res.status(500).json(e)        
        }
    }
    async getAll(req,res) {
        try {           
            const tasks = await Tasks.find()
            return res.json(tasks)            
        }
        catch (e) {
            res.status(500).json(e)        
        }
    }
    async getOne(req,res) {
        try {
            const {id} = req.params 
            if(!id){
                res.status(400).json({message: 'не указан id'})
            }          
            const tasks = await Tasks.findById(id)
            return res.json(tasks)            
        }
        catch (e) {
            res.status(500).json(e)        
        }
    }
    async udate(req,res) {
        try {
            const task = req.body
            const tasks = await Tasks.create({title, completed})
            res.json(tasks)
            
        }
        catch (e) {
            res.status(500).json(e)        
        }
    }
    async delete(req,res) {
        try {
            const{title, completed} = req.body
            const tasks = await Tasks.create({title, completed})
            res.json(tasks)
            
        }
        catch (e) {
            res.status(500).json(e)        
        }
    }
}

module.exports = new TasksControllers