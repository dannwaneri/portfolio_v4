const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "..","build")));
app.use(express.static("public"));

app.use((req, res,next) => {
  res.sendFile(path.join(__dirname, "..","build","index.html"))
});
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});