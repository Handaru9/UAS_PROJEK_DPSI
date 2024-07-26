const Inventaris = require('../models/inventaris');

exports.getAllInventaris = (req, res) => {
  Inventaris.getAll((err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(results);
  });
};

exports.getInventarisById = (req, res) => {
  const id_inventaris = req.params.id_inventaris;
  Inventaris.getById(id_inventaris, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('Inventaris not found');
    }
    res.send(results[0]);
  });
};

exports.createInventaris = (req, res) => {
  const newInventaris = req.body;
  Inventaris.create(newInventaris, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Inventaris created successfully');
  });
};

exports.updateInventaris = (req, res) => {
  const id_inventaris = req.params.id_inventaris;
  const updatedInventaris = req.body;
  Inventaris.update(id_inventaris, updatedInventaris, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Inventaris updated successfully');
  });
};

exports.deleteInventaris = (req, res) => {
  const id_inventaris = req.params.id_inventaris;
  Inventaris.delete(id_inventaris, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Inventaris deleted successfully');
  });
};
