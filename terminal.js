const {SerialPort} = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// Create a new Readline parser
const parser = new ReadlineParser({ delimiter: '\r\n' });

const vals = {path: 'COM7', baudRate: 9600, dataBits: 8, parity: 'none', stopBits: 1 }

const port = new SerialPort(vals);

port.pipe(parser);

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

parser.on('data', (data) => {
    const currentTime = getCurrentTime(); // Get current time
    const formattedData = `${currentTime}: ${data}`; // Concatenate time with sensor data
    console.log(formattedData);
});