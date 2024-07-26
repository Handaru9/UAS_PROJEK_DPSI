const express = require('express');
const router = express.Router();
const anggotaController = require('../controllers/anggotaController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/', auth, checkRole(['admin', 'user']), anggotaController.getAllAnggota);
router.get('/:id', auth, checkRole(['admin', 'user']), anggotaController.getAnggotaById);
router.post('/', auth, checkRole(['admin']), anggotaController.createAnggota);
router.put('/:id', auth, checkRole(['admin']), anggotaController.updateAnggota);
router.delete('/:id', auth, checkRole(['admin']), anggotaController.deleteAnggota);

module.exports = router;
