const List = require('../models/List');

exports.createList = async (req, res) => {
  const { name, boardId } = req.body;

  try {
    const list = await List.create({
      name,
      board: boardId,
    });

    res.status(201).json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getLists = async (req, res) => {
  const { boardId } = req.params;

  try {
    const lists = await List.find({ board: boardId });

    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
