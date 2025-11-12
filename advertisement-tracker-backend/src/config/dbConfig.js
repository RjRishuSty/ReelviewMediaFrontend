
const { Pool } = require("pg");
const { createUserTable } = require("../db/createTables");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
   ssl: {
    require: true,
    rejectUnauthorized: false,
  },
});

const dbConnect = async () => {
  // verify connection
  await pool.query("SELECT 1");
  // create tables if not exists
  await createUserTable(pool);
  console.log("✅ Connected to DB");
};


module.exports = { pool, dbConnect };
