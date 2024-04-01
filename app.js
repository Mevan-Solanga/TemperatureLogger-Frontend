const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Create a new Readline parser
const parser = new ReadlineParser({ delimiter: '\r\n' });

const vals = { path: 'COM7', baudRate: 9600, dataBits: 8, parity: 'none', stopBits: 1 };
const port = new SerialPort(vals);

port.pipe(parser);

wss.on('connection', (ws) => {
    parser.on('data', (data) => {
        ws.send(data); // Send sensor readings to connected clients
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Serve the HTML file
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
