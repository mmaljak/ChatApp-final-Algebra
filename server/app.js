/*
This is a Node.js server using Express, HTTP and Socket.io modules. It sets up a server to listen on port 5000 
and creates a Socket.io instance. The cors option allows cross-origin requests from any domain. 
When a client connects to the server, it logs a message to the console. 
If the server receives a "chat" event from a client, it broadcasts the message to all clients. 
If a client disconnects from the server, the server logs a message to the console.
*/

// Import required modules
const express = require('express')
const http = require('http')
const Server = require("socket.io").Server

// Create express app
const app = express()

// Create http server and pass express app as parameter
const server = http.createServer(app)

// Create socket.io instance and pass server object as parameter
const io = new Server(server , {
    // Allow cors for all origins
    cors:{
        origin:"*"
    }
})

// Connection event handler for socket
io.on("connection" , (socket) => {
    console.log('We are connected')

    // Chat event handler for socket
    socket.on("chat" , chat => {
        // Emit chat event to all clients
        io.emit('chat' , chat)
    })

    // Disconnect event handler for socket
    socket.on('disconnect' , ()=> {
        console.log('Disconnected')
    })
}) 

// Start listening to the server on port 5000
server.listen(5000 , () => console.log('Listening to port 5000'))