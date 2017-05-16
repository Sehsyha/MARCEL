const record = require('node-record-lpcm16');
const snowboy = require('snowboy');
const Models = snowboy.Models;
const Detector = snowboy.Detector;
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const models = new Models();

const port = 5000;

server.listen(port);
console.log('Server listening on port ' + port);

io.on('connection', (socket) => {
});

models.add({
  file: 'resources/snowboy.umdl',
  sensitivity: '0.8',
  hotwords : 'snowboy'
});

const detector = new Detector({
  resource: "resources/common.res",
  models: models,
  audioGain: 2.0
});

detector.on('silence', function () {
  // console.log('silence');
});

detector.on('sound', function () {
  // console.log('sound');
});

detector.on('error', function () {
  console.log('error');
});

detector.on('hotword', function (index, hotword) {
  console.log('Hotword detected');
  io.sockets.emit('hotword');
});

const mic = record.start({
  threshold: 0
});

mic.pipe(detector);
