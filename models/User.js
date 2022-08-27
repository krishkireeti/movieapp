const { dbConn } = require('../configuration');


class User {
  constructor(userData){
   this.userData = {...userData};
  };

  save() {
    dbConn('users', (db) => {
        db.insertOne(this.userData);
    });
  }
};

const user = new User({
    username: 'KrishnaKireeti',
    email: 'kirikom94@gmail.com',
    password: 'kirru1234',
    first_name: 'Krishna',
    last_name: 'Kireeti'
});

user.save();