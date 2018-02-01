let countries = [{"code": "AF", "name": "Afghanistan"},{"code": "AX", "name": "\u00c5land Islands"},{"code": "AL", "name": "Albania"},{"code": "DZ", "name": "Algeria"},{"code": "AS", "name": "American Samoa"},{"code": "AD", "name": "Andorra"},{"code": "AO", "name": "Angola"},{"code": "AI", "name": "Anguilla"},{"code": "AQ", "name": "Antarctica"},{"code": "AG", "name": "Antigua and Barbuda"},{"code": "AR", "name": "Argentina"},{"code": "AM", "name": "Armenia"},{"code": "AW", "name": "Aruba"},{"code": "AU", "name": "Australia"},{"code": "AT", "name": "Austria"},{"code": "AZ", "name": "Azerbaijan"},{"code": "BS", "name": "Bahamas"},{"code": "BH", "name": "Bahrain"},{"code": "BD", "name": "Bangladesh"},{"code": "BB", "name": "Barbados"},{"code": "BY", "name": "Belarus"},{"code": "BE", "name": "Belgium"},{"code": "BZ", "name": "Belize"},{"code": "BJ", "name": "Benin"},{"code": "BM", "name": "Bermuda"},{"code": "BT", "name": "Bhutan"},{"code": "BO", "name": "Bolivia"},{"code": "BQ", "name": "Bonaire, Sint Eustatius and Saba"},{"code": "BA", "name": "Bosnia and Herzegovina"},{"code": "BW", "name": "Botswana"},{"code": "BV", "name": "Bouvet Island"},{"code": "BR", "name": "Brazil"},{"code": "IO", "name": "British Indian Ocean Territory"},{"code": "BN", "name": "Brunei"},{"code": "BG", "name": "Bulgaria"},{"code": "BF", "name": "Burkina Faso"},{"code": "BI", "name": "Burundi"},{"code": "KH", "name": "Cambodia"},{"code": "CM", "name": "Cameroon"},{"code": "CA", "name": "Canada"},{"code": "CV", "name": "Cape Verde"},{"code": "KY", "name": "Cayman Islands"},{"code": "CF", "name": "Central African Republic"},{"code": "TD", "name": "Chad"},{"code": "CL", "name": "Chile"},{"code": "CN", "name": "China"},{"code": "CX", "name": "Christmas Island"},{"code": "CC", "name": "Cocos (Keeling) Islands"},{"code": "CO", "name": "Colombia"},{"code": "KM", "name": "Comoros"},{"code": "CG", "name": "Congo"},{"code": "CD", "name": "Congo, the Democratic Republic of the"},{"code": "CK", "name": "Cook Islands"},{"code": "CR", "name": "Costa Rica"},{"code": "CI", "name": "C\u00f4te d'Ivoire"},{"code": "HR", "name": "Croatia"},{"code": "CU", "name": "Cuba"},{"code": "CW", "name": "Cura\u00e7ao"},{"code": "CY", "name": "Cyprus"},{"code": "CZ", "name": "Czech Republic"},{"code": "DK", "name": "Denmark"},{"code": "DJ", "name": "Djibouti"},{"code": "DM", "name": "Dominica"},{"code": "DO", "name": "Dominican Republic"},{"code": "EC", "name": "Ecuador"},{"code": "EG", "name": "Egypt"},{"code": "SV", "name": "El Salvador"},{"code": "GQ", "name": "Equatorial Guinea"},{"code": "ER", "name": "Eritrea"},{"code": "EE", "name": "Estonia"},{"code": "ET", "name": "Ethiopia"},{"code": "FK", "name": "Falkland Islands (Malvinas)"},{"code": "FO", "name": "Faroe Islands"},{"code": "FJ", "name": "Fiji"},{"code": "FI", "name": "Finland"},{"code": "FR", "name": "France"},{"code": "GF", "name": "French Guiana"},{"code": "PF", "name": "French Polynesia"},{"code": "TF", "name": "French Southern Territories"},{"code": "GA", "name": "Gabon"},{"code": "GM", "name": "Gambia"},{"code": "GE", "name": "Georgia"},{"code": "DE", "name": "Germany"},{"code": "GH", "name": "Ghana"},{"code": "GI", "name": "Gibraltar"},{"code": "GR", "name": "Greece"},{"code": "GL", "name": "Greenland"},{"code": "GD", "name": "Grenada"},{"code": "GP", "name": "Guadeloupe"},{"code": "GU", "name": "Guam"},{"code": "GT", "name": "Guatemala"},{"code": "GG", "name": "Guernsey"},{"code": "GN", "name": "Guinea"},{"code": "GW", "name": "Guinea-Bissau"},{"code": "GY", "name": "Guyana"},{"code": "HT", "name": "Haiti"},{"code": "HM", "name": "Heard Island and McDonald Islands"},{"code": "VA", "name": "Holy See (Vatican City State)"},{"code": "HN", "name": "Honduras"},{"code": "HK", "name": "Hong Kong"},{"code": "HU", "name": "Hungary"},{"code": "IS", "name": "Iceland"},{"code": "IN", "name": "India"},{"code": "ID", "name": "Indonesia"},{"code": "IR", "name": "Iran"},{"code": "IQ", "name": "Iraq"},{"code": "IE", "name": "Ireland"},{"code": "IM", "name": "Isle of Man"},{"code": "IL", "name": "Israel"},{"code": "IT", "name": "Italy"},{"code": "JM", "name": "Jamaica"},{"code": "JP", "name": "Japan"},{"code": "JE", "name": "Jersey"},{"code": "JO", "name": "Jordan"},{"code": "KZ", "name": "Kazakhstan"},{"code": "KE", "name": "Kenya"},{"code": "KI", "name": "Kiribati"},{"code": "KP", "name": "South Korea"},{"code": "KR", "name": "Korea"},{"code": "KW", "name": "Kuwait"},{"code": "KG", "name": "Kyrgyzstan"},{"code": "LA", "name": "Laos"},{"code": "LV", "name": "Latvia"},{"code": "LB", "name": "Lebanon"},{"code": "LS", "name": "Lesotho"},{"code": "LR", "name": "Liberia"},{"code": "LY", "name": "Libya"},{"code": "LI", "name": "Liechtenstein"},{"code": "LT", "name": "Lithuania"},{"code": "LU", "name": "Luxembourg"},{"code": "MO", "name": "Macau"},{"code": "MK", "name": "Macedonia"},{"code": "MG", "name": "Madagascar"},{"code": "MW", "name": "Malawi"},{"code": "MY", "name": "Malaysia"},{"code": "MV", "name": "Maldives"},{"code": "ML", "name": "Mali"},{"code": "MT", "name": "Malta"},{"code": "MH", "name": "Marshall Islands"},{"code": "MQ", "name": "Martinique"},{"code": "MR", "name": "Mauritania"},{"code": "MU", "name": "Mauritius"},{"code": "YT", "name": "Mayotte"},{"code": "MX", "name": "Mexico"},{"code": "FM", "name": "Micronesia"},{"code": "MD", "name": "Moldova"},{"code": "MC", "name": "Monaco"},{"code": "MN", "name": "Mongolia"},{"code": "ME", "name": "Montenegro"},{"code": "MS", "name": "Montserrat"},{"code": "MA", "name": "Morocco"},{"code": "MZ", "name": "Mozambique"},{"code": "MM", "name": "Myanmar"},{"code": "NA", "name": "Namibia"},{"code": "NR", "name": "Nauru"},{"code": "NP", "name": "Nepal"},{"code": "NL", "name": "Netherlands"},{"code": "NC", "name": "New Caledonia"},{"code": "NZ", "name": "New Zealand"},{"code": "NI", "name": "Nicaragua"},{"code": "NE", "name": "Niger"},{"code": "NG", "name": "Nigeria"},{"code": "NU", "name": "Niue"},{"code": "NF", "name": "Norfolk Island"},{"code": "MP", "name": "Northern Mariana Islands"},{"code": "NO", "name": "Norway"},{"code": "OM", "name": "Oman"},{"code": "PK", "name": "Pakistan"},{"code": "PW", "name": "Palau"},{"code": "PS", "name": "Palestine, State of"},{"code": "PA", "name": "Panama"},{"code": "PG", "name": "Papua New Guinea"},{"code": "PY", "name": "Paraguay"},{"code": "PE", "name": "Peru"},{"code": "PH", "name": "Philippines"},{"code": "PN", "name": "Pitcairn"},{"code": "PL", "name": "Poland"},{"code": "PT", "name": "Portugal"},{"code": "PR", "name": "Puerto Rico"},{"code": "QA", "name": "Qatar"},{"code": "RE", "name": "R\u00e9union"},{"code": "RO", "name": "Romania"},{"code": "RU", "name": "Russian Federation"},{"code": "RW", "name": "Rwanda"},{"code": "BL", "name": "Saint Barth\u00e9lemy"},{"code": "SH", "name": "Saint Helena, Ascension and Tristan da Cunha"},{"code": "KN", "name": "Saint Kitts and Nevis"},{"code": "LC", "name": "Saint Lucia"},{"code": "MF", "name": "Saint Martin (French part)"},{"code": "PM", "name": "Saint Pierre and Miquelon"},{"code": "VC", "name": "Saint Vincent and the Grenadines"},{"code": "WS", "name": "Samoa"},{"code": "SM", "name": "San Marino"},{"code": "ST", "name": "Sao Tome and Principe"},{"code": "SA", "name": "Saudi Arabia"},{"code": "SN", "name": "Senegal"},{"code": "RS", "name": "Serbia"},{"code": "SC", "name": "Seychelles"},{"code": "SL", "name": "Sierra Leone"},{"code": "SG", "name": "Singapore"},{"code": "SX", "name": "Sint Maarten (Dutch part)"},{"code": "SK", "name": "Slovakia"},{"code": "SI", "name": "Slovenia"},{"code": "SB", "name": "Solomon Islands"},{"code": "SO", "name": "Somalia"},{"code": "ZA", "name": "South Africa"},{"code": "GS", "name": "South Georgia and the South Sandwich Islands"},{"code": "SS", "name": "South Sudan"},{"code": "ES", "name": "Spain"},{"code": "LK", "name": "Sri Lanka"},{"code": "SD", "name": "Sudan"},{"code": "SR", "name": "Suriname"},{"code": "SJ", "name": "Svalbard and Jan Mayen"},{"code": "SZ", "name": "Swaziland"},{"code": "SE", "name": "Sweden"},{"code": "CH", "name": "Switzerland"},{"code": "SY", "name": "Syria"},{"code": "TW", "name": "Taiwan, Province of China"},{"code": "TJ", "name": "Tajikistan"},{"code": "TZ", "name": "Tanzania"},{"code": "TH", "name": "Thailand"},{"code": "TL", "name": "Timor-Leste"},{"code": "TG", "name": "Togo"},{"code": "TK", "name": "Tokelau"},{"code": "TO", "name": "Tonga"},{"code": "TT", "name": "Trinidad and Tobago"},{"code": "TN", "name": "Tunisia"},{"code": "TR", "name": "Turkey"},{"code": "TM", "name": "Turkmenistan"},{"code": "TC", "name": "Turks and Caicos Islands"},{"code": "TV", "name": "Tuvalu"},{"code": "UG", "name": "Uganda"},{"code": "UA", "name": "Ukraine"},{"code": "AE", "name": "United Arab Emirates"},{"code": "GB", "name": "United Kingdom"},{"code": "US", "name": "United States"},{"code": "UM", "name": "United States Minor Outlying Islands"},{"code": "UY", "name": "Uruguay"},{"code": "UZ", "name": "Uzbekistan"},{"code": "VU", "name": "Vanuatu"},{"code": "VE", "name": "Venezuela"},{"code": "VN", "name": "Vietnam"},{"code": "VG", "name": "Virgin Islands, British"},{"code": "VI", "name": "Virgin Islands, U.S."},{"code": "WF", "name": "Wallis and Futuna"},{"code": "EH", "name": "Western Sahara"},{"code": "YE", "name": "Yemen"},{"code": "ZM", "name": "Zambia"},{"code": "ZW", "name": "Zimbabwe"}]

