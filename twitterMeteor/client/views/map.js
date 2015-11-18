//////// Map Display /////////


Template.map.created = function () {

};

Template.map.rendered = function () {

    $(window).resize(function () {
        var h = $(window).height(),
            offsetTop = 90; //Determines the top offset
        $('#map_canvas').css('height', (h - offsetTop));
    }).resize();

    if (!map) {
        initialize($("#map_canvas")[0], [0, -15.7014212], 2);
    }
}

var map, markers = [];

var initialize = function (element, centroid, zoom, features) {
    map = L.map(element, {
        scrollWheelZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        touchZoom: true
    }).setView(new L.latLng(centroid[0], centroid[1]), zoom);

    L.tileLayer('https://{s}.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={AT}', {
        id: 'valhalarising.m4ak1im1',
        AT: 'pk.eyJ1IjoidmFsaGFsYXJpc2luZyIsImEiOiJpU0RHQ1dVIn0.E73QRCN8TMEiE8uV4t_img'
    }).addTo(map);

    map.attributionControl.setPrefix('');

    var attribution = new L.Control.Attribution();
    attribution.addAttribution("Map tiles by <a href='http://stamen.com'>Stamen Design</a> under <a href='creativecommons.org/licenses/by/3.0'>CC by 3.0</a>");
    attribution.addAttribution("Data by <a href='http://openstreetmap.org'>OpenStreetMap</a> under <a href='http://creativecommons.org/licenses/by-sa/3.0'>CC BY SA</a>.");

    map.addControl(attribution);
}