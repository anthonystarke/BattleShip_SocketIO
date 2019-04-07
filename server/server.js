const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

http.listen(3000, function () {
  console.log(`listening on port ${this.address().port}`);
});
