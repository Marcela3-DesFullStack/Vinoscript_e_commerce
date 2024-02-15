const dotenv = require ("dotenv");
dotenv.config();

const config = {
    db: {
        host:process.env.HOST,
        database:process.env.DATABASE ,
        port:process.env.PORT,
        user: process.env.USER ,
        password:process.env.PASSWORD
    }
};

module.exports = config;