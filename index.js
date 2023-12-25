const express = require('express')
require('dotenv').config()
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/twitter', (req, res) => {
    res.send('this is twitter')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://LOcalhost:&{port}`);
})

