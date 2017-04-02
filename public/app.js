var config = require('./config');
var Twit = require('twit');
var SpotifyWebApi = require('spotify-web-api-node');

var T = new Twit(config);	

var spotify = new SpotifyWebApi();

// get a list of elvis albums
spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data) {
    console.log('Artist albums', data.body);
  }, function(err) {
    console.error(err);
  });

var setNewTrack = 

var random = Math.floor((Math.random() * allElvis.length) + 1);
var thisHoursElvis = allElvis[random];
console.log(thisHoursElvis)

var app = function(){

}