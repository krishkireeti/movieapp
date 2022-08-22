const { getLogin } = require('./auth/login');
const { getMovies } = require('./movieController');

module.exports = {
    getLogin,
    getMovies
}