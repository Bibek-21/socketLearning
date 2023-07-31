const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`💬 server on port ${PORT}`))

const io = require('socket.io')(server)

app.use(express.static(path.join(__dirname, 'public')))



io.on('connection', (socket)=> {
    // Generate a unique code for every user
    console.log(socket.id);
  });
  