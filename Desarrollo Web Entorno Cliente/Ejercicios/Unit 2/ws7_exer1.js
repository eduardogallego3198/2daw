function geoLocalizacion() {
    let geoLoc = navigator.geolocation;
    if (geoLoc)
        geoLoc.getCurrentPosition(function(position) {
            const latitud = position.coords.latitude;
            const longitud = position.coords.longitude;
            document.write("Posición actual: " + latitud + ", " + longitud);
        }, function() { 
            document.write("No se pudo obtener la ubicación."); 
        });
    else
        document.write("Geolocalización no disponible");
}

geoLocalizacion();