// TEST TEST TEST TEST
const express = require('express')
const menuRouter = require('./routes/coffee')
const order = require('./routes/order')
const signup = require('./routes/signup')
const login = require('./routes/login')

const app = express();

app.use(express.json());

app.use('/api/coffee', menuRouter);
app.use('/api/order', order);
app.use('api/signup', signup)
app.use('api/login', login)


//  function initiateDatabase() {
//      accountsdatabase.defaults({ accounts: [] }).write();
// };

app.listen(5000, () => {
    console.log("server started")
    // initiateDatabase();
})

