module.exports = (sequelize, DataTypes) => {
  // Join table for the Many-to-Many relationship
  const StarsPlanets = sequelize.define(
    "StarsPlanets",
    {
      starId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Stars",
          key: "id",
        },
      },
      planetId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Planets",
          key: "id",
        },
      },
    },
    {}
  );

  return StarsPlanets;
};
