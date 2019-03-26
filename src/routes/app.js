require('colors');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('../router.js');
const apiRouter = require('./api-router.js');

const app = express();

//CONFIGURATION
app.set('serverName', 'My express server');
app.set('port', 3000);
app.set('views', 'views'); //view template folder
app.set('view engine', 'ejs'); //type of view template

//MIDDLEWARES
app.use(morgan('dev')); //show request info in console
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

//ROUTES
app.use(routes); //use request path as a middelware
app.use(apiRouter);

app.listen(app.get('port'), () => {
    console.log('Server started in port'.green, app.get('port').toString().green);
    console.log('Server name: ', app.get('serverName'));
});

