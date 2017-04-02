var config = require('./config');
var Twit = require('twit');
var SpotifyWebApi = require('spotify-web-api-node');

var T = new Twit(config);	

var spotify = new SpotifyWebApi();
var randomAlbum = null;


// get a list of elvis albums
var getAllAlbums = function(){
  spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data) {
    getRandomAlbum(data.body.index);
  }, function(err) {
    console.error(err);
  });


}

var getRandomAlbum = function(data){
  var random = Math.floor((Math.random() * data.length) + 1);
  var album = data[random];
}

var getAlbumTracks = function(albumId){
  spotify.getAlbum(albumId);
}



var app = function(){
  var all = getAllAlbums(getRandomAlbum);



}

app();