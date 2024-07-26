const Tamu = require('../models/tamu');

exports.getAllTamu = (req, res) => {
  Tamu.getAll((err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(results);
  });
};

exports.getTamuById = (req, res) => {
  const no_tamu = req.params.no_tamu;
  Tamu.getById(no_tamu, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('Tamu not found');
    }
    res.send(results[0]);
  });
};

exports.createTamu = (req, res) => {
  const newTamu = req.body;
  Tamu.create(newTamu, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Tamu created successfully');
  });
};

exports.updateTamu = (req, res) => {
  const no_tamu = req.params.no_tamu;
  const updatedTamu = req.body;
  Tamu.update(no_tamu, updatedTamu, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Tamu updated successfully');
  });
};

exports.deleteTamu = (req, res) => {
  const no_tamu = req.params.no_tamu;
  Tamu.delete(no_tamu, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Tamu deleted successfully');
  });
};
