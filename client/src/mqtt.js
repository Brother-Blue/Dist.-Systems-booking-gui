const mqtt = require('mqtt');

export const client = mqtt.connect({host: 'localhost', port: 1883});