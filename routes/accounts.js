const { Router, request, response } = require('express');
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('order.json');
const database = lowdb(adapter);
const router = new Router();
const { nanoid } = require('nanoid');
var generator = require('generate-password');

var password = generator.generate({
	length: 10,
	numbers: true
});

database.defaults({ accounts: [] }).write();

// skapa konto
router.post('/', (request, response) => {
   const accountItem = request.body;
    accountItem.id = nanoid(); 
    accountItem.password = password;
    console.log('Konto att lägga till:', accountItem);
    const user = database.get('accounts').push(accountItem).write();
    console.log('account-databasen innhåller:', JSON.stringify(user));
    
    
    let result = {};
    result.user = user
    response.json(result);

})

router.get('/', (request, response) => {
    const account =  database.get('accounts').value();
    let result = {};
    response.json(account)  

})


module.exports = router