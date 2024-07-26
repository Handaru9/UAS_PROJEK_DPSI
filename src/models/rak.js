const db = require('../config');

const Rak = {
  getAll: (callback) => {
    const query = 'SELECT * FROM rak';
    db.query(query, callback);
  },
  getById: (id_rak, callback) => {
    const query = 'SELECT * FROM rak WHERE id_rak = ?';
    db.query(query, [id_rak], callback);
  },
  create: (rak, callback) => {
    const query = 'INSERT INTO rak (kode_rak, keterangan) VALUES (?, ?)';
    db.query(query, [rak.kode_rak, rak.keterangan], callback);
  },
  update: (id_rak, rak, callback) => {
    const query = 'UPDATE rak SET kode_rak = ?, keterangan = ? WHERE id_rak = ?';
    db.query(query, [rak.kode_rak, rak.keterangan, id_rak], callback);
  },
  delete: (id_rak, callback) => {
    const query = 'DELETE FROM rak WHERE id_rak = ?';
    db.query(query, [id_rak], callback);
  },
};

module.exports = Rak;
