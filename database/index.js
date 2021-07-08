const { Pool } = require('pg');
const config = require('../config/dbconfig');

const pool = new Pool(config);

pool.connect(() => {
  console.log('connected to db');
});

module.exports = pool;
