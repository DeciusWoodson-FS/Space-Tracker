const { Star } = require("../models");

// GET all
const index = async (req, res) => {
  try {
    const stars = await Star.findAll();
    res.status(200).json(stars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET by "id"
const show = async (req, res) => {
  try {
    const star = await Star.findByPk(req.params.id);
    if (star) {
      res.status(200).json(star);
    } else {
      res.status(404).json({ message: "Star not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT
const create = async (req, res) => {
  try {
    const star = await Star.create(req.body);
    res.status(201).json(star);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PATCH
const update = async (req, res) => {
  try {
    const [updated] = await Star.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedStar = await Star.findByPk(req.params.id);
      res.status(200).json(updatedStar);
    } else {
      res.status(404).json({ message: "Star not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
const remove = async (req, res) => {
  try {
    const deleted = await Star.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json(true);
    } else {
      res.status(404).json({ message: "Star not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { index, show, create, update, remove };
