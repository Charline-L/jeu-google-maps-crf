class GMap {

  constructor(){
    const t = this;
    t.map = $('#map');
    t.mapContainer = $('#map')[0];
    t.villes = [
      {
        numero: 1,
        reponses: ['paris'],
        latitude: 48.859741,
        longitude: 2.334076,
        zoom: 6,
        type: 'roadmap',
        titre: 'Quelle est la ville montrée sur la carte ?',
        indice: '<p>Il y a tout ce que vous voulez, aux champs Élysée</p>'
      },
      {
        numero: 2,
        reponses: ['mexico'],
        latitude: 21.6132402,
        longitude: -98.3526046,
        zoom: 4, type: 'roadmap',
        titre: 'Quelle est la ville montrée sur la carte ?',
        indice : '<p>La capitale</p>'
      },
      {
        numero: 3,
        reponses: ['aix-les-bains', 'aix les bains'],
        latitude: 45.6915143,
        longitude: 5.9113332,
        zoom: 3,
        type: 'roadmap',
        titre: 'Quelle est la ville montrée sur la carte ?',
        indice: '<p>Aidez-vous des boutons de contrôle<img src="img/zoom.png" alt="bouton zoom google exemple"/> de la carte pour mieux vous repérer.</br> Ils sont situés en bas à droite de cette dernière.</p>'
      },
      {
        numero: 4,
        reponses: ['aix-les-bains', 'aix les bains'],
        latitude: 45.6915143,
        longitude: 5.9113332,
        zoom: 21,
        type: 'roadmap',
        titre: 'Quelle est la ville montrée sur la carte ?',
        indice: '<p>Aidez-vous des boutons de contrôle<img src="img/zoom.png" alt="bouton zoom google exemple"/> de la carte pour mieux vous repérer.</br> Ils sont situés en bas à droite de cette dernière.</p>'
      },
      {
        numero: 5,
        reponses: ['bonifacio'],
        latitude: 41.390482,
        longitude: 9.166110,
        zoom: 6,
        type: 'roadmap',
        titre: 'Quelle est la ville montrée sur la carte ?',
        indice: '<p>Vous ne trouvez pas le pointeur ? Ce dernier est caché... Pour le retrouver déplacer la carte en maintenant le clic et en déplaçant la souris. Et n\'oubiez pas d\'utliser les boutons de zoom et dé-zoom</p>'
      },
      {
        numero: 6,
        reponses: ['coeur', 'de coeur', 'forme de coeur'],
        latitude: 41.3036712,
        longitude: -81.9013321,
        zoom: 17,
        type: 'satellite',
        titre: 'Quelle est la la forme du lac ?',
        indice: '<p>Bravo vous avez réussi la première partie. Maintenant vous découvrez un autre style de carte que l\'on appele satellite comme vous pouvez le voir en haut sur ce bouton <img src="img/type.png"/>. En vous déplaçant vers le nord vous trouverez un lac original, quelle est sa forme si spéciale ?</p>'
      },
      {
        numero: 7,
        reponses: ['la Tour Eiffel', 'Tour Eiffel', 'tour eiffel', 'la tour eiffel'],
        latitude: 48.8567099,
        longitude: 2.2965268,
        zoom: 17,
        type: 'satellite',
        titre: 'Quel est ce monument ?',
        indice: '<p>Vous avez découvert la carte satellite, voici maintenant un autre type de carte : le Street View. Il permet de se déplacer dans une carte comme si l\'on y était. Devant vous se retrouve un groupe de touristes, rapprochez-vous d\'eux et découvrez ce qu\'ils prennent en photo.</p>'
      },
      {
        numero: 8,
        reponses: ['machu picchu', 'le machu picchu'],
        latitude: -13.1630268,
        longitude: -72.5447604,
        zoom: 22,
        type: 'roadmap',
        titre: 'Où êtes vous ?',
        indice: '<p>Vous avez vu le déplacement dans une carte street view maintenant vous allez devoir y accéder. Pour cela attraper le petit bonhomme jaune en bas à droite de la carte <img src="img/bonhomme.png" />et déplacer le sur le pointer. </br>Déplacez-vous, profitez de la vue et devinez dans quel lieu magique êtes vous.</p>'
      },
      {
        numero: 9,
        reponses: ['la lune', 'lune', 'mercure', 'vénus', 'terre', 'la terre', 'station spatiale internationale', 'mars', 'cérès', 'io', 'europe', 'ganymède', 'mimas', 'encelade', 'dioné', 'rhéa', 'titan', 'japet', 'pluton'],
        latitude: 11.1191244,
        longitude: 8.5828951,
        zoom: 1,
        type: 'satellite',
        titre: 'Quelle est votre planète préférée ?',
        indice: '<p>Maintenant que vous êtes un professionnel de Google Maps, vous allez pouvoir voyager encore plus loin ! Pour cela cliquez sur la photo de l\'astronaut, un nouvel on glet va s\'ouvrir, allez sur ce dernier, passez la carte en satellite, et dézoomer au maximum. Un menu sur la gauche de votre écran va apparaître et vous pourrez visitez de nouvelles planètes en 3D ! </br>N\'oubliez pas de revenir sur cet onglet pour nous donner votre réponse.</p>'
      }
    ]
    t.valider= $('form button#valider-container');
    t.input= $('form input');
    t.popUp= $('#pop-up');
    t.indiceHTML= $('#indice');
    t.titre = $('#titreQuest');
    t.result = $('#result');
    t.next = $('#next');
    t.reponseContainer= $('#reponse');
    if (sessionStorage.getItem('count') === null) {
      sessionStorage.setItem('count', 0);
    }
  }

  init(){
    const t = this;
    t.next.on('click',t.nextQuestion.bind(t));
    t.newMap(sessionStorage.getItem('count'));
    t.valider.on('click', t.validerClick.bind(t));
    t.map.on('click', t.watcherMap.bind(t));
  }

  newMap(numero){
    // récupère les variables
    const t = this;
    let centreLat= t.villes[numero].latitude;
    let centreLong= t.villes[numero].longitude;
    let zoomControl = true;
    let scaleControl = true;
    let streetViewControl = true;
    let rotateControl = true;
    let fullscreenControl = true;
    let mapTypeControl = false;
    let optionsMap = [];
    t.titre.text(t.villes[numero].titre);
    t.indiceHTML.html(t.villes[numero].indice);
    t.input.removeAttr('disabled');
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
        break;
      case 2:
        zoomControl = false;
        scaleControl = false;
        streetViewControl = false;
        rotateControl= false;
        fullscreenControl = false;
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
        break;
      case 3:
        scaleControl = false;
        streetViewControl = false;
        rotateControl= false;
        fullscreenControl = false;
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
        break;
      case 4:
        scaleControl = false;
        streetViewControl = false;
        rotateControl= false;
        fullscreenControl = false;
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
        break;
      case 5:
        centreLat= 51.5285578;
        centreLong = -0.2420221;
        scaleControl = false;
        streetViewControl = false;
        rotateControl= false;
        fullscreenControl = false;
        optionsMap = [
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
        break;
      case 6:
        centreLat= 41.289476;
        centreLong = -81.901704;
        mapTypeControl = true;
        optionsMap = [
          {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ];
        break;
      case 7:
        mapTypeControl = true;
        var panorama = new google.maps.StreetViewPanorama(
          document.getElementById('map'), {
            position: {lat: t.villes[numero].latitude , lng: t.villes[numero].longitude},
            pov: {heading: 34,pitch: 10},
            addressControl: false
          }
        );
        break;
      case 8:
        mapTypeControl = true;
        optionsMap = [
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
        break;
      case 9:
        $('body').addClass('fin');
        t.next.html('fin du quizz');
        t.next.off('click');
        t.next.on('click', function(){
          document.location.href = "fin-jeu.html";
        });
        break;
      default:
        alert('Erreur de connexion à Google Maps, merci de réactualiser votre page');
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

  validerClick(){
    const t = this;
    const reponse = t.reponseContainer.val().toLowerCase();
    if (reponse.length){
      if ($.inArray(reponse, t.villes[sessionStorage.getItem('count')].reponses) >= 0){
        sessionStorage.setItem('count', (parseInt(sessionStorage.getItem('count')) + 1));
        t.valider.hide();
        t.next.css('display', 'inline-block');
        t.result.removeClass('inactive')
        t.result.addClass('active');
        t.input.attr('disabled');
      }
      else {
        t.reponseContainer.effect('shake');
        setTimeout(function(){
          t.reponseContainer.val('');
        }, 500);
      }
    }
  }

  nextQuestion(){
    let t = this;
    t.reponseContainer.val('');
    t.next.hide();
    t.result.removeClass('active');
    t.result.addClass('inactive');
    t.valider.show();
    t.newMap(sessionStorage.getItem('count'));
  }

  watcherMap(){
    let t = this;
    if(t.result.css('display') === 'block' && t.result.css('display') === 'block'){
      t.result.hide();
    }
  }
}
