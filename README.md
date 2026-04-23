# ACE6143 Assignment: UDP Client and Server

A simple implementation of a UDP client and echo server using Node.js for the ACE6143 Data Comm assignment.

## Description

This project is built fully from scratch, utilizing the official Node.js v22 docs for the development of both the server and the client.

This project consists of two main components:
- **UDP Server**: Listens on port 13000 and echoes back any messages it receives.
- **UDP Client**: A command-line interface that allows users to send messages to the UDP server.

## Example Interaction

### Server
```bash
$ npm run start:server

> ace6143-assignment@1.0.0 start:server
> cd udp-server && node index.js

server listening 0.0.0.0:13000
server got: hello? from 127.0.0.1:56426

```

### Client

```bash
$ npm run start:client

> ace6143-assignment@1.0.0 start:client
> cd udp-client && node index.js

Simple UDP CLI Client


Please enter destination UDP server address (or leave blank to use 127.0.0.1): 

Using 127.0.0.1
Please enter destination UDP server port number: 13000
You are now talking to remote UDP host 127.0.0.1 at port 13000

UDPC> hello?
UDPC> Received: hello?
UDPC> 
```

## How it works

The server and client communicate using UDP datagrams.

- The **UDP server** binds to port `13000` and listens for incoming packets.
- When the server receives a message, it prints the sender address and port, then sends the same payload back to that client.
- The **UDP client** starts as a command-line interface, prompts for the server address and port, and sends typed messages as UDP packets.
- The client receives the server response and prints the echoed reply back to the terminal.

This is a simple echo service with no session state or reliability guarantees beyond what UDP provides.

## Prerequisites

Node.js v22 is recommended.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ace6143-assignment
   ```

2. Install dependencies:

   Running `npm install` is optional as no additional NPM packages are required. This project only uses built-in Node modules.

## Usage

### Running the Server
```bash
npm run start:server
```
The server will start listening on port 13000.

### Running the Client
```bash
npm run start:client
```
The client will prompt for the server address (default: 127.0.0.1) and port (default: 13000), then allow you to send messages via the command line.

### Running Both
To use the UDP client and server together, run them in separate terminal windows:

**Terminal 1 (Server):**
```bash
npm run start:server
```

**Terminal 2 (Client):**
```bash
npm run start:client
```
Once the server is listening, run the client in another terminal and enter your server details when prompted.

Once you're done, use `Ctrl` + `C` to terminate the active process.

## Troubleshooting
### 1. Address In Use
```Error: bind EADDRINUSE 0.0.0.0:13000
    at node:dgram:397:20
    at process.processTicksAndRejections (node:internal/process/task_queues:91:21)
```

This means the server can't listen to `0.0.0.0:13000` because there's another process bound to the same `address:port`

 You likely have another instance of the server running already. If not, check for other processes that might use the same port (13000), or change the port number in the final line of `udp-server/index.js` to an unused port number.

## Project Structure

```
ace6143-assignment/
├── package.json          # Root package.json with scripts
├── .gitignore            # Git ignore file
├── udp-client/
│   ├── package.json      # Client dependencies and scripts
│   └── index.js          # Client implementation
└── udp-server/
    ├── package.json      # Server dependencies and scripts
    └── index.js          # Server implementation
```

## Features

- Simple UDP echo server
- Interactive CLI client
- Configurable server address and port
- Graceful shutdown handling

## License

ISC