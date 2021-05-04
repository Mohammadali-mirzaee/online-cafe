const { Router, request, response } = require('express');
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('accounts.json');
const database = lowdb(adapter);
const router = new Router();
const { nanoid } = require('nanoid');






database.defaults({ accounts: [] }).write();

// skapa konto


router.post('/', (request, response) => {
   const accountItem = request.body;
   accountItem.id = nanoid();
   console.log('Konto att lägga till:', accountItem);
/*     accounts.push(accountItem)
 */    accountItem.accounts = database.get('accounts').push(accountItem).write();
/*     const accounts = accountsdatabase.get('accounts').value();
 */console.log('account-databasen innhåller:', JSON.stringify(accounts));
    
    
    let result = {accounts};
    response.json(result);

}) 

/* const account = {
    username: 'Test',
    email: 'test@test.se',
    password: '12345'
} */

/* database.get('accounts').push(account).write();
 */



module.exports = router