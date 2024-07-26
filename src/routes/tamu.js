const express = require('express');
const router = express.Router();
const tamuController = require('../controllers/tamuController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/', auth, checkRole(['admin', 'user']), tamuController.getAllTamu);
router.get('/:no_tamu', auth, checkRole(['admin', 'user']), tamuController.getTamuById);
router.post('/', auth, checkRole(['admin']), tamuController.createTamu);
router.put('/:no_tamu', auth, checkRole(['admin']), tamuController.updateTamu);
router.delete('/:no_tamu', auth, checkRole(['admin']), tamuController.deleteTamu);

module.exports = router;
