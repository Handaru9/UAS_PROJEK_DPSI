const db = require('../config');

const Pinjam = {
  getAll: (callback) => {
    const query = 'SELECT * FROM pinjam';
    db.query(query, callback);
  },
  getById: (no_pinjam, callback) => {
    const query = 'SELECT * FROM pinjam WHERE no_pinjam = ?';
    db.query(query, [no_pinjam], callback);
  },
  create: (pinjam, callback) => {
    const query = 'INSERT INTO pinjam (kode_pinjam, id_anggota, no_buku, tgl_pinjam, tgl_habis_pinjam, tgl_kembali, denda) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [pinjam.kode_pinjam, pinjam.id_anggota, pinjam.no_buku, pinjam.tgl_pinjam, pinjam.tgl_habis_pinjam, pinjam.tgl_kembali, pinjam.denda], callback);
  },
  update: (no_pinjam, pinjam, callback) => {
    const query = 'UPDATE pinjam SET kode_pinjam = ?, id_anggota = ?, no_buku = ?, tgl_pinjam = ?, tgl_habis_pinjam = ?, tgl_kembali = ?, denda = ? WHERE no_pinjam = ?';
    db.query(query, [pinjam.kode_pinjam, pinjam.id_anggota, pinjam.no_buku, pinjam.tgl_pinjam, pinjam.tgl_habis_pinjam, pinjam.tgl_kembali, pinjam.denda, no_pinjam], callback);
  },
  delete: (no_pinjam, callback) => {
    const query = 'DELETE FROM pinjam WHERE no_pinjam = ?';
    db.query(query, [no_pinjam], callback);
  },
};

module.exports = Pinjam;
