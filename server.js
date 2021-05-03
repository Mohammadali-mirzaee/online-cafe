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







// skapa konto
const adapter2 = new FileSync('accounts.json');
const accountsdatabase = lowdb(adapter2);

function initiateDatabase() {
    accountsdatabase.defaults({ accounts: [] }).write();
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

const accounts = accountsdatabase.get('accounts').value();
console.log('account-databasen innhåller:', JSON.stringify(accounts));



// Fetch-anrop för eventuell frontend-sida
// fetch('http://localhost:5000/api/signup', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(account)
// })



//Verifiera skapat konto/login
app.post('/api/login', (request, response) => {
    const loginCreds = request.body;
    console.log('LoginCreds:', loginCreds);

    const compareCreds = database.get(accounts).find({username: loginCreds.username, password: loginCreds.password}).value();
    console.log('compare:',compareCreds);
});