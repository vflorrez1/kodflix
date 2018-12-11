const express = require('express')
const app = express()
const path = require ('path')
const port = process.env.PORT || 3001;
var filmList = require('./filmList')


app.get('/rest/shows', (req, res) => res.send(filmList))
app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
