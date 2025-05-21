import { Sequelize } from "sequelize";

const sequelize = new Sequelize('mymarketdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'  /* one of 'mysql' | 'postgres' | 'sqlite' | 'mssql' */
});

// Option 2: Passing a connection URI (PostgreSQL)
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

export default sequelize;