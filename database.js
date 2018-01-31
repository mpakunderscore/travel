let Sequelize = require('sequelize');

let network = require('./network.js');

let set = {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
};

let sequelize = new Sequelize('quack', 'pavelkuzmin', '', set);
// let sequelize = new Sequelize(process.env.DATABASE_URL);

let map;

exports.run = function (global) {

    map = global;
};

let NPC = sequelize.define('npc', {
    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    answer: Sequelize.STRING,
    name: Sequelize.STRING,
    back: Sequelize.STRING,
    latitude: Sequelize.FLOAT,
    longitude: Sequelize.FLOAT
});

// let NPC = sequelize.define('npc', {
//
//     title: Sequelize.STRING,
//     description: Sequelize.TEXT,
//     answer: Sequelize.STRING,
//
//     owner: Sequelize.STRING,
//
//     name: Sequelize.STRING,
//     back: Sequelize.STRING,
//
//     latitude: Sequelize.FLOAT,
//     longitude: Sequelize.FLOAT,
//
//     visibility:  Sequelize.STRING
// });


NPC.sync({force: false}).then(() => {

    // Table created

    // return generate();
});

let User = sequelize.define('user', {

    title: Sequelize.STRING,
    description: Sequelize.TEXT,
    answer: Sequelize.STRING,

    owner: Sequelize.STRING,

    name: Sequelize.STRING,
    back: Sequelize.STRING,

    latitude: Sequelize.FLOAT,
    longitude: Sequelize.FLOAT,

    visibility:  Sequelize.STRING,

    address: Sequelize.STRING,
});

let Client = sequelize.define('client', {

    title: Sequelize.STRING,

    email: Sequelize.STRING,
    password: Sequelize.STRING,

    balance: Sequelize.STRING,
});

let names = [
    'cyber',
    'death',
    'chick',
    'spacy',
    'sir',
    'drake'
];

let back = [
    'day',
    'night'
];

//FFS

function generate() {

    for (let i = 0; i < 100; i++ ) {

        NPC.create({
            title: 'Generated',
            description: 'Generated',
            answer: 'Generated',
            name: names[Math.floor(Math.random()*names.length)],
            back: back[Math.floor(Math.random()*back.length)],
            latitude: Math.floor(Math.random()*18000)/100-90,
            longitude: Math.floor(Math.random()*36000)/100-180,
        })
    }

    buildDatabaseMap()
}

// 59.9547
//30.3275

exports.updateDuck = function (socket, duck) {

    console.log(duck)

    if (duck.id === undefined) {

        NPC.create(duck).then( function (user) {

            map.npc.push(user);

            network.updateDuckSend(socket, user);
        });

    } else {

        NPC.update(duck, { where: { id: duck.id } }).then((result) => {

            // here your result is simply an array with number of affected rows

            let place = map.npc.place(duck);
            // console.log(place)

            map.npc[place] = duck;

            // //TODO ?
            // NPC.findById(duck.id).then(function(user) {
            //
            //
            //

            // });

            network.updateDuckSend(socket, duck);

            // console.log(result);
        });
    }
};

// {title: 'Some title',
// name: names[Math.floor(Math.random()*names.length)],
// description: 'Some description',
// latitude: Math.floor(Math.random()*18000)/100-90,
// longitude: Math.floor(Math.random()*36000)/100-180,}


function buildDatabaseMap() {

    NPC.findAll().then(npc => {

        map.npc = [];

        npc.forEach((duck) => {
            map.npc.push(duck.get({
                plain: true
            }));
        });

        map.users['SOME SOCKET HASH ID HERE'] = {
            id: 'SOME SOCKET HASH ID HERE',
            title: 'Test server user',
            description: 'Some text from test user here',
            name: 'goose',
            back: 'day',
            latitude: 59.0000,
            longitude: 31.0000
        };

        // for (let i in npc) {
        // npc[i].location = JSON.parse(npc[i].location);
        // }


        // console.log(map)
    });
}

buildDatabaseMap();

Array.prototype.place = function (obj) {

    let i = this.length;
    while (i--) {

        if (this[i].id == obj.id) {
            return i;
        }
    }
    return -1;
};