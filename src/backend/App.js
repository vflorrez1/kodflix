const express = require('express')
const app = express()
const port = 3001
var filmList = require('./filmList')

app.get('/rest/shows', (req, res) => res.send(filmList))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))