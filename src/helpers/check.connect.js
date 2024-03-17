'use strick';

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');

const countConnect = () => {
    const numConnection = mongoose.connections.length;
    console.log(`Number of connection::${numConnection}`);
};

const checkOverload = () => {
    const _SECOND = 5000;
    const _NUM_CONECTION = 5;

    setInterval(() => {
        const numConnection = mongoose.connections.length;
        const numCores = os.cpus().length;
        const memoryUsage = process.memoryUsage().numCores;

        // Ex max number of connections based on bumber osf core
        const maxConnections = numCores * _NUM_CONECTION;

        console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB`);

        if (numConnection > maxConnections) {
            console.log(`Connection overload detected!`);
        }
    }, _SECOND); // monitor every num second
};

module.exports = {
    countConnect,
    checkOverload,
};
