const express = require('express');
const router = express.Router();
const tamuController = require('../controllers/tamuController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

// Mendapatkan semua data tamu
// Hanya dapat diakses oleh pengguna dengan peran 'admin' dan 'user'
router.get('/', auth, checkRole(['admin', 'user']), tamuController.getAllTamu);

// Mendapatkan data tamu berdasarkan no_tamu
// Hanya dapat diakses oleh pengguna dengan peran 'admin' dan 'user'
router.get('/:no_tamu', auth, checkRole(['admin', 'user']), tamuController.getTamuById);

// Membuat data tamu baru
// Hanya dapat diakses oleh pengguna dengan peran 'admin'
router.post('/', auth, checkRole(['admin']), tamuController.createTamu);

// Memperbarui data tamu berdasarkan no_tamu
// Hanya dapat diakses oleh pengguna dengan peran 'admin'
router.put('/:no_tamu', auth, checkRole(['admin']), tamuController.updateTamu);

// Menghapus data tamu berdasarkan no_tamu
// Hanya dapat diakses oleh pengguna dengan peran 'admin'
router.delete('/:no_tamu', auth, checkRole(['admin']), tamuController.deleteTamu);

module.exports = router;
