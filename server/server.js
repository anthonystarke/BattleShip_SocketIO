const express = require('express');
const app = express();
const path = require('path');
// const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

const http = require('http').Server(app);
const io = require('socket.io')(http);

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));

// MongoClient.connect('mongodb://localhost:27017')
//   .then((client) => {
//     const db = client.db('birds');
//     const sightingsCollection = db.collection('sightings');
//     const sightingsRouter = createRouter(sightingsCollection);
//     app.use('/api/sightings', sightingsRouter);
//   })
//   .catch(console.err);

http.listen(3000, function () {
  console.log(`listening on port ${this.address().port}`);
});
