const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

const users = [];
io.on('connection', (socket) => {
  users.length == 0 ? socket.player = 1 : socket.player = 2;
  users.push(socket)
  console.log(`Player ${socket.player} has joined`);

  if (users.length == 2) {
    console.log('ready')
    io.emit('game-ready');
  }


  socket.on('disconnect', () => {
    console.log(`Player ${socket.player} has left`)
    users.splice(socket);
  })
})

http.listen(3000, function () {
  console.log(`listening on port ${this.address().port}`);
});
