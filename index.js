const express = require("express");
const app = express();
const db = require("./models");
const routers = require("./routers/index.js");
const path = require("path");

// View Engine (Twig)
app.set("view engine", "twig");
app.set("views", path.join(__dirname, "views"));

// Serve Static Files
app.use(express.static("public"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home page
app.get("/", (req, res) => {
  res.render("home.twig", { title: "Star Tracker" });
});

// Routers
app.use("/planets", routers.planet);
app.use("/stars", routers.star);
app.use("/galaxies", routers.galaxy);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
