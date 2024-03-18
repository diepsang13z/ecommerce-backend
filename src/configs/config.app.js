'use strict';

const local = {
    port: process.env.LOCAL_APP_PORT || 3000,
};

const production = {
    port: process.env.PRODUCTION_APP_PORT,
};

const config = { local, production };
const env = process.env.NODE_ENV || 'local';
module.exports = config[env];
