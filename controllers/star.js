const { Star } = require("../models");

// GET all
const index = async (req, res) => {
  const stars = await Star.findAll();
  if (req.accepts("html")) {
    res.render("star/index.twig", { stars });
  } else {
    res.status(200).json(stars);
  }
};

// Show Form (HTML only)
const form = async (req, res) => {
  if (req.params.id) {
    const star = await Star.findByPk(req.params.id);
    res.render("star/form.twig", { star, action: "Update" });
  } else {
    res.render("star/form.twig", { action: "Create" });
  }
};

// POST
const create = async (req, res) => {
  const data = req.body;
  if (req.file) data.image = req.file.filename;

  try {
    const star = await Star.create(data);
    if (req.accepts("html")) {
      res.redirect("/stars");
    } else {
      res.status(201).json(star);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// PATCH/PUT
const update = async (req, res) => {
  const data = req.body;
  if (req.file) data.image = req.file.filename;

  await Star.update(data, { where: { id: req.params.id } });

  if (req.accepts("html")) {
    res.redirect("/stars");
  } else {
    res.status(200).json({ message: "Updated" });
  }
};

// DELETE
const remove = async (req, res) => {
  await Star.destroy({ where: { id: req.params.id } });
  if (req.accepts("html")) {
    res.redirect("/stars");
  } else {
    res.status(204).json(true);
  }
};

module.exports = { index, show: index, create, update, remove, form };
