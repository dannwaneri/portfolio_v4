const projects = require('./projects.mongo')


async function getAllProjects() {
    return await projects.find({},
     {'__v': 0,}
      )
  }


  module.exports = {
    getAllProjects
  }