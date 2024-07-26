const db = require('../config');

const Inventaris = {
  getAll: (callback) => {
    const query = 'SELECT * FROM inventaris';
    db.query(query, callback);
  },
  getById: (id_inventaris, callback) => {
    const query = 'SELECT * FROM inventaris WHERE id_inventaris = ?';
    db.query(query, [id_inventaris], callback);
  },
  create: (inventaris, callback) => {
    const query = 'INSERT INTO inventaris (tgl_masuk, nama_barang, jml_barang, keterangan) VALUES (?, ?, ?, ?)';
    db.query(query, [inventaris.tgl_masuk, inventaris.nama_barang, inventaris.jml_barang, inventaris.keterangan], callback);
  },
  update: (id_inventaris, inventaris, callback) => {
    const query = 'UPDATE inventaris SET tgl_masuk = ?, nama_barang = ?, jml_barang = ?, keterangan = ? WHERE id_inventaris = ?';
    db.query(query, [inventaris.tgl_masuk, inventaris.nama_barang, inventaris.jml_barang, inventaris.keterangan, id_inventaris], callback);
  },
  delete: (id_inventaris, callback) => {
    const query = 'DELETE FROM inventaris WHERE id_inventaris = ?';
    db.query(query, [id_inventaris], callback);
  },
};

module.exports = Inventaris;
