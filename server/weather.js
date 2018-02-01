let weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C

exports.check = function (i, country) {

    setTimeout(function() {

        console.log(country["city"]);

        weather.find({search: country["city"], degreeType: 'C'}, function(err, result) {

        // console.log(result);

            if (err)
                console.log(err);

            if (result && result[0] && result[0]['current']) {
                country["weather"] = result[0]['current'];

                console.log(country["city"] + ": " + result[0]['current']['temperature'])
            }
        });

    }, i * 200);
};



