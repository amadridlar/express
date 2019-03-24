const express = require ('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs'); //file with template configuration
});

router.get('/login', (req, res) =>{
    res.render('login.ejs');
});

module.exports = router;

