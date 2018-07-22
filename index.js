// get express module and store it in express variable
const express = require('express')
// create app variable that is a function of express
const app = express()

// on website "/"" directory, i.e. "example.net/", send a result (res), "Hello World!"
app.get('/', (req, res) => res.send('Hello World!'))

// create server that listens to port 3000 and when server has started console.log that it has started
app.listen(3000, () => console.log('Example app listening on port 3000!'))

app.get('/simon', (req, res) => res.send('hej simon'))


