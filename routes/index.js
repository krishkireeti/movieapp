module.exports = (app) => {
    app.get('/', (req, res, next) => {
        // res.status(200).send('Welcome to the homepage');
        // res.json({
        //     message: "Welcome to the homepage"
        // })
        // res.redirect('/user')
        res.send("Welcome to homepage")
    });
    
    app.get('/user/:id/:postId', (req, res, next) => {
        // console.log(req.query);
       // console.log(req.params);
       const host = req.get('Host');
       console.log(host);
        res.send("Welcome to user page after nodemon");
    })
    
};