const { Galaxy } = require("../models");

// GET all
const index = async (req, res) => {
  try {
    const galaxies = await Galaxy.findAll();
    res.status(200).json(galaxies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET by "id"
const show = async (req, res) => {
  try {
    const galaxy = await Galaxy.findByPk(req.params.id);
    if (galaxy) {
      res.status(200).json(galaxy);
    } else {
      res.status(404).json({ message: "Galaxy not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST
const create = async (req, res) => {
  try {
    const galaxy = await Galaxy.create(req.body);
    res.status(201).json(galaxy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PATCH
const update = async (req, res) => {
  try {
    const [updated] = await Galaxy.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedGalaxy = await Galaxy.findByPk(req.params.id);
      res.status(200).json(updatedGalaxy);
    } else {
      res.status(404).json({ message: "Galaxy not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
const remove = async (req, res) => {
  try {
    const deleted = await Galaxy.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json(true);
    } else {
      res.status(404).json({ message: "Galaxy not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { index, show, create, update, remove };
