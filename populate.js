const dotenv = require('dotenv');
const {connectDB,disconnectDB}= require('./db/connect')
const Blog = require('./models/blog.mongo')

dotenv.config({
    path: './configs/config.env'
  });

const jsonBlogs = require('./blogs.json')


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
     await Blog.deleteMany()
    await Blog.create(jsonBlogs)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
