const db = require('../config');

const Buku = {
  getAll: (callback) => {
    const query = 'SELECT * FROM buku';
    db.query(query, callback);
  },
  getById: (no_buku, callback) => {
    const query = 'SELECT * FROM buku WHERE no_buku = ?';
    db.query(query, [no_buku], callback);
  },
  create: (buku, callback) => {
    const query = 'INSERT INTO buku (no_buku, tgl_masuk, judul, kolasi, pengarang, penerbit, thn_terbit, asal, no_klasifikasi, id_rak) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [buku.no_buku, buku.tgl_masuk, buku.judul, buku.kolasi, buku.pengarang, buku.penerbit, buku.thn_terbit, buku.asal, buku.no_klasifikasi, buku.id_rak], callback);
  },
  update: (no_buku, buku, callback) => {
    const query = 'UPDATE buku SET tgl_masuk = ?, judul = ?, kolasi = ?, pengarang = ?, penerbit = ?, thn_terbit = ?, asal = ?, no_klasifikasi = ?, id_rak = ? WHERE no_buku = ?';
    db.query(query, [buku.tgl_masuk, buku.judul, buku.kolasi, buku.pengarang, buku.penerbit, buku.thn_terbit, buku.asal, buku.no_klasifikasi, buku.id_rak, no_buku], callback);
  },
  delete: (no_buku, callback) => {
    const query = 'DELETE FROM buku WHERE no_buku = ?';
    db.query(query, [no_buku], callback);
  },
};

module.exports = Buku;
