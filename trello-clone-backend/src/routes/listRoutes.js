const express = require('express');
const { createList, getLists } = require('../controllers/listController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/', createList);
router.get('/:boardId', getLists);

module.exports = router;
