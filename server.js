const { log } = require('console')
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`💬 server on port ${PORT}`))

const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, 'public')))

let socketConnected = new Set();



function onconnection(socket) {
    console.log(socket.id);

    socketConnected.add(socket.id)
    io.emit('clients-total', socketConnected.size)

    socket.on('disconnect', () => {
        console.log('socket disconnected ', socket.id);
        socketConnected.delete(socket.id);
        io.emit('clients-total', socketConnected.size);


    })
    socket.on('message', (data) => {
        socket.broadcast.emit('chatMessage', data);
        console.log(data);
    })

}



io.on('connection', onconnection);
