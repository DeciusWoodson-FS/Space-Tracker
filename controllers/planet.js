const { Planet } = require("../models");

// GET all
const index = async (req, res) => {
  const planets = await Planet.findAll();
  if (req.accepts("html")) {
    res.render("planet/index.twig", { planets });
  } else {
    res.status(200).json(planets);
  }
};

// Show Form (HTML only)
const form = async (req, res) => {
  if (req.params.id) {
    const planet = await Planet.findByPk(req.params.id);
    res.render("planet/form.twig", { planet, action: "Update" });
  } else {
    res.render("planet/form.twig", { action: "Create" });
  }
};

// POST
const create = async (req, res) => {
  const data = req.body;
  if (req.file) data.image = req.file.filename;

  try {
    const planet = await Planet.create(data);
    if (req.accepts("html")) {
      res.redirect("/planets");
    } else {
      res.status(201).json(planet);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// PATCH/PUT
const update = async (req, res) => {
  const data = req.body;
  if (req.file) data.image = req.file.filename;

  await Planet.update(data, { where: { id: req.params.id } });

  if (req.accepts("html")) {
    res.redirect("/planets");
  } else {
    res.status(200).json({ message: "Updated" });
  }
};

// DELETE
const remove = async (req, res) => {
  await Planet.destroy({ where: { id: req.params.id } });
  if (req.accepts("html")) {
    res.redirect("/planets");
  } else {
    res.status(204).json(true);
  }
};

module.exports = { index, show: index, create, update, remove, form };
