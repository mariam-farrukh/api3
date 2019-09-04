const express = require('express');

const router = express.Router();

//a router can have middleware that applies only to the router
router.use(express.json());

//this router handles urls that begin with /suppliers
router.get('/', (req, res) => {
    res.send('get to /suppliers')
})


//GET to /suppliers/:id/
router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.send(`get to /products/${id}`)
})


module.exports = router;