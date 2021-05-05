// TEST TEST TEST TEST
const express = require('express')
const menuRouter = require('./routes/coffee')
const order = require('./routes/order')
const accounts = require('./routes/accounts')
const { request, response } = require('express')

const app = express();

app.use(express.json());
app.use('/api/coffee', menuRouter);
app.use('/api/order', order);
app.use('/api/accounts', accounts)


app.listen(5000, () => {
    
    console.log("server started")

})

