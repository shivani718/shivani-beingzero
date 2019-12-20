const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('frontend'))

app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))
app.get('/login', (req, res) => res.send('Login'))
app.get('/register', (req, res) => res.send('Register'))
var student = {"name" : "Shivani",
               "college" : "VNRVJIET",
                "regno" : "17071A1209"}
                app.get('/data', (req, res)=> res.json(student));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
