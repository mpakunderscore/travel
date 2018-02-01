let array3 = ["India",  "Mexico",  "Egypt",  "Ethiopia",  "Gabon",  "Guinea-Bissau",  "Kenya",  "Qatar",  "Rwanda",  "Sri Lanka",  "Uganda",  "Zambia",  "Zimbabwe",  "Bahrain",  "Cambodia",  "Lesotho",  "Myanmar",  "Singapore",  "Benin",  "Côte d'Ivoire",  "Bolivia",  "Ecuador",  "El Salvador",  "Fiji",  "Georgia",  "Grenada",  "Guatemala",  "Guyana",  "Haiti",  "Honduras",  "Indonesia",  "Israel",  "Jamaica",  "Kazakhstan",  "South Korea",  "Kyrgyzstan",  "Laos",  "Macedonia",  "Malaysia",  "Mauritius",  "Micronesia",  "Moldova",  "Mongolia",  "Montenegro",  "Morocco",  "Namibia",  "Nauru",  "Nicaragua",  "Panama",  "Paraguay",  "Peru",  "Philippines",  "Saint Kitts and Nevis",  "Saint Lucia",  "Saint Vincent and the Grenadines",  "Samoa",  "Sao Tome and Principe",  "Senegal",  "Serbia",  "Seychelles",  "South Africa",  "Swaziland",  "Tajikistan",  "Thailand",  "Trinidad and Tobago",  "Tunisia",  "Turkey",  "Ukraine",  "Uruguay",  "Uzbekistan",  "Vanuatu",  "Venezuela",  "Vietnam",  "Antigua and Barbuda",  "Argentina",  "Armenia",  "Azerbaijan",  "Bahamas",  "Barbados",  "Belarus",  "Bosnia and Herzegovina",  "Botswana",  "Brazil",  "Brunei",  "Chile",  "Colombia",  "Costa Rica",  "Cuba",  "Dominica",  "Dominican Republic",  "Iran",  "Jordan",  "Lebanon",  "Madagascar",  "Maldives",  "Marshall Islands",  "Mauritania",  "Mozambique",  "  Nepal",  "Palau",  "Tanzania",  "Timor-Leste",  "Togo",  "Tonga",  "Tuvalu",  "United Arab Emirates",  "Bangladesh",  "Cape Verde",  "Comoros",  "Djibouti"];

let visaFree = array3;

exports.check = function (countries) {

    let selected = [];

    console.log("Visa free: " + visaFree.length);

    let found = 0;

    let other = [];

    for (let j = 0; j < visaFree.length; j++) {

        let isFound = false;

        let visaFreeOne = visaFree[j].replace("*", "").replace("*", "").trim();

        for (let i = 0; i < countries.length; i++) {

            if (countries[i]["name"] === visaFreeOne) {
                // console.log(countries[i]["Code"]);

                selected.push(countries[i]);
                found++;
                isFound = true;
            }
        }

        if (!isFound)
            other.push(visaFree[j]);
    }

    // console.log("Found visa free: " + selected.length);

    // console.log(other);

    return selected;
};

// "Abkhazia"
// "East Timor"
// "Haiti Guyana"
// "China (only Hainan Island / Beijing / Shanghai)"
// "Laos"
// "Macau"
// "Micronesia"
// "UAE"
// "Salvador"
// "CAR"
// "South Ossetia"