const { Sequelize } = require("sequelize");
module.exports = new Sequelize("codegig", "postgres", "81esyvprog17", {
  host: "localhost",
  dialect: "postgres",
});
