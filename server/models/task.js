var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String,
        default: ''
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

var Task = mongoose.model('Task', TaskSchema);

// db.tasks.insert({title: 'Complete Coding Dojo', description: 'Make sure you have 3 black belts', completed: false}, {timestamps: true})

// db.tasks.insert({title: 'Dont overthink', description: 'Think about it', completed: true})
// db.tasks.insert({title: 'Complete Angular', description: 'Dont let it defeat you', completed: false})