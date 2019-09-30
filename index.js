const express = require('express');
let app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(8973, () => console.log("App API listening on port 8973..."));

module.exports = app;