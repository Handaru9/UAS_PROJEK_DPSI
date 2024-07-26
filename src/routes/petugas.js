const express = require('express');
const router = express.Router();
const petugasController = require('../controllers/petugasController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/', auth, checkRole(['admin', 'user']), petugasController.getAllPetugas);
router.get('/:id_petugas', auth, checkRole(['admin', 'user']), petugasController.getPetugasById);
router.post('/', auth, checkRole(['admin']), petugasController.createPetugas);
router.put('/:id_petugas', auth, checkRole(['admin']), petugasController.updatePetugas);
router.delete('/:id_petugas', auth, checkRole(['admin']), petugasController.deletePetugas);

module.exports = router;
