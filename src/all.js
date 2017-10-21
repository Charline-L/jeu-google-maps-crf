'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bonjour = function () {
  function Bonjour() {
    _classCallCheck(this, Bonjour);

    var t = this;
    t.bonjour = 'Bonjour toi !';
  }

  _createClass(Bonjour, [{
    key: 'init',
    value: function init() {
      var t = this;
      console.log(t.bonjour);
    }
  }]);

  return Bonjour;
}();

var GMap = function () {
  function GMap() {
    _classCallCheck(this, GMap);

    var t = this;
    t.mapContainer = $('#map')[0];
  }

  _createClass(GMap, [{
    key: 'init',
    value: function init() {
      var t = this;
      var map = new google.maps.Map(t.mapContainer, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 16
      });
    }
  }]);

  return GMap;
}();

var bonjour = new Bonjour();
bonjour.init();
console.log('fin init');