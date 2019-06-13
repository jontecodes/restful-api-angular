var mongoose = require('mongoose');

// require model
require('../models/task');

var Task = mongoose.model('Task');

module.exports = {
    index : (req, res) => {
        Task.find({}, function(err, task){
            if(err){
                console.log('Returned error', err);
                res.json({message: 'Error', error: err})
            } else {
                res.json({message: 'Success', data: task})
            }
        })
    },
    task: (req, res) => {
        Task.find({_id: req.params.id}, function(err, task){
            if(err){
                console.log('Returned error', err);
                res.json({message: 'Error', error: err})
            } else {
                res.json({message: 'Success there', data: task})
            }
        })
    },
    create: (req, res) => {
        Task.create(req.body, function(err, newtask){
            if(err){
                console.log('Returned error', err);
                res.json({message: 'Error', error: err})
            } else {
                console.log('Successful addition')
                res.redirect('/tasks');
            }
        })
    },
    update: (req, res) => {
        Task.updateOne({_id: req.params.id}, function(err, updatedtask){
            if(err){
                console.log('Returned error', err);
                res.json({message: 'Error', error: err})
            } else {
                res.json({message: 'Successful update', data: updatedtask})
            }
        })
    },
    delete: (req, res) => {
        Task.deleteOne({_id: req.params.id}, function(err, deltask){
            if(err){
                console.log('Returned error', err);
                res.json({message: 'Error', error: err})
            } else {
                res.redirect('/')
            }
        })
    }
}