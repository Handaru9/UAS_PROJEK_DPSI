const express = require('express');
const router = express.Router();
const inventarisController = require('../controllers/inventarisController');
const auth = require('../middleware/auth');
const checkRole = require('../middleware/checkRole');

router.get('/', auth, checkRole(['admin', 'user']), inventarisController.getAllInventaris);
router.get('/:id_inventaris', auth, checkRole(['admin', 'user']), inventarisController.getInventarisById);
router.post('/', auth, checkRole(['admin']), inventarisController.createInventaris);
router.put('/:id_inventaris', auth, checkRole(['admin']), inventarisController.updateInventaris);
router.delete('/:id_inventaris', auth, checkRole(['admin']), inventarisController.deleteInventaris);

module.exports = router;
