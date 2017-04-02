var config = require('./config');
var Twit = require('twit');
var T = new Twit(config);	


// get a list of elvis albums
var getAllAlbums = function(callback){
  spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE'
  .then(data, callback(getRandomAlbum))
  .then(getAlbumTracks(data))
  , function(err) {
    console.error(err);
  });
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

var handleRequest = function(){

  if(this.status !== 200){
    console.log('panic!')
    return;
  }

  var jsonString = this.responseText;
  var returnedObject = JSON.parse(jsonString);
  getRandomAlbum(returnedObject.items);
}




var getRandomAlbum = function(arrayOfAlbums){
  var random = Math.floor((Math.random() * arrayOfAlbums.length) + 1);
  var randomAlbum = arrayOfAlbums[random].id;
  console.log('random album id ', randomAlbum);
  getAlbumTracks(randomAlbum);
}

var getAlbumTracks = function(albumId){
  var url =   'http://api.spotify.com/v1/albums/'+albumId+'/tracks';
  console.log('album tracks url', url);
  makeRequest(url, getAlbumInfo);
}

var getAlbumInfo = function(){

  if(this.status !== 200){
    console.log('disaster!');
    return;
  }
  var tracks = JSON.parse(this.responseText).items;
  console.log('track-listing', tracks);
  getRandomTrack(tracks);
}

var getRandomTrack = function(tracks){
  var random = Math.floor((Math.random() * tracks.length) + 1);
  randomTrack = tracks[random].external_urls.spotify;
  console.log(randomTrack);
  tweetTheThing(randomTrack);
}

var tweetTheThing = function(url){
  T.post('statuses/update', { status: url }, function(err, data, response) {
    console.log(data)
  })
}




var app = function(){
  var url = 'https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE/albums';
  makeRequest(url, handleRequest);
}

app();

// window.onload = app;