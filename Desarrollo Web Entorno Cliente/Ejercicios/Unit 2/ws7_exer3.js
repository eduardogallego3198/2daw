function leafletMapa() {
    navigator.geolocation.getCurrentPosition(function (position){
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        mapa = new L.map('mapa').setView([latitud, longitud], 13);
        var marcador = L.marker([latitud, longitud], {draggable: true}).addTo(mapa);
        var geocodInv = L.esri.Geocoding.reverseGeocode();
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?'
                    +'access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets', 
            accessToken: 'pk.eyJ1IjoiZWdhbGxlZ28yZGF3IiwiYSI6ImNrMWRvaTVxbTA0ZzUzdG9naXU2OXVoM2oifQ.-fVRqFgCgF1RDnhgbGBGdw'
            }).addTo(mapa);
        geocodInv.latlng([latitud, longitud]).run (function (error, result) {
            marcador.bindPopup(result.address.Match_addr).openPopup();
        });
        marcador.on('drag', function(event) {
            var marcador = event.target;
            var position = marcador.getLatLng();
            latitud = position.coords.latitud;
            longitud = position.coords.longitude;
            marcador.setLatLng(position, {draggable: true});
            geocodInv.latlng([latitud, longitud]).run (function (error, result) {
                marcador.bindPopup(result.address.Match_addr).openPopup();
            });
            mapa.panTo(new L.latLng(latitud, longitud));
        });
        mapa.addLayer(marcador);
        
    });
}

leafletMapa();


