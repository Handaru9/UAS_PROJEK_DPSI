const db = require('../config');

const Petugas = {
  getAll: (callback) => {
    const query = 'SELECT * FROM petugas';
    db.query(query, callback);
  },
  getById: (id_petugas, callback) => {
    const query = 'SELECT * FROM petugas WHERE id_petugas = ?';
    db.query(query, [id_petugas], callback);
  },
  create: (petugas, callback) => {
    const query = 'INSERT INTO petugas (username, nama, password) VALUES (?, ?, ?)';
    db.query(query, [petugas.username, petugas.nama, petugas.password], callback);
  },
  update: (id_petugas, petugas, callback) => {
    const query = 'UPDATE petugas SET username = ?, nama = ?, password = ? WHERE id_petugas = ?';
    db.query(query, [petugas.username, petugas.nama, petugas.password, id_petugas], callback);
  },
  delete: (id_petugas, callback) => {
    const query = 'DELETE FROM petugas WHERE id_petugas = ?';
    db.query(query, [id_petugas], callback);
  },
};

module.exports = Petugas;
