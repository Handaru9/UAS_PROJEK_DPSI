const Buku = require('../models/buku');

exports.getAllBuku = (req, res) => {
  Buku.getAll((err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send(results);
  });
};

exports.getBukuById = (req, res) => {
  const no_buku = req.params.no_buku;
  Buku.getById(no_buku, (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (results.length === 0) {
      return res.status(404).send('Buku not found');
    }
    res.send(results[0]);
  });
};

exports.createBuku = (req, res) => {
  const newBuku = req.body;
  Buku.create(newBuku, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Buku created successfully');
  });
};

exports.updateBuku = (req, res) => {
  const no_buku = req.params.no_buku;
  const updatedBuku = req.body;
  Buku.update(no_buku, updatedBuku, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Buku updated successfully');
  });
};

exports.deleteBuku = (req, res) => {
  const no_buku = req.params.no_buku;
  Buku.delete(no_buku, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send('Buku deleted successfully');
  });
};
