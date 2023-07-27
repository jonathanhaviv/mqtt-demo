// A basic MQTT 3.1.1 Server
const aedes = require('aedes')()
const server = require('net').createServer(aedes.handle)

const port = 1883
server.listen(port, function () {
    console.log('server listening on port', port)
    });

// A basic MQTT Client that will connect to the server and send messages to 3 different topics
// temp, speed, and light. Temp should be a json rooms and data for temp and humidity.
// Data should be random numbers between 0 and 100. Speed should be a number between 0 and 100.
// Light should just be a number between 0 and 1000. Each field can be a room name. Messages should 
// be sent every 5 seconds for temp, 10 seconds for speed, and 15 seconds for light.
const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:1883')

client.on('connect', () => {
    setInterval(() => {
        client.publish('temp', JSON.stringify({ 'kitchen': Math.floor(Math.random() * 100)}))
        client.publish('temp', JSON.stringify({ 'bedroom': Math.floor(Math.random() * 100)}))
        client.publish('temp', JSON.stringify({ 'bathroom': Math.floor(Math.random() * 100)}))
        client.publish('temp', JSON.stringify({ 'livingroom': Math.floor(Math.random() * 100)}))
        client.publish('temp', JSON.stringify({ 'den': Math.floor(Math.random() * 100)}))
        client.publish('temp', JSON.stringify({ 'entrance': Math.floor(Math.random() * 100)}))
    }, 2500)
    setInterval(() => {
        client.publish('speed', Math.floor(Math.random() * 100).toString())
    }, 5000)
    setInterval(() => {
        client.publish('light', Math.floor(Math.random() * 1000).toString())
    }, 7500)
})


