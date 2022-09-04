const blogs = require('./blog.mongo')


async function getAllBlogs() {
    return await blogs.find({},
     {'__v': 0,}
      )
  }


  module.exports = {
    getAllBlogs
  }