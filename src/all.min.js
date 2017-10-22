'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GMap = function () {
  function GMap() {
    _classCallCheck(this, GMap);

    var t = this;
    t.mapContainer = $('#map')[0];
    t.counter = 3;
    t.villes = [{ numero: 1, reponses: ['paris'], latitude: 48.859741, longitude: 2.334076, zoom: 6, type: 'roadmap' }, { numero: 2, reponses: ['mexico'], latitude: 21.6132402, longitude: -98.3526046, zoom: 4, type: 'roadmap' }, { numero: 3, reponses: ['aix-les-bains', 'aix les bains'], latitude: 45.6915143, longitude: 5.9113332, zoom: 2, type: 'roadmap' }, { numero: 4, reponses: ['aix-les-bains', 'aix les bains'], latitude: 45.6915143, longitude: 5.9113332, zoom: 21, type: 'roadmap' }, { numero: 5, reponses: ['aix-les-bains', 'aix les bains'], latitude: 45.6915143, longitude: 5.9113332, zoom: 21, type: 'roadmap' }];
    t.indice = $('form button#indice-container');
    t.valider = $('form button#valider-container');
    t.popUp = $('#pop-up');
    t.indiceHTML;
  }

  _createClass(GMap, [{
    key: 'init',
    value: function init() {
      var t = this;
      t.newMap(t.counter);
      t.indice.on('click', t.indiceClick.bind(t));
      t.popUp.on('click', t.indiceClick.bind(t));
      t.valider.on('click', t.validerClick.bind(t));
    }
  }, {
    key: 'newMap',
    value: function newMap(numero) {
      console.log('in');
      // récupère les variables
      var t = this;
      var centreLat = void 0;
      var centreLong = void 0;
      var zoomControl = true;
      var scaleControl = true;
      var streetViewControl = true;
      var rotateControl = true;
      var fullscreenControl = true;
      var mapTypeControl = false;
      var optionsMap = void 0;
      // personnalise la carte en fonction des villes
      switch (t.villes[numero].numero) {
        case 1:
          centreLat = 47.0780327;
          centreLong = 2.3632842;
          zoomControl = false;
          scaleControl = false;
          streetViewControl = false;
          rotateControl = false;
          fullscreenControl = false;
          mapTypeControl = false;
          optionsMap = [{
            "featureType": "administrative",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
              "visibility": "off"
            }]
          }];
          t.indiceHTML = '<p>Où se trouve la Tour Eiffel ?</p>';
          break;
        case 2:
          centreLat = t.villes[numero].latitude;
          centreLong = t.villes[numero].longitude;
          zoomControl = false;
          scaleControl = false;
          streetViewControl = false;
          rotateControl = false;
          fullscreenControl = false;
          mapTypeControl = false;
          optionsMap = [{
            "featureType": "administrative",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
              "visibility": "off"
            }]
          }];
          t.indiceHTML = '<p>Capital du Mexique.</p>';
          break;
        case 3:
          centreLat = t.villes[numero].latitude;
          centreLong = t.villes[numero].longitude;
          zoomControl = true;
          scaleControl = false;
          streetViewControl = false;
          rotateControl = false;
          fullscreenControl = false;
          mapTypeControl = false;
          optionsMap = [{
            "featureType": "administrative",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
              "visibility": "off"
            }]
          }];
          t.indiceHTML = '<p>Avez-vous remaquez les deux boutons en bas à droite de la carte ? Utilisez-les pour zoomer (+) et dézoomer (-) cette dernière</p>';
          break;
        case 4:
          centreLat = t.villes[numero].latitude;
          centreLong = t.villes[numero].longitude;
          zoomControl = true;
          scaleControl = false;
          streetViewControl = false;
          rotateControl = false;
          fullscreenControl = false;
          mapTypeControl = false;
          optionsMap = [{
            "featureType": "administrative",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
              "visibility": "off"
            }]
          }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
              "visibility": "off"
            }]
          }];
          t.indiceHTML = '<p>Avez-vous remaquez les deux boutons en bas à droite de la carte ? Utilisez-les pour zoomer (+) et dézoomer (-) cette dernière</p>';
          break;
        default:
          centreLat = t.villes[numero].latitude;
          centreLong = t.villes[numero].longitude;
        // TODO: mettre une carte par défault
      }
      var positionMap = new google.maps.LatLng(centreLat, centreLong);
      var positionMarker = new google.maps.LatLng(t.villes[numero].latitude, t.villes[numero].longitude);
      // créer la carte
      var map = new google.maps.Map(t.mapContainer, {
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
      var marker = new google.maps.Marker({
        position: positionMarker
      });
      marker.setMap(map);
    }
  }, {
    key: 'indiceClick',
    value: function indiceClick() {
      var t = this;
      $('#indice').empty();
      $('#indice').append(t.indiceHTML);
      $('#pop-up').toggleClass('opened');
    }
  }, {
    key: 'validerClick',
    value: function validerClick() {
      var t = this;
      var reponseContainer = $('#reponse');
      var reponse = reponseContainer.val().toLowerCase();
      if (reponse.length) {
        if ($.inArray(reponse, t.villes[t.counter].reponses) >= 0) {
          t.counter++;
          reponseContainer.val('');
          t.newMap(t.counter);
        } else {
          reponseContainer.effect('shake');
          setTimeout(function () {
            reponseContainer.val('');
          }, 500);
        }
      }
    }
  }]);

  return GMap;
}();

function website() {
  var gMap = new GMap();
  gMap.init();
}