const express = require("express");
const app = express();
var path = require("path");

app.use(express.static(__dirname + '/public'));


app.listen(8080, () => {
  console.log("Application started and Listening on port 8080");
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});