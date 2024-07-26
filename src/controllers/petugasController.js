const Petugas = require('../models/petugas');

exports.getAllPetugas = (req, res) => {
  Petugas.getAll((err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(results);
  });
};

exports.getPetugasById = (req, res) => {
  const id_petugas = req.params.id_petugas;
  Petugas.getById(id_petugas, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('Petugas not found');
    }
    res.send(results[0]);
  });
};

exports.createPetugas = (req, res) => {
  const newPetugas = req.body;
  Petugas.create(newPetugas, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Petugas created successfully');
  });
};

exports.updatePetugas = (req, res) => {
  const id_petugas = req.params.id_petugas;
  const updatedPetugas = req.body;
  Petugas.update(id_petugas, updatedPetugas, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Petugas updated successfully');
  });
};

exports.deletePetugas = (req, res) => {
  const id_petugas = req.params.id_petugas;
  Petugas.delete(id_petugas, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Petugas deleted successfully');
  });
};
