const { Router } = require('express');
const router = Router();

router.get('/test',(req, res) => {
    //res.json({"Title": "Hola mundo"});
    const data = {
           "name": "Pablo",
           "website": "xzy.com"
    };
    res.json(data);
});

module.exports = router;
