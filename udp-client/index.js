const readline = require('node:readline');
const dgram = require('node:dgram');

//initializing CLI 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'UDPC> ',
});

const socket = dgram.createSocket('udp4');

let address, port;

console.log("Simple UDP CLI Client\n");

//prompt user for destination IP
rl.question("\nPlease enter destination UDP server address (or leave blank to use 127.0.0.1): ", (answer) => {
    if (answer == "") {
        console.log("\nUsing 127.0.0.1")
        address = "127.0.0.1";
    } else
        address = answer;

    //prompt user for destination port number
    getPort().then(() => {
        console.log(`You are now talking to remote UDP host ${address} at port ${port}\n`);
        setTimeout(() => { rl.prompt() }, 250);
    });
    //note: there is no way to know if the server is up without receiving a reply

});

//print out reply from server
socket.on("message", (message) => {
    rl.pause();
    rl.write(`Received: ${message}\n`);
    rl.resume();
    
    rl.prompt();
});

socket.on("error", (error) => {
    console.log(`${error}`);
    rl.close();
    socket.close();
    process.exit();
});

rl.on("close", () => {
    console.log("\nClosing connection...");
    socket.close();
});

//'line' event triggers when user enters a new line in CLI
rl.on('line', (line) => {
    if (!line.includes('Received:'))
        socket.send(`${line.trim()}`, port, address); //this sends the message to the remote server via UDP
    else return;

    rl.prompt();
})

rl.prompt();

//function to get destination port number by prompting user
let getPort = () => new Promise(resolve => {

    rl.question("Please enter destination UDP server port number: ", (answer) => {
        if (!answer) {
            console.log("You need to provide a port number!\n");
            resolve(getPort()); //recurse if no port number provided
        } else {
            port = answer;
            resolve();
        }

    });
});