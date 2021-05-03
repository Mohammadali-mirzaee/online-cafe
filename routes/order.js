const { Router, request, response } = require('express');
const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('order.json')
const database = lowdb(adapter);
const router = new Router();
const {initiateDatabase} = require('../server')

const orderid = require('order-id')('mysecret')



database.defaults({ order: [] }).write();



router.post('/', (request, response) => {
    const account = request.params.initiateDatabase
    const orderItem = request.body;
    console.log('order att lägga till:', orderItem);
    let d = new Date()
    orderItem.ordertime = new Date().toLocaleString('SE',d);
    orderItem.ordernummer = orderid.generate();
    const order = database.get('order').push(orderItem).write();

    let result = {}

    result.success = true;
    result.order = order;

    response.json(result);
});

router.get('/:id', (request, response) => {
    
})


module.exports = router