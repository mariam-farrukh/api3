const express = require('express');

const productsRouter = require('../products/products-router.js') 

const suppliersRouter = require('../suppliers/suppliers-router.js') 

const server = express();


//global middleware goes here
//piece of code that will be placed in a particular step in request and response cycle
server.use(express.json());
// server.use(uppercaser); // using custom middleware globally

//we can also use middleware locally
server.use('/products', productsRouter);
server.use('/suppliers', suppliersRouter);

//route handlers
server.get('/', (req, res) => {
    res.status(200).json({api: 'up'});
});

server.get('/products', (req, res) => {
    
});

server.get('/clients', (req, res) => {

});

server.get('/suppliers', (req, res) => {

});

module.exports = server;