const db = require('../config');

const Tamu = {
  getAll: (callback) => {
    const query = 'SELECT * FROM tamu';
    db.query(query, callback);
  },
  getById: (no_tamu, callback) => {
    const query = 'SELECT * FROM tamu WHERE no_tamu = ?';
    db.query(query, [no_tamu], callback);
  },
  create: (tamu, callback) => {
    const query = 'INSERT INTO tamu (id_anggota, nama, status, jenis_kelamin, keperluan, saran, tgl_kunjungan, keterangan) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [tamu.id_anggota, tamu.nama, tamu.status, tamu.jenis_kelamin, tamu.keperluan, tamu.saran, tamu.tgl_kunjungan, tamu.keterangan], callback);
  },
  update: (no_tamu, tamu, callback) => {
    const query = 'UPDATE tamu SET id_anggota = ?, nama = ?, status = ?, jenis_kelamin = ?, keperluan = ?, saran = ?, tgl_kunjungan = ?, keterangan = ? WHERE no_tamu = ?';
    db.query(query, [tamu.id_anggota, tamu.nama, tamu.status, tamu.jenis_kelamin, tamu.keperluan, tamu.saran, tamu.tgl_kunjungan, tamu.keterangan, no_tamu], callback);
  },
  delete: (no_tamu, callback) => {
    const query = 'DELETE FROM tamu WHERE no_tamu = ?';
    db.query(query, [no_tamu], callback);
  },
};

module.exports = Tamu;
