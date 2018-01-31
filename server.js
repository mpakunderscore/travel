//SERVER

let express = require('express');
let path = require('path');

// let database = require('./database.js');

let app = express();

//STATIC WEB
app.use(express.static(path.join(__dirname, 'web')));

// app.use('/api', express.static(path.join(__dirname, 'web')));

let server = require('http').Server(app);

const port = process.env.PORT || 9090;

app.get('/api', function (request, response) {
    response.json({api: "API"});
});

server.listen(port);

// let database = require('./database.js');
// database.run(map);

