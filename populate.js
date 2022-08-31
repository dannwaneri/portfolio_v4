const dotenv = require('dotenv');
const {connectDB,disconnectDB}= require('./db/connect')
const Project = require('./models/projects.mongo')

dotenv.config({
    path: './configs/config.env'
  });

const jsonProjects = require('./projects.json')


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
     await Project.deleteMany()
    await Project.create(jsonProjects)
    console.log('Success!!!!')
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
