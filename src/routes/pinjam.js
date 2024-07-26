const express = require('express');
const router = express.Router();
const pinjamController = require('../controllers/pinjamController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/', auth, checkRole(['admin', 'user']), pinjamController.getAllPinjam);
router.get('/:no_pinjam', auth, checkRole(['admin', 'user']), pinjamController.getPinjamById);
router.post('/', auth, checkRole(['admin']), pinjamController.createPinjam);
router.put('/:no_pinjam', auth, checkRole(['admin']), pinjamController.updatePinjam);
router.delete('/:no_pinjam', auth, checkRole(['admin']), pinjamController.deletePinjam);

module.exports = router;
