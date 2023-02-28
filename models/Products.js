const Products = (sequelize, DataTypes) => {
  return sequelize.define("Product", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  });
};

module.exports = Products;
