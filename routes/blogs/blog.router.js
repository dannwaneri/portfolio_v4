const express = require('express');

const {
    httpGetAllBlogs
} = require('./blog.controller');

const blogsRouter = express.Router();

blogsRouter.get('/',  httpGetAllBlogs);

module.exports =blogsRouter;