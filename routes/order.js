const { Router } = require('express');
const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('order.json')
const database = lowdb(adapter);
const router = new Router();



database.defaults({ order: [] }).write();



router.post('/', (request, response) => {
    
    const orderItem = request.body;
    console.log('order att lägga till:', orderItem);
    const order = database.get('order').push(orderItem).write();

    let result = {order}

    result.success = true;

    response.json(result);
});


module.exports = router