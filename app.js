const express = require('express');

const app = express();

// routes
app.get('/', (req, res, next) => {
    // res.status(200).send('Welcome to the homepage');
    // res.json({
    //     message: "Welcome to the homepage"
    // })
    res.redirect('/user')
});

app.get('/user', (req, res, next) => {
    res.send("Welcome to user page after nodemon and improving this");
})

module.exports = app;