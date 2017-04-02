var config = require('./config');
var Twit = require('twit');
var SpotifyWebApi = require('spotify-web-api-node');

var T = new Twit(config);	

var spotify = new SpotifyWebApi();


var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var handleWeatherRequest = function(){

  if(this.status !== 200){
    return;
  }

  var jsonString = this.responseText;
  var returnedObject = JSON.parse(jsonString);
  console.log(returnedObject);


}


// get a list of elvis albums
var getAllAlbums = function(callback){
  spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE'
  .then(data, callback(getRandomAlbum))
  .then(getAlbumTracks(data))
  , function(err) {
    console.error(err);
  };
}

var getRandomAlbum = function(arrayOfAlbums, callback){
  var random = Math.floor((Math.random() * arrayOfAlbums.length) + 1);
  return arrayOfAlbums[random].id;
}

var getAlbumTracks = function(albumId, callback){
  spotify.getAlbum(albumId);
}



var app = function(){
  var url = 'https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE/albums';
  makeRequest(url, handleRequest);

}

window.onload = app;