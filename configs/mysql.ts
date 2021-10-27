import knex from "knex"
import dotenv from "dotenv"
dotenv.config()

const {MYSQL_HOST= "", MYSQL_PORT= "3306", MYSQL_USER= "", MYSQL_PASS= "", MYSQL_DB= "", KNEX_MYSQL_DEBUG= null}= process.env

const client= knex({
  client: "mysql2",
  debug: true,
  connection: {
    host: MYSQL_HOST,
    port: parseInt(MYSQL_PORT),
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database: MYSQL_DB
  },
  pool: {
    min: 0,
    max: 3
  }
})

export default client