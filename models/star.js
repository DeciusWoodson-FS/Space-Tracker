module.exports = (sequelize, DataTypes) => {
  const Star = sequelize.define(
    "Star",
    {
      name: DataTypes.STRING,
      size: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      galaxyId: DataTypes.INTEGER,
    },
    {}
  );

  Star.associate = function (models) {
    // Star belongs to a Galaxy
    Star.belongsTo(models.Galaxy, {
      foreignKey: "galaxyId",
      as: "galaxy",
    });
    // Star belongs to many Planets (Many-to-Many)
    Star.belongsToMany(models.Planet, {
      through: "StarsPlanets",
      foreignKey: "starId",
      otherKey: "planetId",
      as: "planets",
    });
  };

  return Star;
};
