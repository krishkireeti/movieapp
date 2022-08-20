const express = require('express');

const middleware = require('./middlewares')

const routes = require('./routes');

const app = express();

// middlewares
middleware(app);
// app.use((req, res, next) => {
//  console.log(req.ip);
//  next();
// });



// routes
routes(app);


module.exports = app;