class GMap {
  constructor(){
    let t = this;
    t.mapContainer = $('#map')[0];
  }
  init(){
    let t = this;
    let map = new google.maps.Map(t.mapContainer, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 16
    });
  }
}
