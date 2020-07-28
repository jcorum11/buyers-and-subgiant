require("dotenv").config();

const Sequelize = require("sequelize");

let sequelize;
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      dialect: "mysql",
      port: 3306,
      dialectOptions: {
        decimalNumbers: true,
      },
    }
  );
}

module.exports = sequelize;