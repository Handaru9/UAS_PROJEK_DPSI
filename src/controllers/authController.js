const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.register = (req, res) => {
  const newUser = req.body;
  User.create(newUser, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('User registered successfully');
  });
};

exports.login = (req, res) => {
  const { username, password } = req.body;
  User.findByUsername(username, (err, user) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (!user) {
      return res.status(400).send('Username or password is wrong');
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (!result) {
        return res.status(400).send('Invalid password');
      }
      const token = jwt.sign({ _id: user.id, role: user.role }, process.env.TOKEN_SECRET);
      res.header('Authorization', token).send({ token });
    });
  });
};
