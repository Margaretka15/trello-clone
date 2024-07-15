const express = require('express');
const { createBoard, getBoards } = require('../controllers/boardController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authMiddleware);

router.post('/', createBoard);
router.get('/', getBoards);

module.exports = router;
