const express = require("express");
const galaxyCtlr = require("../controllers/galaxy.js");
const upload = require("../utils/uploader");

const router = new express.Router();

router.get("/", galaxyCtlr.index);
router.get("/create", galaxyCtlr.form); // Route for displaying the HTML form
router.post("/", upload.single("image"), galaxyCtlr.create); // Add upload middleware
router.get("/:id", galaxyCtlr.show);
router.get("/:id/edit", galaxyCtlr.form); // New route for editing
router.post("/:id", upload.single("image"), galaxyCtlr.update);
router.get("/:id/delete", galaxyCtlr.remove); // Simple delete link for HTML

module.exports = router;
