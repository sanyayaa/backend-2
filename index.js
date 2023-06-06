const express = require('express');
const morgan = require('morgan');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

//server start
const server = express();

//bodyParser
server.use(express.json());
server.use(morgan('default'))
server.use(express.static('public')); 
server.use('/products',productRouter.router);
server.use('/users',userRouter.router);


//server end
server.listen(8080,() => {
  console.log('server started')
});

