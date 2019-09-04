const express = require('express');

const router = express.Router();

//custom middleware
function uppercaser(req, res, next) {
    let name = req.params.name;
    if(name) {
        req.name = name.toUpperCase();
    }
    // res.send(`the name is: ${name}`);
    next();
}

//a router can have middleware that applies only to the router
router.use(express.json());

//this router handles urls that begin with /suppliers
router.get('/', (req, res) => {
    res.send('get to /suppliers')
})


//GET to /suppliers/:name/
router.get('/:name', uppercaser, (req, res) => {
    res.send(`get to /suppliers/${req.name}`)
})


module.exports = router;