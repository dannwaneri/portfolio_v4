const {getAllProjects} = require('../../models/projects.model')

async function  httpGetAllProjects(req, res) {
  return res.status(200).json(await getAllProjects());
}

module.exports = {
  httpGetAllProjects
};