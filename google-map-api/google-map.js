var autocomplete;
var map;
    
function initialize() {
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {HTMLInputElement} */(document.getElementById('autocomplete')),
        { types: ['geocode'] });
    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        console.log('hi imma gettin changed yo');
        var place = autocomplete.getPlace();
        console.log(place);
        console.log("THIS IS THE URL", place.url)
    });
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
  }

