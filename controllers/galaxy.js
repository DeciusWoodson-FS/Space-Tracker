const { Galaxy } = require("../models");

// GET all
const index = async (req, res) => {
  const galaxies = await Galaxy.findAll();

  // Check if client accepts HTML or JSON
  if (req.accepts("html")) {
    res.render("galaxy/index.twig", { galaxies });
  } else {
    res.status(200).json(galaxies);
  }
};

// Show Form (HTML only)
const form = async (req, res) => {
  if (req.params.id) {
    const galaxy = await Galaxy.findByPk(req.params.id);
    res.render("galaxy/form.twig", { galaxy, action: "Update" });
  } else {
    res.render("galaxy/form.twig", { action: "Create" });
  }
};

// POST
const create = async (req, res) => {
  const data = req.body;
  // If a file was uploaded, save the filename to the database object
  if (req.file) {
    data.image = req.file.filename;
  }

  try {
    const galaxy = await Galaxy.create(data);
    if (req.accepts("html")) {
      res.redirect("/galaxies");
    } else {
      res.status(201).json(galaxy);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// PATCH
const update = async (req, res) => {
  const data = req.body;
  if (req.file) {
    data.image = req.file.filename;
  }

  await Galaxy.update(data, { where: { id: req.params.id } });

  if (req.accepts("html")) {
    res.redirect("/galaxies");
  } else {
    res.status(200).json({ message: "Updated" });
  }
};

// DELETE
const remove = async (req, res) => {
  await Galaxy.destroy({ where: { id: req.params.id } });

  if (req.accepts("html")) {
    res.redirect("/galaxies");
  } else {
    res.status(204).json(true);
  }
};

module.exports = { index, show: index, create, update, remove, form };
