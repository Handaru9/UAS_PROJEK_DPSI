const express = require('express');
const router = express.Router();
const rakController = require('../controllers/rakController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/', auth, checkRole(['admin', 'user']), rakController.getAllRak);
router.get('/:id_rak', auth, checkRole(['admin', 'user']), rakController.getRakById);
router.post('/', auth, checkRole(['admin']), rakController.createRak);
router.put('/:id_rak', auth, checkRole(['admin']), rakController.updateRak);
router.delete('/:id_rak', auth, checkRole(['admin']), rakController.deleteRak);

module.exports = router;
