'use strict';
var tessel = require('tessel');
var clientFromConnectionString = require('azure-iot-device-mqtt').clientFromConnectionString;
var Message = require('azure-iot-device').Message;

var connectionString = "IoTHub device connection string";

var client = clientFromConnectionString(connectionString);

var connectCallback = function (err) {
  if (err) {
    console.log('Could not connect: ' + err);
  } else {
    console.log('Client connected');
    client.on('message', function (msg) {
      console.log('Id: ' + msg.messageId + ' Body: ' + msg.data);
      tessel.led[2].toggle();
      tessel.led[3].toggle();
    });
  }
};

client.open(connectCallback);

tessel.led[2].on();


console.log("Running!")