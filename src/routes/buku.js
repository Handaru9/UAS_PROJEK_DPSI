const express = require('express');
const router = express.Router();
const bukuController = require('../controllers/bukuController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/', auth, checkRole(['admin', 'user']), bukuController.getAllBuku);
router.get('/:no_buku', auth, checkRole(['admin', 'user']), bukuController.getBukuById);
router.post('/', auth, checkRole(['admin']), bukuController.createBuku);
router.put('/:no_buku', auth, checkRole(['admin']), bukuController.updateBuku);
router.delete('/:no_buku', auth, checkRole(['admin']), bukuController.deleteBuku);

module.exports = router;