exports.countries = countries;

//capitals

let climate = require('./climate.js');

let capitals = [
    {"country": "Afghanistan", "city": "Kabul"},
    {"country": "Albania", "city": "Tirana"},
    {"country": "Algeria", "city": "Alger"},
    {"country": "American Samoa", "city": "Fagatogo"},
    {"country": "Andorra", "city": "Andorra la Vella"},
    {"country": "Angola", "city": "Luanda"},
    {"country": "Anguilla", "city": "The Valley"},
    {"country": "Antarctica", "city": null},
    {"country": "Antigua and Barbuda", "city": "Saint John's"},
    {"country": "Argentina", "city": "Buenos Aires"},
    {"country": "Armenia", "city": "Yerevan"},
    {"country": "Aruba", "city": "Oranjestad"},
    {"country": "Australia", "city": "Canberra"},
    {"country": "Austria", "city": "Wien"},
    {"country": "Azerbaijan", "city": "Baku"},
    {"country": "Bahamas", "city": "Nassau"},
    {"country": "Bahrain", "city": "al-Manama"},
    {"country": "Bangladesh", "city": "Dhaka"},
    {"country": "Barbados", "city": "Bridgetown"},
    {"country": "Belarus", "city": "Minsk"},
    {"country": "Belgium", "city": "Bruxelles [Brussel]"},
    {"country": "Belize", "city": "Belmopan"},
    {"country": "Benin", "city": "Porto-Novo"},
    {"country": "Bermuda", "city": "Hamilton"},
    {"country": "Bhutan", "city": "Thimphu"},
    {"country": "Bolivia", "city": "La Paz"},
    {"country": "Bosnia and Herzegovina", "city": "Sarajevo"},
    {"country": "Botswana", "city": "Gaborone"},
    {"country": "Bouvet Island", "city": null},
    {"country": "Brazil", "city": "Brasília"},
    {"country": "British Indian Ocean Territory", "city": null},
    {"country": "Brunei", "city": "Bandar Seri Begawan"},
    {"country": "Bulgaria", "city": "Sofia"},
    {"country": "Burkina Faso", "city": "Ouagadougou"},
    {"country": "Burundi", "city": "Bujumbura"},
    {"country": "Cambodia", "city": "Phnom Penh"},
    {"country": "Cameroon", "city": "Yaound"},
    {"country": "Canada", "city": "Ottawa"},
    {"country": "Cape Verde", "city": "Praia"},
    {"country": "Cayman Islands", "city": "George Town"},
    {"country": "Central African Republic", "city": "Bangui"},
    {"country": "Chad", "city": "N'Djam"},
    {"country": "Chile", "city": "Santiago de Chile"},
    {"country": "China", "city": "Peking"},
    {"country": "Christmas Island", "city": "Flying Fish Cove"},
    {"country": "Cocos (Keeling) Islands", "city": "West Island"},
    {"country": "Colombia", "city": "Santaf"},
    {"country": "Comoros", "city": "Moroni"},
    {"country": "Congo", "city": "Brazzaville"},
    {"country": "Congo, The Democratic Republic of the", "city": "Kinshasa"},
    {"country": "Cook Islands", "city": "Avarua"},
    {"country": "Costa Rica", "city": "San Jos"},
    {"country": "Ivory Coast", "city": "Yamoussoukro"},
    {"country": "Croatia", "city": "Zagreb"},
    {"country": "Cuba", "city": "Habana"},
    {"country": "Cyprus", "city": "Nicosia"},
    {"country": "Czech Republic", "city": "Praha"},
    {"country": "Denmark", "city": "Copenhagen"},
    {"country": "Djibouti", "city": "Djibouti"},
    {"country": "Dominica", "city": "Roseau"},
    {"country": "Dominican Republic", "city": "Santo Domingo de Guzm"},
    {"country": "East Timor", "city": "Dili"},
    {"country": "Ecuador", "city": "Quito"},
    {"country": "Egypt", "city": "Cairo"},
    {"country": "England", "city": "London"},
    {"country": "El Salvador", "city": "San Salvador"},
    {"country": "Equatorial Guinea", "city": "Malabo"},
    {"country": "Eritrea", "city": "Asmara"},
    {"country": "Estonia", "city": "Tallinn"},
    {"country": "Ethiopia", "city": "Addis Abeba"},
    {"country": "Falkland Islands", "city": "Stanley"},
    {"country": "Faroe Islands", "city": "Tórshavn"},
    {"country": "Fiji", "city": "Suva"},
    {"country": "Finland", "city": "Helsinki [Helsingfors]"},
    {"country": "France", "city": "Paris"},
    {"country": "French Guiana", "city": "Cayenne"},
    {"country": "French Polynesia", "city": "Papeete"},
    {"country": "French Southern territories", "city": null},
    {"country": "Gabon", "city": "Libreville"},
    {"country": "Gambia", "city": "Banjul"},
    {"country": "Georgia", "city": "Tbilisi"},
    {"country": "Germany", "city": "Berlin"},
    {"country": "Ghana", "city": "Accra"},
    {"country": "Gibraltar", "city": "Gibraltar"},
    {"country": "Greece", "city": "Athenai"},
    {"country": "Greenland", "city": "Nuuk"},
    {"country": "Grenada", "city": "Saint George's"},
    {"country": "Guadeloupe", "city": "Basse-Terre"},
    {"country": "Guam", "city": "Aga"},
    {"country": "Guatemala", "city": "Ciudad de Guatemala"},
    {"country": "Guinea", "city": "Conakry"},
    {"country": "Guinea-Bissau", "city": "Bissau"},
    {"country": "Guyana", "city": "Georgetown"},
    {"country": "Haiti", "city": "Port-au-Prince"},
    {"country": "Heard Island and McDonald Islands", "city": null},
    {"country": "Holy See (Vatican City State)", "city": "Citt"},
    {"country": "Honduras", "city": "Tegucigalpa"},
    {"country": "Hong Kong", "city": "Victoria"},
    {"country": "Hungary", "city": "Budapest"},
    {"country": "Iceland", "city": "Reykjav"},
    {"country": "India", "city": "New Delhi"},
    {"country": "Indonesia", "city": "Jakarta"},
    {"country": "Iran", "city": "Tehran"},
    {"country": "Iraq", "city": "Baghdad"},
    {"country": "Ireland", "city": "Dublin"},
    {"country": "Israel", "city": "Jerusalem"},
    {"country": "Italy", "city": "Roma"},
    {"country": "Jamaica", "city": "Kingston"},
    {"country": "Japan", "city": "Tokyo"},
    {"country": "Jordan", "city": "Amman"},
    {"country": "Kazakhstan", "city": "Astana"},
    {"country": "Kenya", "city": "Nairobi"},
    {"country": "Kiribati", "city": "Bairiki"},
    {"country": "Kuwait", "city": "Kuwait"},
    {"country": "Kyrgyzstan", "city": "Bishkek"},
    {"country": "Laos", "city": "Vientiane"},
    {"country": "Latvia", "city": "Riga"},
    {"country": "Lebanon", "city": "Beirut"},
    {"country": "Lesotho", "city": "Maseru"},
    {"country": "Liberia", "city": "Monrovia"},
    {"country": "Libyan Arab Jamahiriya", "city": "Tripoli"},
    {"country": "Liechtenstein", "city": "Vaduz"},
    {"country": "Lithuania", "city": "Vilnius"},
    {"country": "Luxembourg", "city": "Luxembourg [Luxemburg/L"},
    {"country": "Macao", "city": "Macao"},
    {"country": "Macedonia", "city": "Skopje"},
    {"country": "Madagascar", "city": "Antananarivo"},
    {"country": "Malawi", "city": "Lilongwe"},
    {"country": "Malaysia", "city": "Kuala Lumpur"},
    {"country": "Maldives", "city": "Male"},
    {"country": "Mali", "city": "Bamako"},
    {"country": "Malta", "city": "Valletta"},
    {"country": "Marshall Islands", "city": "Dalap-Uliga-Darrit"},
    {"country": "Martinique", "city": "Fort-de-France"},
    {"country": "Mauritania", "city": "Nouakchott"},
    {"country": "Mauritius", "city": "Port-Louis"},
    {"country": "Mayotte", "city": "Mamoutzou"},
    {"country": "Mexico", "city": "Ciudad de M"},
    {"country": "Micronesia", "city": "Palikir"},
    {"country": "Moldova", "city": "Chisinau"},
    {"country": "Monaco", "city": "Monaco-Ville"},
    {"country": "Mongolia", "city": "Ulan Bator"},
    {"country": "Montserrat", "city": "Plymouth"},
    {"country": "Morocco", "city": "Rabat"},
    {"country": "Mozambique", "city": "Maputo"},
    {"country": "Myanmar", "city": "Rangoon (Yangon)"},
    {"country": "Namibia", "city": "Windhoek"},
    {"country": "Nauru", "city": "Yaren"},
    {"country": "Nepal", "city": "Kathmandu"},
    {"country": "Netherlands", "city": "Amsterdam"},
    {"country": "Netherlands Antilles", "city": "Willemstad"},
    {"country": "New Caledonia", "city": "Noum"},
    {"country": "New Zealand", "city": "Wellington"},
    {"country": "Nicaragua", "city": "Managua"},
    {"country": "Niger", "city": "Niamey"},
    {"country": "Nigeria", "city": "Abuja"},
    {"country": "Niue", "city": "Alofi"},
    {"country": "Norfolk Island", "city": "Kingston"},
    {"country": "North Korea", "city": "Pyongyang"},
    {"country": "Northern Ireland", "city": "Belfast"},
    {"country": "Northern Mariana Islands", "city": "Garapan"},
    {"country": "Norway", "city": "Oslo"},
    {"country": "Oman", "city": "Masqat"},
    {"country": "Pakistan", "city": "Islamabad"},
    {"country": "Palau", "city": "Koror"},
    {"country": "Palestine", "city": "Gaza"},
    {"country": "Panama", "city": "Ciudad de Panam"},
    {"country": "Papua New Guinea", "city": "Port Moresby"},
    {"country": "Paraguay", "city": "Asunción"},
    {"country": "Peru", "city": "Lima"},
    {"country": "Philippines", "city": "Manila"},
    {"country": "Pitcairn", "city": "Adamstown"},
    {"country": "Poland", "city": "Warszawa"},
    {"country": "Portugal", "city": "Lisboa"},
    {"country": "Puerto Rico", "city": "San Juan"},
    {"country": "Qatar", "city": "Doha"},
    {"country": "Reunion", "city": "Saint-Denis"},
    {"country": "Romania", "city": "Bucuresti"},
    {"country": "Russian Federation", "city": "Moscow"},
    {"country": "Rwanda", "city": "Kigali"},
    {"country": "Saint Helena", "city": "Jamestown"},
    {"country": "Saint Kitts and Nevis", "city": "Basseterre"},
    {"country": "Saint Lucia", "city": "Castries"},
    {"country": "Saint Pierre and Miquelon", "city": "Saint-Pierre"},
    {"country": "Saint Vincent and the Grenadines", "city": "Kingstown"},
    {"country": "Samoa", "city": "Apia"},
    {"country": "San Marino", "city": "San Marino"},
    {"country": "Sao Tome and Principe", "city": "S"},
    {"country": "Saudi Arabia", "city": "Riyadh"},
    {"country": "Scotland", "city": "Edinburgh"},
    {"country": "Senegal", "city": "Dakar"},
    {"country": "Seychelles", "city": "Victoria"},
    {"country": "Sierra Leone", "city": "Freetown"},
    {"country": "Singapore", "city": "Singapore"},
    {"country": "Slovakia", "city": "Bratislava"},
    {"country": "Slovenia", "city": "Ljubljana"},
    {"country": "Solomon Islands", "city": "Honiara"},
    {"country": "Somalia", "city": "Mogadishu"},
    {"country": "South Africa", "city": "Pretoria"},
    {"country": "South Georgia and the South Sandwich Islands", "city": null},
    {"country": "South Korea", "city": "Seoul"},
    {"country": "South Sudan", "city": "Juba"},
    {"country": "Spain", "city": "Madrid"},
    {"country": "Sri Lanka", "city": "Colombo"},
    {"country": "Sudan", "city": "Khartum"},
    {"country": "Suriname", "city": "Paramaribo"},
    {"country": "Svalbard and Jan Mayen", "city": "Longyearbyen"},
    {"country": "Swaziland", "city": "Mbabane"},
    {"country": "Sweden", "city": "Stockholm"},
    {"country": "Switzerland", "city": "Bern"},
    {"country": "Syria", "city": "Damascus"},
    {"country": "Taiwan", "city": "Taipei"},
    {"country": "Tajikistan", "city": "Dushanbe"},
    {"country": "Tanzania", "city": "Dodoma"},
    {"country": "Thailand", "city": "Bangkok"},
    {"country": "Togo", "city": "Lom"},
    {"country": "Tokelau", "city": "Fakaofo"},
    {"country": "Tonga", "city": "Nuku'alofa"},
    {"country": "Trinidad and Tobago", "city": "Port-of-Spain"},
    {"country": "Tunisia", "city": "Tunis"},
    {"country": "Turkey", "city": "Ankara"},
    {"country": "Turkmenistan", "city": "Ashgabat"},
    {"country": "Turks and Caicos Islands", "city": "Cockburn Town"},
    {"country": "Tuvalu", "city": "Funafuti"},
    {"country": "Uganda", "city": "Kampala"},
    {"country": "Ukraine", "city": "Kyiv"},
    {"country": "United Arab Emirates", "city": "Abu Dhabi"},
    {"country": "United Kingdom", "city": "London"},
    {"country": "United States", "city": "Washington"},
    {"country": "United States Minor Outlying Islands", "city": null},
    {"country": "Uruguay", "city": "Montevideo"},
    {"country": "Uzbekistan", "city": "Tashkent"},
    {"country": "Vanuatu", "city": "Port-Vila"},
    {"country": "Venezuela", "city": "Caracas"},
    {"country": "Vietnam", "city": "Hanoi"},
    {"country": "Virgin Islands, British", "city": "Road Town"},
    {"country": "Virgin Islands, U.S.", "city": "Charlotte Amalie"},
    {"country": "Wales", "city": "Cardiff"},
    {"country": "Wallis and Futuna", "city": "Mata-Utu"},
    {"country": "Western Sahara", "city": "El-Aai"},
    {"country": "Yemen", "city": "Sanaa"},
    {"country": "Yugoslavia", "city": "Beograd"},
    {"country": "Zambia", "city": "Lusaka"},
    {"country": "Zimbabwe", "city": "Harare"}
];

let foundCity = 0;

for (let i = 0; i < countries.length; i++) {

    for (let j = 0; j < capitals.length; j++) {

        if (countries[i]["name"] === capitals[j]["country"]) {

            countries[i]["city"] = capitals[j]["city"];

            foundCity++;
        }
    }
}

for (let i = 0; i < countries.length; i++) {

    for (let j = 0; j < climate.countries.length; j++) {

        if (countries[i]["name"] === climate.countries[j]["country"]) {

            // console.log(countries[i]["Code"]);

            countries[i]["temperature"] = (climate.countries[j]["monthlyAvg"][1]["high"] + climate.countries[j]["monthlyAvg"][1]["low"])/2;
        }
    }
}

console.log("Countries code: " + countries.length);

console.log("With city: " + foundCity);

//visa