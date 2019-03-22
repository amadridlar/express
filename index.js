require('colors');
const express = require('express');
const morgan = require('morgan');
const routes = require('./router.js');
const apiRouter = require('./api-router.js');

const server = express();

//CONFIGURATION
server.set('serverName', 'My express server'); 
server.set('port', 3000);
server.set('views', __dirname +'/views'); //view template folder
server.set('view engine', 'ejs'); //type of view template

//MIDDLEWARES
server.use (morgan('dev')); //show request info in console
server.use(express.json());

//routes
server.use(routes); //use request path as a middelware
server.use(apiRouter);

server.listen(server.get('port'), () => {
    console.log('Server started in port'.green, server.get('port').toString().green);
    console.log('Server name: ', server.get('serverName'));
});

