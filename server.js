const express = require('express')
const lowdb = require('lowdb')

const app = express();


app.get('/', (req, res) => {
    
    res.send("Hello")
})

app.listen(5000, () => {
    console.log("sever started")
})