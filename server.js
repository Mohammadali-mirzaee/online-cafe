// TEST TEST TEST TEST
const express = require('express')
const menuRouter = require('./routes/coffee')
const order = require('./routes/order')

const app = express();

app.use(express.json());

app.use('/api/coffee', menuRouter);
app.use('/api/order', order);


app.listen(5000, () => {
    console.log("server started")
})



/* module.exports = router; */

/* exports.addorder = addorder; */