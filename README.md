# ACE6143 Assignment: UDP Client and Server

A simple implementation of a UDP client and echo server using Node.js for the ACE6143 Data Comm assignment.

## Description

This project is built fully from scratch, utilizing the official Node.js v22 docs for the development of both the server and the client.

This project consists of two main components:
- **UDP Server**: Listens on port 13000 and echoes back any messages it receives.
- **UDP Client**: A command-line interface that allows users to send messages to the UDP server.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ace6143-assignment
   ```

2. Install dependencies (if any):
   ```bash
   npm install
   ```

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