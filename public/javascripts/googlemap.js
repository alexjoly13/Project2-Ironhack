function initMap() {
  var parisCenter = { lat: 48.8566101, lng: 2.3514992 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: parisCenter
  });

  // Multiple markers location, latitude, and longitude
  var markers = [
    ["Gymnase Jean Leclaire", 48.8966286, 2.3273202],
    ["Gymnase Max Rousié", 48.8994664, 2.3252864],
    ["Gymnase Les Amiraux", 48.8946354, 2.3506716],
    ["Gymnase de la Goutte d'Or", 48.8850452, 2.3537821],
    ["Gymnase Dupleix", 48.8517523, 2.2955351],
    ["Gymnase Emile Anthoine", 48.8554664, 2.2910095],
    ["Gymnase Denise et Robert Gamzon", 48.8369112, 2.393751],
    ["Gymnase Alain Mimoun", 48.8395053, 2.411783],
    ["Gymnase Candie", 48.8518456, 2.3801602],
    ["Gymnase Japy", 48.8558751, 2.3824662],
    ["Centre Sportif Micheline Ostermeyer", 48.8894765, 2.3629806],
    ["Gymnase Paul Gauguin", 48.8791112, 2.3420577],
    ["Gymnase Paul Valeyre", 48.8800798, 2.3449769],
    ["Gymnase Elisabeth", 48.821152, 2.3286298],
    ["Gymnase Bretonneau", 48.8675415, 2.4027933],
    ["Gymnase Le Vau", 48.8706506, 2.4107272]
  ];

  // Icon
  var badIcon = "/images/map-icons/badminton.png";

  // Info window content
  var infoWindowContent = [
    [
      '<div class="info_content">' +
        '<h1 id="firstHeading" class="firstHeading">Gymnase Jean Leclaire</h1>' +
        '<div id="bodyContent">' +
        "<h4>22 rue Jean Leclaire<h4>" +
        "<h4>75017 PARIS</h4>" +
        `<a href="/gym-list/5c6590a5792e65000445c759"<p>See More<p></a>` +
        "</div>"
    ],
    [
      '<div class="info_content">' +
        '<h1 id="firstHeading" class="firstHeading">Gymnase Max Rousié</h1>' +
        '<div id="bodyContent">' +
        "<h4>28 rue Max Rousié<h4>" +
        "<h4>75017 PARIS</h4>" +
        `<a href="/gym-list/5c6590a5792e65000445c75a"<p>See More<p></a>` +
        "</div>"
    ],
    [
      '<div class="info_content">' +
        '<h1 id="firstHeading" class="firstHeading">Gymnase Roquépine</h1>' +
        '<div id="bodyContent">' +
        "<h4>12 rue des Amiraux<h4>" +
        "<h4>75018 PARIS</h4>" +
        `<a href="/gym-list/5c6590a5792e65000445c762"<p>See More<p></a>` +
        "</div>"
    ],
    [
      '<div class="info_content">' +
        `<h1 id="firstHeading" class="firstHeading">Gymnase de la Goutte d'Or</h1>` +
        '<div id="bodyContent">' +
        "<h4>12 rue de la Goutte d'Or<h4>" +
        "<h4>75018 PARIS</h4>" +
        `<a href="/gym-list/5c6590a5792e65000445c761"<p>See More<p></a>` +
        "</div>"
    ],
    [
      '<div class="info_content">' +
        `<h1 id="firstHeading" class="firstHeading">Gymnase Dupleix</h1>` +
        '<div id="bodyContent">' +
        "<h4>28 rue Edgar Faure<h4>" +
        "<h4>75015 PARIS</h4>" +
        `<a href="/gym-list/5c6590a5792e65000445c766"<p>See More<p></a>` +
        "</div>"
    ],
    [
      '<div class="info_content">' +
        '<h1 id="firstHeading" class="firstHeading">Gymnase Emile Anthoine</h1>' +
        '<div id="bodyContent">' +
        "<h4>9 rue Jean Rey<h4>" +
        "<h4>75015 PARIS</h4>" +
        `<a href="/gym-list/5c6590a5792e65000445c767"<p>See More<p></a>` +
        "</div>"
    ],
    [
      '<div class="info_content">' +
        '<h1 id="firstHeading" class="firstHeading">Gymnase Denise et Robert Gamzon</h1>' +
        '<div id="bodyContent">' +
        "<h4>27 rue de la Lancette<h4>" +
        "<h4>75012 PARIS</h4>" +
        `<a href="/gym-list/5c6590a5792e65000445c76b"<p>See More<p></a>` +
        "</div>"
    ],
    [
      '<div class="info_content">' +
        '<h1 id="firstHeading" class="firstHeading">Gymnase Alain Mimoun</h1>' +
        '<div id="bodyContent">' +
        "<h4>15 rue de la Nouvelle-Calédonie<h4>" +
        "<h4>75012 PARIS</h4>" +
        `<a href="/gym-list/5c6590a5792e65000445c76d"<p>See More<p></a>` +
        "</div>"
    ],
    [
      '<div class="info_content">' +
        '<h1 id="firstHeading" class="firstHeading">Gymnase Candie</h1>' +
        '<div id="bodyContent">' +
        "<h4>11 rue Candie<h4>" +
        "<h4>75011 PARIS</h4>" +
        `<a href="/gym-list/5c6590a5792e65000445c76f"<p>See More<p></a>` +
        "</div>"
    ],
    [
      '<div class="info_content">' +
        '<h1 id="firstHeading" class="firstHeading">Gymnase Japy</h1>' +
        '<div id="bodyContent">' +
        "<h4>2 rue Japy<h4>" +
        "<h4>75011 PARIS</h4>" +
        `<a href="/gym-list/5c6590a5792e65000445c770"<p>See More<p></a>` +
        "</div>"
    ],
    [
      '<div class="info_content">' +
        '<h1 id="firstHeading" class="firstHeading">Centre Sportif Micheline Ostermeyer</h1>' +
        '<div id="bodyContent">' +
        "<h4>22 rue Pajol<h4>" +
        "<h4>75018 PARIS</h4>" +
        `<a href="/gym-list/5c6590a5792e65000445c772<p>See More<p></a>` +
        "</div>"
    ],
    [
      '<div class="info_content">' +
        '<h1 id="firstHeading" class="firstHeading">Gymnase Paul Gauguin</h1>' +
        '<div id="bodyContent">' +
        "<h4>33 rue Milton<h4>" +
        "<h4>75009 PARIS</h4>" +
        `<a href="/gym-list/5c6590a5792e65000445c773"<p>See More<p></a>` +
        "</div>"
    ],
    [
      '<div class="info_content">' +
        '<h1 id="firstHeading" class="firstHeading">Gymnase Paul Valeyre</h1>' +
        '<div id="bodyContent">' +
        "<h4>24 rue Rochechouart<h4>" +
        "<h4>75009 PARIS</h4>" +
        `<a href="/gym-list/5c6590a5792e65000445c774"<p>See More<p></a>` +
        "</div>"
    ],
    [
      '<div class="info_content">' +
        '<h1 id="firstHeading" class="firstHeading">Gymnase Elisabeth</h1>' +
        '<div id="bodyContent">' +
        "<h4>7 Avenue Paul Appell<h4>" +
        "<h4>75014 PARIS</h4>" +
        `<a href="/gym-list/5c6590a5792e65000445c777"<p>See More<p></a>` +
        "</div>"
    ],
    [
      '<div class="info_content">' +
        '<h1 id="firstHeading" class="firstHeading">Gymnase Bretonneau</h1>' +
        '<div id="bodyContent">' +
        "<h4>7 rue Bretonneau<h4>" +
        "<h4>75020 PARIS</h4>" +
        `<a href="/gym-list/5c6590a5792e65000445c779"<p>See More<p></a>` +
        "</div>"
    ],
    [
      '<div class="info_content">' +
        '<h1 id="firstHeading" class="firstHeading">Gymnase Le Vau</h1>' +
        '<div id="bodyContent">' +
        "<h4>36 rue Le Vau<h4>" +
        "<h4>75020 PARIS</h4>" +
        `<a href="/gym-list/5c6590a5792e65000445c77a"<p>See More<p></a>` +
        "</div>"
    ]
  ];

  // Add multiple markers to map
  var infoWindow = new google.maps.InfoWindow(),
    marker,
    i;

  // Place each marker on the map
  for (i = 0; i < markers.length; i++) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    marker = new google.maps.Marker({
      position: position,
      map: map,
      title: markers[i][0],
      icon: badIcon
    });

    // Add info window to marker
    google.maps.event.addListener(
      marker,
      "click",
      (function(marker, i) {
        return function() {
          infoWindow.setContent(infoWindowContent[i][0]);
          infoWindow.open(map, marker);
        };
      })(marker, i)
    );
  }
}
// Load initialize function
google.maps.event.addDomListener(window, "load", initMap);
