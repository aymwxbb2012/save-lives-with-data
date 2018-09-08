

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
      strokeOpacity:0.8,
      strokeWeight:1.5,
      fillColor: '#fff',
      fillOpacity:0.1
    });

    var citymap = {
      "Aurukun" : {
        center: {
          lat: -13.35726,
          lng: 141.728066
        },
        "population": 467
      },
      "Balonne (S)": {
        center: {
          lat: -28.46460,
          lng: 148.189292
        },
        "population": 176
      },
      "Banana (S)": {
        center: {
          lat: -24.4728,
          lng: 150.1279
        },
        "population": 211
      },
      "Barcaldine (R)": {
        center: {
          lat: -23.55632,
          lng: 145.293339
        },
        "population": 137
      },
      "Barcoo (S)": {
        center: {
          lat: -25.03122,
          lng: 142.361338
        },
        "population": 153
      },
      "Blackall Tambo (R)": {
        center: {
          lat: -24.68263,
          lng: 145.846805
        },
        "population": 153
      },
      "Boulia (S)": {
        center: {
          lat: -22.91130,
          lng: 139.910444
        },
        "population": 239
      },
      "Brisbane (C)": {
        center: {
          lat: -27.46977,
          lng: 153.025124
        },
        "population": 159
      },
      "Bulloo (S)": {
        center: {
          lat: -27.81665,
          lng: 142.021542
        },
        "population": 68
      },
      "Bundaberg (R)": {
        center: {
          lat: -24.86669736,
          lng: 152.350914
        },
        "population": 181
      },
      "Burdekin (S)": {
        center: {
          lat: -19.52271,
          lng: 147.462726
        },
        "population": 175
      },
      "Burke (S)": {
        center: {
          lat: -27.494574,
          lng: 153.032933
        },
        "population": 219
      },
      "Cairns (R)": {
        center: {
          lat: -16.9205,
          lng: 145.7719
        },
        "population": 183
      },
      "Carpentaria (S)": {
        center: {
          lat: -17.950579,
          lng: 140.095206
        },
        "population": 285
      },
      "Cassowary Coast (R)": {
        center: {
          lat: -17.97393,
          lng: 146.382423
        },
        "population": 192
      },
      "Central Highlands (R)": {
        center: {
          lat: -24.03304,
          lng: 148.737363
        },
        "population": 192
      },
      "Charters Towers (R)": {
        center: {
          lat: -20.07696,
          lng: 146.260136
        },
        "population": 162
      },
      "Cherbourg (S)": {
        center: {
          lat: -26.2903,
          lng: 151.954
        },
        "population": 62
      },
      "Cloncurry (S)": {
        center: {
          lat: -20.70639,
          lng: 140.509326
        },
        "population": 250
      },
      "Cook (S)": {
        center: {
          lat: -27.213527,
          lng: 152.995112
        },
        "population": 332
      },
      "Croydon (S)": {
        center: {
          lat: -18.20607,
          lng: 142.243573
        },
        "population": 391
      },
      "Diamantina (S)": {
        center: {
          lat: -24.84262,
          lng: 139.691137
        },
        "population": 0
      },
      "Doomadgee (S)": {
        center: {
          lat: -17.94077,
          lng: 138.82695
        },
        "population": 0
      },
      "Etheridge (S)": {
        center: {
          lat: -19.279066,
          lng: 146.751251
        },
        "population": 0
      },
      "Flinders (S)": {
        center: {
          lat: -26.768638,
          lng: 144.14
        },
        "population": 146
      },
      "Fraser Coast (R)": {
        center: {
          lat: -25.48847,
          lng: 152.732388
        },
        "population": 184
      },
      "Gladstone (R)": {
        center: {
          lat: -23.8432,
          lng: 151.2561
        },
        "population": 203
      },
      "Gold Coast (C)": {
        center: {
          lat: -28.0024,
          lng: 153.4146
        },
        "population": 151
      },
      "Goondiwindi (R)": {
        center: {
          lat: -28.53870,
          lng: 150.298288
        },
        "population": 179
      },
      "Gympie (R)": {
        center: {
          lat: -26.19428,
          lng: 152.67327
        },
        "population": 173
      },
      "Hinchinbrook (S)": {
        center: {
          lat: -18.3362,
          lng: 146.225881
        },
        "population": 163
      },
      "Hope Vale (S)": {
        center: {
          lat: -15.29419,
          lng: 145.108237
        },
        "population": 150
      },
      "Ipswich (C)": {
        center: {
          lat: -27.623,
          lng: 152.76
        },
        "population": 0
      },
      "Isaac (R)": {
        center: {
          lat: -27.87993,
          lng: 153.280787
        },
        "population": 184
      },
      "Kowanyama (S)": {
        center: {
          lat: -15.36677,
          lng: 141.767797
        },
        "population": 279
      },
      "Lockhart River (S)": {
        center: {
          lat: -12.78454,
          lng: 143.343015
        },
        "population": 230
      },
      "Lockyer Valley (R)": {
        center: {
          lat: -27.62784,
          lng: 152.168857
        },
        "population": 150
      },
      "Logan (C)": {
        center: {
          lat: -27.64449,
          lng: 153.109194
        },
        "population": 152
      },
      "Longreach (R)": {
        center: {
          lat: -23.44219,
          lng: 144.255504
        },
        "population": 188
      },
      "Mackay (R)": {
        center: {
          lat: -21.142,
          lng: 149.1865
        },
        "population": 268
      },
      "Mapoon (S)": {
        center: {
          lat: -11.86318,
          lng: 142.183069
        },
        "population": 196
      },
      "Maranoa (R)": {
        center: {
          lat: -26.57120,
          lng: 148.007192
        },
        "population": 189
      },
      "McKinlay (S)": {
        center: {
          lat: -21.2713,
          lng: 141.2909
        },
        "population": 0
      },
      "Moreton Bay (R)": {
        center: {
          lat: -27.09460,
          lng: 152.920592
        },
        "population": 170
      },
      "Mornington (S)": {
        center: {
          lat: -20.734,
          lng: 139.496
        },
        "population": 341
      },
      "Mount Isa (C)": {
        center: {
          lat: -20.729,
          lng: 139.4932
        },
        "population": 278
      },
      "Murweh (S)": {
        center: {
          lat: -26.930774,
          lng: 145.782797
        },
        "population": 198
      },
      "Napranum (S)": {
        center: {
          lat: -12.681737,
          lng: 141.148769
        },
        "population": 164
      },
      "North Burnett (R)": {
        center: {
          lat: -25.41958,
          lng: 141.14032
        },
        "population": 187
      },
      "Northern Peninsula Area (R)": {
        center: {
          lat: -10.98066,
          lng: 142.318772
        },
        "population": 103
      },
      "Palm Island (S)": {
        center: {
          lat: -18.7503,
          lng: 146.6
        },
        "population": 181
      },
      "Paroo (S)": {
        center: {
          lat: -27.99693,
          lng: 145.846805
        },
        "population": 150
      },
      "Pormpuraaw (S)": {
        center: {
          "lan": -14.90004,
          lng: 141.620242
        },
        "population": 0
      },
      "Quilpie (S)": {
        center: {
          lat: -26.616667,
          lng: 144.266667
        },
        "population": 124
      },
      "Redland (C)": {
        center: {
          lat: -27.596058,
          lng: 153.101682
        },
        "population": 162
      },
      "Richmond (S)": {
        center: {
          lat: -20.7287,
          lng: 143.1414
        },
        "population": 276
      },
      "Rockhampton (R)": {
        center: {
          lat: -23.37850,
          lng: 150.503634
        },
        "population": 193
      },
      "Scenic Rim (R)": {
        center: {
          lat: -28.09462,
          lng: 152.732388
        },
        "population": 159
      },
      "Somerset (R)": {
        center: {
          lat: -10.74361,
          lng: 142.59167
        },
        "population": 202
      },
      "South Burnett (R)": {
        center: {
          lat: -26.47021,
          lng: 151.607058
        },
        "population": 150
      },
      "Southern Downs (R)": {
        center: {
          lat: -28.2754,
          lng: 151.981391
        },
        "population": 186
      },
      "Sunshine Coast (R)": {
        center: {
          lat: -26.6,
          lng: 153.066667
        },
        "population": 162
      },
      "Tablelands (R)": {
        center: {
          lat: -26.160613,
          lng: 151.938183
        },
        "population": 159
      },
      "Toowoomba (R)": {
        center: {
          lat: -27.55982,
          lng: 151.95067
        },
        "population": 162
      },
      "Torres (S)": {
        center: {
          lat: -10.59470,
          lng: 143.045893
        },
        "population": 360
      },
      "Torres Strait Island (R)": {
        center: {
          lat: -9.98155,
          lng: 142.555218
        },
        "population": 255
      },
      "Townsville (C)": {
        center: {
          lat: -19.24931,
          lng: 146.815373
        },
        "population": 181
      },
      "Weipa (T)": {
        center: {
          lat: -12.64929,
          lng: 141.84699
        },
        "population": 121
      },
      "Western Downs (R)": {
        center: {
          lat: -27.10241,
          lng: 150.211075
        },
        "population": 150
      },
      "Whitsunday (R)": {
        center: {
          lat: -20.34410,
          lng: 148.189292
        },
        "population": 145
      },
      "Winton (S)": {
        center: {
          lat: -22.3845,
          lng: 143.0365
        },
        "population": 181
      },
      "Woorabinda (S)": {
        center: {
          lat: -24.13265,
          lng: 149.456709
        },
        "population": 128
      },
      "Wujal Wujal (S)": {
        center: {
          lat: -15.94312,
          lng: 145.320592
        },
        "population": 273
      },
      "Yarrabah (S)": {
        center: {
          lat: -16.9280,
          lng: 145.872016
        },
        "population": 0
      },
      "Qld Unknown": {
        center: {
          lat: -20.91757,
          lng: 142.702796
        },
        "population": 331
      }
      };

    for (var city in citymap) {
      // Add the circle for this city to the map.
      var cityCircle = new google.maps.Circle({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: citymap[city].center,
        radius: Math.sqrt(citymap[city].population) * 2000,
        name: city
      });

      cityCircle.addListener('click', function() {
        new ModalHandler();

        var modalClassObj = document.querySelector(".modal--lec");
        console.log(modalClassObj);
        if(modalClassObj){
            var modalClassWrap = document.querySelector(".modal__wrap");
            modalClassWrap.innerHTML= "<h3>" + this.name + "</h3><p> Deaths: " + citymap[this.name].population + "</p>";
        }

      });

      // cityCircle.addListener('mouseover', function(event) {
      //     this.data.revertStyle();
      //     this.data.overrideStyle(event.feature, {strokeWeight: 8});
      // });
      //
      // cityCircle.addListener('mouseout', function(event) {
      //     this.data.revertStyle();
      // });


    }
  }



  // end google maps
