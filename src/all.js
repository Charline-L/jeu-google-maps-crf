'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GMap = function () {
  function GMap() {
    _classCallCheck(this, GMap);

    var t = this;
    t.mapContainer = $('#map')[0];
    t.counter = 4;
    t.villes = [{
      numero: 1,
      reponses: ['paris'],
      latitude: 48.859741,
      longitude: 2.334076,
      zoom: 6,
      type: 'roadmap',
      titre: 'Quelle est la ville montrée sur la carte ?',
      indice: '<p>Il y a tout ce que vous voulez, aux champs Élysée</p>'
    }, {
      numero: 2,
      reponses: ['mexico'],
      latitude: 21.6132402,
      longitude: -98.3526046,
      zoom: 4, type: 'roadmap',
      titre: 'Quelle est la ville montrée sur la carte ?',
      indice: '<p>La capitale</p>'
    }, {
      numero: 3,
      reponses: ['aix-les-bains', 'aix les bains'],
      latitude: 45.6915143,
      longitude: 5.9113332,
      zoom: 3,
      type: 'roadmap',
      titre: 'Quelle est la ville montrée sur la carte ?',
      indice: '<p>Aidez-vous des boutons de contrôle<img src="img/zoom.png" alt="bouton zoom google exemple"/> de la carte pour mieux vous repérer.</br> Ils sont situés en bas à droite de cette dernière.</p>'
    }, {
      numero: 4,
      reponses: ['aix-les-bains', 'aix les bains'],
      latitude: 45.6915143,
      longitude: 5.9113332,
      zoom: 21,
      type: 'roadmap',
      titre: 'Quelle est la ville montrée sur la carte ?',
      indice: '<p>Aidez-vous des boutons de contrôle<img src="img/zoom.png" alt="bouton zoom google exemple"/> de la carte pour mieux vous repérer.</br> Ils sont situés en bas à droite de cette dernière.</p>'
    }, {
      numero: 5,
      reponses: ['bonifacio'],
      latitude: 41.390482,
      longitude: 9.166110,
      zoom: 6,
      type: 'roadmap',
      titre: 'Quelle est la ville montrée sur la carte ?',
      indice: '<p>Vous ne trouvez pas le pointeur ? Ce dernier est caché... Pour le retrouver déplacer la carte en maintenant le clic et en déplaçant la souris. Et n\'oubiez pas d\'utliser les boutons de zoom et dé-zoom</p>'
    }];
    t.valider = $('form button#valider-container');
    t.popUp = $('#pop-up');
    t.indiceHTML = $('#indice');
    t.titre = $('#titreQuest');
    t.result = $('#result');
    t.next = $('#next');
    t.reponseContainer = $('#reponse');
  }

  _createClass(GMap, [{
    key: 'init',
    value: function init() {
      var t = this;
      t.next.on('click', t.nextQuestion.bind(t));
      t.newMap(t.counter);
      t.valider.on('click', t.validerClick.bind(t));
    }
  }, {
    key: 'newMap',
    value: function newMap(numero) {
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
      t.titre.text(t.villes[numero].titre);
      t.indiceHTML.html(t.villes[numero].indice);
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
          t.indiceHTML.html();
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
          break;
        case 5:
          centreLat = 48.859741;
          centreLong = 2.334076;
          zoomControl = true;
          scaleControl = false;
          streetViewControl = false;
          rotateControl = false;
          fullscreenControl = false;
          mapTypeControl = false;
          optionsMap = [
          // {
          //   "featureType": "administrative.locality",
          //   "elementType": "labels.text",
          //   "stylers": [
          //     {
          //       "visibility": "off"
          //     }
          //   ]
          // },
          {
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
    key: 'validerClick',
    value: function validerClick() {
      var t = this;
      var reponse = t.reponseContainer.val().toLowerCase();
      if (reponse.length) {
        if ($.inArray(reponse, t.villes[t.counter].reponses) >= 0) {
          t.counter++;
          t.valider.hide();
          t.next.show();
          t.result.show();
        } else {
          t.reponseContainer.effect('shake');
          setTimeout(function () {
            t.reponseContainer.val('');
          }, 500);
        }
      }
    }
  }, {
    key: 'nextQuestion',
    value: function nextQuestion() {
      var t = this;
      t.reponseContainer.val('');
      t.next.hide();
      t.result.hide();
      t.valider.show();
      t.newMap(t.counter);
    }
  }]);

  return GMap;
}();

function website() {
  var gMap = new GMap();
  gMap.init();
}