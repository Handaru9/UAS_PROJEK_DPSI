const db = require('../config');
const bcrypt = require('bcryptjs');

exports.create = (user, callback) => {
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      return callback(err);
    }
    user.password = hash;
    db.query('INSERT INTO users SET ?', user, callback);
  });
};

exports.findByUsername = (username, callback) => {
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      return callback(err);
    }
    if (results.length === 0) {
      return callback(null, null);
    }
    callback(null, results[0]);
  });
};
