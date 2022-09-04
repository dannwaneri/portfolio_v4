const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: [true, 'blog description must be provided']
        },
        body: {
            type: String,
            required: true,
        },
            author: {
                type: String,
                required: [true, 'blog author must be provided']
        },
        link:{
            type: String
        },
    }  
);

module.exports = mongoose.model('Blog', blogSchema)