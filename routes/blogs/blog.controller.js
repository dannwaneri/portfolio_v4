const {getAllBlogs} = require('../../models/blog.model')

async function  httpGetAllBlogs(req, res) {
  return res.status(200).json(await getAllBlogs());
}

module.exports = {
  httpGetAllBlogs
};