var map;

let styles = [
    {
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#f5f5f5"
        }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#616161"
        }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
        {
            "color": "#f5f5f5"
        }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#bdbdbd"
        }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#eeeeee"
        }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#757575"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#e5e5e5"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#9e9e9e"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#ffffff"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#757575"
        }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#dadada"
        }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#616161"
        }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#9e9e9e"
        }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#e5e5e5"
        }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#eeeeee"
        }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
        {
            "color": "#c9c9c9"
        }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
        {
            "color": "#9e9e9e"
        }
        ]
    },
];
 
function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -25.734968, lng: 134.489563},
        zoom: 4.1,
        fillColor: 'green',
        strokeWeight: 1,
        styles: styles,
       
      });

    map.data.loadGeoJson(
      'assets/js/aus_lga.geojson');

      
    map.data.setStyle({
        strokeColor: '#bfbfbf',
            strokeOpacity:.8,
            strokeWeight:1.5,
            fillColor: '#fff',
            fillOpacity:.1
    });

    var citymap = {
        darwin: {
          center: {lat: -12.4628, lng: 130.8418},
          population: 30000
        },
        newyork: {
          center: {lat: 40.714, lng: -74.005},
          population: 8405837
        },
        losangeles: {
          center: {lat: 34.052, lng: -118.243},
          population: 3857799
        },
        vancouver: {
          center: {lat: 49.25, lng: -123.1},
          population: 603502
        }
      };

      for (var city in citymap) {
        // Add the circle for this city to the map.
        var cityCircle = new google.maps.Circle({
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: .35,
          map: map,
          center: citymap[city].center,
          radius: Math.sqrt(citymap[city].population) * 100,
          name: city
        });

        cityCircle.addListener('click', function() {
            alert(this.name);
        });

        cityCircle.addListener('mouseover', function(event) {
            this.data.revertStyle();
            this.data.overrideStyle(event.feature, {strokeWeight: 8});
        });

        cityCircle.addListener('mouseout', function(event) {
            this.data.revertStyle();
        });

        
      }
}

// end google maps
