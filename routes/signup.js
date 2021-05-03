const { Router } = require('express');
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('menu.json');
const database = lowdb(adapter);
const router = new Router();
const { nanoid } = require('nanoid');


// skapa konto
const adapter2 = new FileSync('accounts.json');
const accountsdatabase = lowdb(adapter2);


router.post('/api/signup', (request, response) => {
   const accountItem = request.body;
   accountItem.id = nanoid();
   console.log('Konto att lägga till:', accountItem);
   accounts.push(accountItem)

}) 

const account = {
    username: 'Test',
    email: 'test@test.se',
    password: '12345'
}

database.get('accounts').push(account).write();

const accounts = accountsdatabase.get('accounts').value();
console.log('account-databasen innhåller:', JSON.stringify(accounts));

module.exports = router