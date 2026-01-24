// Load in Express framework
const express = require("express");

// Load in database models
const db = require("./models");

// Create a new Express instance
const app = express();

// Load in RESTful routers
const routers = require("./routers/index.js");

// Middleware to parse request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Home page welcome middleware
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Star Tracker Library");
});

// Register RESTful routers with our "app"
app.use("/planets", routers.planet);
app.use("/stars", routers.star);
app.use("/galaxies", routers.galaxy);

// Synchronize the database and then start the server
db.sequelize.sync({ force: false }).then(() => {
  // Set app to listen on port 3000
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});
