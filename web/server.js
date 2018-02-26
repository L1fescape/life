var path = require('path')
var express = require('express')
var app = express()

var PORT = process.env.PORT || 3000;
var distRoot = path.join(__dirname, 'dist')

app.use(express.static(distRoot))

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, distRoot, "index.html"))
})

app.listen(PORT, function() {
  console.log(`running on ${PORT}`)
})