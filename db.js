const Pool = require ('pg').Pool
const pool = new Pool({
     user: 'postgres',
     password: 'olya',
     host: 'localhost',
     port: 5432,
     database:"meetups"
})

module.exports = pool
