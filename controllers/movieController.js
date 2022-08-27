const { dbConn } = require('../configuration')
const { ObjectID } = require('bson');

const getMovies = (req, res, next) => {
   // res.send("wait for movies");
   const pageNum = parseInt(req.params.page);

   if(isNaN(pageNum)){
     return res.status(400).send('bad request');
   } 

  const moviesToSkip = (pageNum - 1)* 10;

  dbConn('movies', async (db) => {
    try {
      const movies = await db.find({}).skip(moviesToSkip).limit(10).toArray();
      res.json(movies); 
    }
    catch(err) {
      res.status(500).send("Internal server error")
    }
    });
};


const getOneMovie = (req, res, next) => {
   if(!ObjectID.isValid(req.params.id)){
      return res.status(400).send("bad request")
   }
  const _id = new ObjectID(req.params.id);
  dbConn('movies', async(db) => {
   try {
     const movie = await db.findOne({_id});
     if(!movie){
       return res.status(404).send('Not Found');
     }
     res.json(movie);
   }
   catch(err) {
      return res.status(500).send("Internal Server Error")   
   }
     const movie = await db.findOne({_id});
     if(!movie){
        return res.status(404).send('Not Found');
     }
     res.json(movie);
  });
};

module.exports = {
    getMovies,
    getOneMovie
}