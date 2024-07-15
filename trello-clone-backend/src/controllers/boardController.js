const Board = require('../models/Board');

exports.createBoard = async (req, res) => {
  const { name } = req.body;

  try {
    const board = await Board.create({
      name,
      user: req.user._id,
    });

    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBoards = async (req, res) => {
  try {
    const boards = await Board.find({ user: req.user._id });

    res.json(boards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
