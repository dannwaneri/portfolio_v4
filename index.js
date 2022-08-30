const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const {connectDB} = require('./db/connect');
const api = require('./routes/api');
const app = express();

dotenv.config({
  path: './configs/config.env'
});


app.use(express.json());

app.use('/v1', api);
app.use(express.static(path.join(__dirname, './client/build')))
//app.use(express.static(path.join(__dirname, '.', 'public')));
  
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
 // res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  })
const PORT = process.env.PORT || 4000;

async function startServer() {
  try {
    await connectDB(process.env.MONGO_URI)
  app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}...`);
    });
  } catch (err) {
    console.log(err)
  }
}
  startServer();