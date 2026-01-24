const { Planet } = require("../models");

// GET all
const index = async (req, res) => {
  try {
    const planets = await Planet.findAll();
    res.status(200).json(planets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET by "id"
const show = async (req, res) => {
  try {
    const planet = await Planet.findByPk(req.params.id);
    if (planet) {
      res.status(200).json(planet);
    } else {
      res.status(404).json({ message: "Planet not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// POST
const create = async (req, res) => {
  try {
    const planet = await Planet.create(req.body);
    res.status(201).json(planet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// PATCH
const update = async (req, res) => {
  try {
    const [updated] = await Planet.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedPlanet = await Planet.findByPk(req.params.id);
      res.status(200).json(updatedPlanet);
    } else {
      res.status(404).json({ message: "Planet not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE
const remove = async (req, res) => {
  try {
    const deleted = await Planet.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json(true);
    } else {
      res.status(404).json({ message: "Planet not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { index, show, create, update, remove };
