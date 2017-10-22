class GMap {

  constructor(){
    const t = this;
    t.mapContainer = $('#map')[0];
    t.counter= 3;
    t.villes = [
      {numero: 1, reponses: ['paris'], latitude: 48.859741, longitude: 2.334076, zoom: 6, type: 'roadmap'},
      {numero: 2, reponses: ['mexico'], latitude: 21.6132402, longitude: -98.3526046, zoom: 4, type: 'roadmap'},
      {numero: 3, reponses: ['aix-les-bains', 'aix les bains'], latitude: 45.6915143, longitude: 5.9113332, zoom: 2, type: 'roadmap'},
      {numero: 4, reponses: ['aix-les-bains', 'aix les bains'], latitude: 45.6915143, longitude: 5.9113332, zoom: 21, type: 'roadmap'},
      {numero: 5, reponses: ['aix-les-bains', 'aix les bains'], latitude: 45.6915143, longitude: 5.9113332, zoom: 21, type: 'roadmap'},
    ]
    t.indice= $('form button#indice-container');
    t.valider= $('form button#valider-container');
    t.popUp= $('#pop-up');
    t.indiceHTML;
  }

  init(){
    const t = this;
    t.newMap(t.counter);
    t.indice.on('click', t.indiceClick.bind(t));
    t.popUp.on('click', t.indiceClick.bind(t));
    t.valider.on('click', t.validerClick.bind(t));
  }

  newMap(numero){
    console.log('in');
    // récupère les variables
    const t = this;
    let centreLat;
    let centreLong;
    let zoomControl = true;
    let scaleControl = true;
    let streetViewControl = true;
    let rotateControl = true;
    let fullscreenControl = true;
    let mapTypeControl = false;
    let optionsMap;
    // personnalise la carte en fonction des villes
    switch (t.villes[numero].numero) {
      case 1:
        centreLat= 47.0780327;
        centreLong = 2.3632842;
        zoomControl = false;
        scaleControl = false;
        streetViewControl = false;
        rotateControl= false;
        fullscreenControl = false;
        mapTypeControl = false;
        optionsMap = [
          {
            "featureType": "administrative",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ];
        t.indiceHTML= '<p>Où se trouve la Tour Eiffel ?</p>';
        break;
      case 2:
        centreLat= t.villes[numero].latitude;
        centreLong = t.villes[numero].longitude;
        zoomControl = false;
        scaleControl = false;
        streetViewControl = false;
        rotateControl= false;
        fullscreenControl = false;
        mapTypeControl = false;
        optionsMap = [
          {
            "featureType": "administrative",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ];
        t.indiceHTML= '<p>Capital du Mexique.</p>';
        break;
      case 3:
        centreLat= t.villes[numero].latitude;
        centreLong = t.villes[numero].longitude;
        zoomControl = true;
        scaleControl = false;
        streetViewControl = false;
        rotateControl= false;
        fullscreenControl = false;
        mapTypeControl = false;
        optionsMap = [
          {
            "featureType": "administrative",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ];
        t.indiceHTML= '<p>Avez-vous remaquez les deux boutons en bas à droite de la carte ? Utilisez-les pour zoomer (+) et dézoomer (-) cette dernière</p>';
        break;
      case 4:
        centreLat= t.villes[numero].latitude;
        centreLong = t.villes[numero].longitude;
        zoomControl = true;
        scaleControl = false;
        streetViewControl = false;
        rotateControl= false;
        fullscreenControl = false;
        mapTypeControl = false;
        optionsMap = [
          {
            "featureType": "administrative",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ];
        t.indiceHTML= '<p>Avez-vous remaquez les deux boutons en bas à droite de la carte ? Utilisez-les pour zoomer (+) et dézoomer (-) cette dernière</p>';
        break;
      default:
        centreLat= t.villes[numero].latitude;
        centreLong= t.villes[numero].longitude;
        // TODO: mettre une carte par défault
    }
    const positionMap = new google.maps.LatLng( centreLat , centreLong );
    const positionMarker = new google.maps.LatLng( t.villes[numero].latitude , t.villes[numero].longitude );
    // créer la carte
    const map = new google.maps.Map(t.mapContainer, {
      center: positionMap,
      zoom: t.villes[numero].zoom,
      styles: optionsMap,
      mapTypeId: t.villes[numero].type,
      zoomControl: zoomControl,
      scaleControl: scaleControl,
      streetViewControl: streetViewControl,
      rotateControl: rotateControl,
      fullscreenControl: fullscreenControl,
      mapTypeControl: mapTypeControl
    });
    // créer le marker
    const marker =  new google.maps.Marker({
        position: positionMarker
    });
    marker.setMap(map);
  }

  indiceClick(){
    const t = this;
    $('#indice').empty();
    $('#indice').append(t.indiceHTML);
    $('#pop-up').toggleClass('opened');
  }

  validerClick(){
    const t = this;
    const reponseContainer= $('#reponse');
    const reponse = reponseContainer.val().toLowerCase();
    if (reponse.length){
      if ($.inArray(reponse, t.villes[t.counter].reponses) >= 0){
        t.counter++;
        reponseContainer.val('');
        t.newMap(t.counter);
      }
      else {
        reponseContainer.effect('shake');
        setTimeout(function(){
          reponseContainer.val('');
        }, 500);
      }
    }
  }
}
