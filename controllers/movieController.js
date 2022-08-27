const { dbConn } = require('../configuration')
const { ObjectID } = require('bson');
const createError = require('http-errors');

const getMovies = (req, res, next) => {
   // res.send("wait for movies");
   const pageNum = parseInt(req.params.page);

   if(isNaN(pageNum)){
     return next(createError(400));
   } 

  const moviesToSkip = (pageNum - 1)* 10;

  dbConn('movies', async (db) => {
    try {
      const movies = await db.find({}).skip(moviesToSkip).limit(10).toArray();
      res.json(movies); 
    }
    catch(err) {
      next(createError(500));
    }
    });
};


const getOneMovie = (req, res, next) => {
   if(!ObjectID.isValid(req.params.id)){
      return next(createError(400));
   }
  const _id = new ObjectID(req.params.id);
  dbConn('movies', async(db) => {
   try {
     const movie = await db.findOne({_id});
     if(!movie){
       return next(createError(404));
     }
     res.json(movie);
   }
   catch(err) {
      return next(createError(500));  
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