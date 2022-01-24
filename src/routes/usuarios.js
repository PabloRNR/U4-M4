const { Router } = require('express');
const router = new Router();


// const fetch = require('node-fetch');
router.get('/',async(req,res) => {
    // import fetch from 'node-fetch';
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const datos = await response.json();
    res.json(datos);
});

module.exports = router;