const Tasks = require("../Tasks")

class TasksService{

    async create(task) {                    
        const createdTask = await Tasks.create(task)
        return createdTask          
    }

    async getAll() {                 
        const tasks = await Tasks.find()
        return tasks          
    }

    async getOne(id) {            
        if(!id){
            throw new Error('не указан id') 
        }          
        const task = await Tasks.findById(id)
        return task         
    }

    async udate(task) {        
        if(!task._id){
            throw new Error('не указан id') 
        }
        const updatedTask = await Tasks.findByIdAndUpdate(task._id, task, {new: true})
        return updatedTask         
    }

    async delete(id) {       
        if(!id){
            throw new Error('не указан id') 
        }          
        const task = await Tasks.findByIdAndDelete(id)
        return task         
    }
}

module.exports = new TasksService
