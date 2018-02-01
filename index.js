let Storage = require('node-storage');

let store = new Storage('store');

//SERVER

let express = require('express');
let path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'web')));

let server = require('http').Server(app);

const port = process.env.PORT || 9090;

server.listen(port);

let select = require('./server/select.js');

app.get('/countries', function (request, response) {
    response.json(select.countries());
});

app.get('/weather', function (request, response) {
    response.json(select.weather(store));
});



