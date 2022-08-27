const { MongoClient } = require('mongodb');

const _uri = "mongodb+srv://user:xS9GYF0QVSFtZ16k@cluster0.9nqoat4.mongodb.net/sample_mflix?retryWrites=true&w=majority"

const dbConn = (coll, cb) => { 
  MongoClient.connect(_uri)
  .then(async (client) => {
       const db = client.db('sample_mflix').collection(coll);
       await cb(db);
       client.close();
  })
 
};

// dbConn('movies', async (db) => {
//     const movie = await db.findOne();
//     //console.log(movie);
// })

module.exports = dbConn;
