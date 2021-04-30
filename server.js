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
    console.log("server started")
    initiateDatabase();
})







// skapa accounts
const adapter = new FileSync('accounts.json');
const database = lowdb(adapter);

function initiateDatabase() {
    database.defaults({ accounts: [] }).write();
};


app.post('/api/signup', (request, response) => {
   const account = request.body;
   console.log('Konto att lägga till:', account);  
}) 

const account = {
    username: 'Test',
    email: 'test@test.se',
    password: '12345'
}

// database.get('accounts').push(account).write();

const accounts = database.get('accounts').value();
console.log('account-databasen innhåller:', JSON.stringify(accounts));



// Fetch-anrop för eventuell frontend-sida
// fetch('http://localhost:5000/api/signup', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(account)
// })
