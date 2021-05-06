const { Router, request, response } = require('express');
const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('order.json')
const database = lowdb(adapter);
const router = new Router();
const orderid = require('order-id')('mysecret')


database.defaults({ order: [] }).write();

router.post('/', (request, response) => {
    

    const orderItem = request.body;
    console.log('order att lägga till:', orderItem);
    let d = new Date()
    orderItem.ordertime = new Date().toLocaleString('SE',d);
    orderItem.ordernummer = orderid.generate();
    a = Math.random() * 15;
    orderItem.ETA =  Math.floor(a)+1
    
    database.get('accounts').filter({userID:orderItem.userID}).value();
    const order = database.get('order').push(orderItem).write();


    let result = {}

    result.success = true;
    result.order = order;

    response.json(result);
});

router.get('/:id', (request, response) => {
    let ordeDone = []
    const userID = request.params.id;
    const orders = database.get('order').filter({ userID: userID }).value();
    const currentDate = new Date();
    let result = {};

    response.json(orders)  

 })


module.exports = router