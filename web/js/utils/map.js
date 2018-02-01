let map;

let world_geometry;

let region;

function initMap() {

    let mapOptions;

    let mapCentre;

    if (localStorage.getItem("mapLat") !== null &&
        localStorage.getItem("mapLng") !== null &&
        localStorage.getItem("mapZoom") !== null) {

        mapOptions = {
            center: new google.maps.LatLng(localStorage.mapLat,localStorage.mapLng),
            zoom: parseInt(localStorage.mapZoom),
            mapTypeId: 'mapStyle',
            scaleControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true
        };

        // console.log(mapOptions)

    } else {

        console.log("new localStorage mapOptions");

        //Choose some default options
        mapOptions = {
            center: {lat: 59.9000, lng: 30.3000},
            zoom: 5,
            mapTypeId: 'mapStyle',
            scaleControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: true
        };
    }

    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    map.mapTypes.set('mapStyle', new google.maps.StyledMapType(mapStyle, { name: 'Map style' }));

    google.maps.event.addListener(map, "center_changed", function() {

        //Set local storage variables.
        mapCentre = map.getCenter();

        localStorage.setItem("mapLat", mapCentre.lat());
        localStorage.setItem("mapLng", mapCentre.lng());
        localStorage.setItem("mapZoom", map.getZoom());

        // console.log(localStorage)
    });

    google.maps.event.addListener(map, "zoom_changed", function() {

        //Set local storage variables.
        mapCentre = map.getCenter();

        localStorage.setItem("mapLat", mapCentre.lat());
        localStorage.setItem("mapLng", mapCentre.lng());
        localStorage.setItem("mapZoom", map.getZoom());
    });

    google.maps.event.addListener(map, "rightclick", function(event) {

        let lat = event.latLng.lat();
        let lng = event.latLng.lng();

        // populate yor box/field with lat, lng
        // alert("Lat=" + lat + "; Lng=" + lng);
        // openConstructor({lat: lat, lng: lng});
    });
}

function selectCountries(selected) {

    // console.log(selected.length);

    let whereString = "";

    selected.forEach(function (item) {

        if ((item['weather'] && parseInt(item['weather']['temperature']) > 0 && parseInt(item['weather']['temperature']) < 25) || !item['weather'])
        whereString += "'" + item['code'] + "', ";
    });

    whereString = whereString.slice(0, -2);

    // console.log(whereString);

    world_geometry = new google.maps.FusionTablesLayer({

        query: {
            select: 'geometry',
            from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk',
            where: "ISO_2DIGIT IN (" + whereString + ")"
        },
        map: map,
        suppressInfoWindows: true
    });

    google.maps.event.addListener(world_geometry, "click", function(event) {

        console.log(event);
    });
}

function openConstructor(region) {

    this.region = region;

    document.getElementById('constructor').style.display = 'block';
}





//





function saveMarker() {

    let fields = document.getElementById('constructor').getElementsByClassName('field');

    let title = fields[0].innerText;
    let answer = fields[1].innerText;

    document.getElementById('constructor').style.display = 'none';

    console.log(title + " " + answer + " " + this.region);

    $.get("question/create?title=" + title +
        "&answer=" + answer +
        "&lat=" + this.region.lat +
        "&lng=" + this.region.lng, function( data ) {

    });

    createMarker(this.region);
}

function closeMarker() {
    document.getElementById('constructor').style.display = 'none';
}

function createMarker(question) {

    let region = {lat: question['lat'], lng: question['lng']}

    let image = {
        url: "",
        // This marker is 20 pixels wide by 32 pixels high.
        // size: new google.maps.Size(250, 250),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(50, 50),

        scaledSize: new google.maps.Size(100, 100)
    };

    let marker = new google.maps.Marker({

        position: region,
        map: map,
        // label: 'Label',
        // icon: image
    });

    marker.addListener('click', function() {
        // map.setZoom(8);
        // map.setCenter(marker.getPosition());
        // alert('marker click: ' + user.id)

        openAnswer(question);
    });
}

function openAnswer(question) {

    this.question = question;

    console.log(question.title);

    let fields = document.getElementById('answer').getElementsByClassName('field');

    fields[0].innerHTML = question.title;

    // document.getElementById("myspan").innerHTML = "sometext";
    // let answer = fields[1].innerText;

    document.getElementById('answer').style.display = 'block';

}

function closeAnswer() {
    document.getElementById('answer').style.display = 'none';
}

function saveAnswer() {

    //JS + JQ -_ -
    let answer = document.getElementById('answer').getElementsByClassName('field')[1].innerText;

    $.get("answer?question=" + this.question.id + "&answer=" + answer, function(data) {

        closeAnswer();
    });
}

function buildMap() {

    $.getJSON("questions", function(data) {

        for (let key in data) {

            console.log(data[key])

            createMarker(data[key])
        }

    });
}
