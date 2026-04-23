const dgram = require('node:dgram');

const server = dgram.createSocket('udp4');

//function to shut the server down
const closeServer = () => {
    console.log('Server shutting down...');
    server.close(() => {
        console.log('Server stopped.')
        process.exit();
    });
}

//handle errors
server.on('error', (err) => {
    console.error(`server error:\n${err.stack}`);
    closeServer();
});

//handle incoming requests
server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    server.send(msg, rinfo.port, rinfo.address);
})


server.on('listening', () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

//Close the server on Ctrl+C interrupt or OS terminate signal
process.on('SIGINT', closeServer);
process.on('SIGTERM', closeServer);

server.bind(13000);