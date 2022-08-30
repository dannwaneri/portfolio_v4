const express = require('express');

const {
    httpGetAllProjects
} = require('./projects.controller');

const projectsRouter = express.Router();

projectsRouter.get('/',  httpGetAllProjects);

module.exports =projectsRouter;