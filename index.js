const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, './client/build')))
//app.use(express.static(path.join(__dirname, '.', 'public')));
  
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
 // res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  })
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});