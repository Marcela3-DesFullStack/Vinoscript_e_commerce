const mysql = require('mysql2/promise');
const config = require('../config')


async function query(sql,params) {
    const connection = await mysql.createConnection(config.db);
    const [result, metadata] = await connection.query(sql,params);
    return result;
}

module.exports = {
    query
}