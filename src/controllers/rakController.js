const Rak = require('../models/rak');

exports.getAllRak = (req, res) => {
  Rak.getAll((err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(results);
  });
};

exports.getRakById = (req, res) => {
  const id_rak = req.params.id_rak;
  Rak.getById(id_rak, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('Rak not found');
    }
    res.send(results[0]);
  });
};

exports.createRak = (req, res) => {
  const newRak = req.body;
  Rak.create(newRak, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Rak created successfully');
  });
};

exports.updateRak = (req, res) => {
  const id_rak = req.params.id_rak;
  const updatedRak = req.body;
  Rak.update(id_rak, updatedRak, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Rak updated successfully');
  });
};

exports.deleteRak = (req, res) => {
  const id_rak = req.params.id_rak;
  Rak.delete(id_rak, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Rak deleted successfully');
  });
};
