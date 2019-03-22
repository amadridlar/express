const express = require ('express');
const router = express.Router();

//router.all execute before all request to '/createUser' path
router.all('/createUser', (req, res, next) => {
    console.log('Before all request'.yellow);
    next();
});

router.post ('/createUser', (req, res) => {
    console.log(req.body);
    res.set('Content-Type', 'application/json'); //set header value
    res.send('{"":"OK","request":"POST"}');
});

router.put ('/createUser', (req, res) => {
    console.log(req.body);
    res.set('Content-Type', 'application/json');
    res.send('{"status":"OK","request":"PUT"}');
});


router.get('/getUser/:userID', (req, res) => {
    console.log(`userID ${req.params.userID}`);
    res.set('Content-Type', 'application/json');
    res.send(`{
        "name": "Johny",
        "lastName": "Reland",
        "ID": "${req.params.userID}"
    }`);
});

module.exports = router;