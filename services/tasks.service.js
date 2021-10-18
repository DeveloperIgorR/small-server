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

    async udate(id,task) {        
        if(!id){
            throw new Error('не указан id') 
        }
        const updatedTask = await Tasks.findByIdAndUpdate(id, task, {new: true})
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
