const Pinjam = require('../models/pinjam');

exports.getAllPinjam = (req, res) => {
  Pinjam.getAll((err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(results);
  });
};

exports.getPinjamById = (req, res) => {
  const no_pinjam = req.params.no_pinjam;
  Pinjam.getById(no_pinjam, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('Pinjam not found');
    }
    res.send(results[0]);
  });
};

exports.createPinjam = (req, res) => {
  const newPinjam = req.body;
  Pinjam.create(newPinjam, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Pinjam created successfully');
  });
};

exports.updatePinjam = (req, res) => {
  const no_pinjam = req.params.no_pinjam;
  const updatedPinjam = req.body;
  Pinjam.update(no_pinjam, updatedPinjam, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Pinjam updated successfully');
  });
};

exports.deletePinjam = (req, res) => {
  const no_pinjam = req.params.no_pinjam;
  Pinjam.delete(no_pinjam, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Pinjam deleted successfully');
  });
};
