// TEST TEST TEST TEST
const express = require('express')
const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('menu.json')
const database = lowdb(adapter);
const app = express();
app.use(express.json());

database.defaults({ menu: [] }).write();


app.get('/api/menu', (request, response) => {
    const menu = database.get('menu').value()

    let result = {menu}

    response.json(result)
    
})

app.listen(5000, () => {
    console.log("sever started")
})

/* module.exports = router; */