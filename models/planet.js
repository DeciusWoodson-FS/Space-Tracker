module.exports = (sequelize, DataTypes) => {
  const Planet = sequelize.define(
    "Planet",
    {
      name: DataTypes.STRING,
      size: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {}
  );

  Planet.associate = function (models) {
    // Planet belongs to many Stars (Many-to-Many)
    Planet.belongsToMany(models.Star, {
      through: "StarsPlanets",
      foreignKey: "planetId",
      otherKey: "starId",
      as: "stars",
    });
  };

  return Planet;
};
