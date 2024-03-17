const app = require('./src/app');

PORT = 3055;

const server = app.listen(PORT, () => {
    console.log(`WSV eCommerce start with ${PORT}`);
});

process.on('SIGINT', () => {
    server.close(() => console.log('Exit Server'));
});