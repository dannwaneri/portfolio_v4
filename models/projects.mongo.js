const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    repo:{
        type: String,
        required: [true, 'project repo must be provided'],
    },
    name:{
        type: String,
        required: [true, 'project name must be provided']
    },
    description:{
        type: String,
        required: [true, 'project description must be provided']
    },
    stars:{
        type: Number
    },
    featured:{
        type: Boolean,
        default: true,
    },
    link:{
        type: String
    },
    date:{
        type: Number
    }
})

module.exports = mongoose.model('Project', projectSchema)