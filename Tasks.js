const mongoose = require('mongoose')

const Tasks = new mongoose.Schema({
    title:{type: String, required: true},
    completed:{type: Boolean, required: true}
})


module.exports = mongoose.model('Tasks',Tasks)