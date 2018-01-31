let array1 = "Абхазия,Азербайджан,Албания*,Антигуа и Барбуда,Аргентина,Армения,Багамские острова,Бангладеш,Барбадос,Бахрейн,Белоруссия,Босния и Герцеговина,Боливия**,Ботсвана,Бразилия,Бурунди,Вануату,Венесуэла,Восточный Тимор,Вьетнам,Гаити,Гайана,Гамбия,Гватемала,Гондурас,Гонконг,Гренада,Грузия,Джибути,Доминика,Доминикана,Египет,Замбия,Западное Самоа,Зимбабве,Израиль,Индия**,Индонезия,Иордания,Иран,Кабо-Верде,Казахстан,Камбоджа,Кения,Кипр*,Киргизия,Колумбия,Коморские острова,Коста-Рика,КНР (только о. Хайнань/Пекин/ Шанхай),Куба,Кувейт,Лаос,Ливан,Маврикий,Мадагаскар,Макао,Македония,Малайзия,Мальдивы,Марокко,Мексика,Микронезия,Мозамбик,Молдавия,Монголия,Мьянма*,Намибия,Науру,Непал,Никарагуа,ОАЭ,Острова Кука,Палау,Панама,Парагвай,Перу,Питкэрн,Сальвадор,Сан-Томе и Принсипи,Свазиленд,Северные Марианские острова,Сейшельские острова,Сент-Винсент и Гренадины,Сент-Люсия,Сент-Китс и Невис,Сербия,Сингапур,Сирия,Таджикистан,Таиланд,Танзания,Того,Тонга,Тувалу,Туркменистан,Тринидад и Тобаго,Тунис,Турция,Уганда,Узбекистан,Украина,Уругвай,Фиджи,Филиппины,ЦАР,Черногория,Чили,Шри-Ланка,Эквадор,Эритрея,Эфиопия,Южная Корея,Южная Осетия,ЮАР,Ямайка,";

let array2 = "Abkhazia, Azerbaijan, Albania *, Antigua and Barbuda, Argentina, Armenia, Bahamas, Bangladesh, Barbados, Bahrain, Belarus, Bosnia and Herzegovina, Bolivia **, Botswana, Brazil, Burundi, Vanuatu, Venezuela, East Timor, Vietnam, Haiti Guyana, Gambia, Guatemala, Honduras, Gambia, Grenada, Georgia, Djibouti, Dominica, Dominican Republic, Egypt, Eritrea, Ethiopia, Gambia, Haiti, Honduras, India, ** Indonesia, Kenya, Cyprus *, Kyrgyzstan, Colombia, Comoros, Costa Rica, China (only Hainan Island / Beijing / Shanghai), Cuba, Kuwait, Laos, Lebanon, Madagascar, Macau, Macedonia, Malaysia, Maldives, Morocco, Mexico, Micronesia, Mozambique, Moldova, Mongolia, Myanmar *, Namibia, Nauru, Nepal, Nicaragua, UAE, Cook Islands, Palau, Panama, Paraguay, Peru, Pitcairn, Salvador, Sao Tome and Principe, Swaziland, Northern Mariana Islands, Saint Lucia, Saint Vincent and the Grenadines, Saint Lucia, Saint Kitts and Nevis, Serbia, Singapore, Syria, Tajikistan, Thailand, Tanzania, Togo, Tonga, Tuvalu , Turkmenistan, Trinidad and Tobago, Tunisia, Turkey, Uganda, Uzbekistan, Ukraine, Uruguay, Fiji, Philippines, CAR, Montenegro, Chile, Sri Lanka, Eck Vador, Eritrea, Ethiopia, South Korea, South Ossetia, South Africa, Jamaica";

let visaFree = array2.split(", ");

let other = [];

let codes = [];

console.log(visaFree.length);

let found = 0;



for (let j = 0; j < visaFree.length; j++) {

    let isFound = false;

    let visaFreeOne = visaFree[j].replace("*", "").replace("*", "").trim();

    for (let i = 0; i < countries.length; i++) {

        if (countries[i]["Name"] === visaFreeOne) {
            // console.log(countries[i]["Code"]);

            codes.push(countries[i]["Code"]);
            found++;
            isFound = true;
        }

    }

    if (!isFound)
        other.push(visaFree[j]);

}



console.log(found)