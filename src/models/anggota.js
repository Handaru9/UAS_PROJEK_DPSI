const db = require('../config');

const Anggota = {
  getAll: (callback) => {
    const query = 'SELECT * FROM anggota';
    db.query(query, callback);
  },
  getById: (id, callback) => {
    const query = 'SELECT * FROM anggota WHERE id_anggota = ?';
    db.query(query, [id], callback);
  },
  create: (anggota, callback) => {
    const query = 'INSERT INTO anggota (nama, tempat_lahir, tgl_lahir, jenis_kelamin, alamat, tgl_gabung, username, password, keterangan) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [anggota.nama, anggota.tempat_lahir, anggota.tgl_lahir, anggota.jenis_kelamin, anggota.alamat, anggota.tgl_gabung, anggota.username, anggota.password, anggota.keterangan], callback);
  },
  update: (id, anggota, callback) => {
    const query = 'UPDATE anggota SET nama = ?, tempat_lahir = ?, tgl_lahir = ?, jenis_kelamin = ?, alamat = ?, tgl_gabung = ?, username = ?, password = ?, keterangan = ? WHERE id_anggota = ?';
    db.query(query, [anggota.nama, anggota.tempat_lahir, anggota.tgl_lahir, anggota.jenis_kelamin, anggota.alamat, anggota.tgl_gabung, anggota.username, anggota.password, anggota.keterangan, id], callback);
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM anggota WHERE id_anggota = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Anggota;
