const express = require("express");
const starCtlr = require("../controllers/star.js");
const upload = require("../utils/uploader");

const router = new express.Router();

router.get("/", starCtlr.index);
router.get("/create", starCtlr.form);
router.post("/", upload.single("image"), starCtlr.create);
router.get("/:id", starCtlr.show);
router.get("/:id/edit", starCtlr.form);
router.post("/:id", upload.single("image"), starCtlr.update);
router.get("/:id/delete", starCtlr.remove);

module.exports = router;
