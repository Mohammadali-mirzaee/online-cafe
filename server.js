// TEST TEST TEST TEST

const express = require('express')
const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const app = express();
/* app.get('/', (req, res) => {
}) */

const adapter = new FileSync('menu-json')
const database = lowdb(adapter);

app.use(express.json());

database.defaults({ menu: [] }).write();


app.get('/menu', (request, response) => {
    const menu = request.body;
    response.json(menu)
})

app.listen(5000, () => {
    console.log("sever started")
})