'use strict';

const local = {
    host: process.env.LOCAL_DB_HOST || 'localhost',
    port: process.env.LOCAL_DB_PORT || 27017,
    name: process.env.LOCAL_DB_NAME || 'dbDEV',
};

const production = {
    host: process.env.PRODUCTION_DB_HOST,
    port: process.env.PRODUCTION_DB_PORT,
    name: process.env.PRODUCTION_DB_NAME,
};

const config = { local, production };
const env = process.env.NODE_ENV || 'local';
module.exports = config[env];
