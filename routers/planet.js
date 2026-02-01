const express = require("express");
const planetCtlr = require("../controllers/planet.js");
const upload = require("../utils/uploader");

const router = new express.Router();

router.get("/", planetCtlr.index);
router.get("/create", planetCtlr.form);
router.post("/", upload.single("image"), planetCtlr.create);
router.get("/:id", planetCtlr.show);
router.get("/:id/edit", planetCtlr.form);
router.post("/:id", upload.single("image"), planetCtlr.update);
router.get("/:id/delete", planetCtlr.remove);

module.exports = router;
