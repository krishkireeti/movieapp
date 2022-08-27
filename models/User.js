const { dbConn } = require('../configuration');
const { userValidator } = require('../validator'); 

class User {
  constructor(userData){
   this.userData = {...userData};
  };

  save() {
    dbConn('users', (db) => {
        db.insertOne(this.userData);
    });
  }

  static validate(userData) {
     const result = userValidator.validate(userData);
     console.log(result);
  };

};

const userData = new User({
    username: 'KrishnaKireeti',
    email: 'kirikom94@gmail.com',
    password: 'kirru1234',
    first_name: 'Krishna',
    last_name: 'Kireeti'
});

User.validate(userData);