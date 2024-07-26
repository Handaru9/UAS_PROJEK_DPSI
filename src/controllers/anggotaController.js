const Anggota = require('../models/anggota');

exports.getAllAnggota = (req, res) => {
  Anggota.getAll((err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(results);
  });
};

exports.getAnggotaById = (req, res) => {
  const id = req.params.id;
  Anggota.getById(id, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('Anggota not found');
    }
    res.send(results[0]);
  });
};

exports.createAnggota = (req, res) => {
  const newAnggota = req.body;
  Anggota.create(newAnggota, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Anggota created successfully');
  });
};

exports.updateAnggota = (req, res) => {
  const id = req.params.id;
  const updatedAnggota = req.body;
  Anggota.update(id, updatedAnggota, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Anggota updated successfully');
  });
};

exports.deleteAnggota = (req, res) => {
  const id = req.params.id;
  Anggota.delete(id, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Anggota deleted successfully');
  });
};
