let data = require('./data.js');
let visa = require('./visa.js');

let weather = require('./weather.js');

let f = 0;

let selected = [];

exports.countries = function () {

    selected = visa.check(data.countries);
    return selected;
};

exports.weather = function () {

    // console.log("Weather start.");

    for (let i = 0; i < selected.length; i++) {

        // console.log(selected["city"])

        if (selected[i]["city"])
            weather.check(i, selected[i]);
    }

    // console.log("Weather done.")
};