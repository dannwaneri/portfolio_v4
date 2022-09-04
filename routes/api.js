const express = require('express');

const projectsRouter = require('./projects/projects.router');

const blogsRouter = require('./blogs/blog.router')

const api = express.Router();

api.use('/projects', projectsRouter);
api.use('/blogs', blogsRouter);

module.exports = api;