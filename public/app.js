var config = require('./config');
var Twit = require('twit');
var SpotifyWebApi = require('spotify-web-api-node');
var T = new Twit(config);	
var spotify = new SpotifyWebApi();


// get a list of elvis albums
var getAllAlbums = function(){
  spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
  .then(function(data){
    var arrayOfAlbums = data.body.items;
    getRandomAlbum(arrayOfAlbums);
  })
  , function(err) {
    console.error(err);
  };
}

// var makeRequest = function(url, callback){
//   var request = new XMLHttpRequest();
//   request.open("GET", url);
//   request.onload = callback;
//   request.send();
// }

var handleRequest = function(data){

  if(this.status !== 200){
    console.log('panic!')
    return;
  }

  var jsonString = data;
  var returnedObject = JSON.parse(jsonString);
  getRandomAlbum(returnedObject.items);
}




var getRandomAlbum = function(arrayOfAlbums){
  var random = Math.floor((Math.random() * arrayOfAlbums.length) + 1);
  var randomAlbum = arrayOfAlbums[random].id;
  // console.log('random album id ', randomAlbum);
  getAlbumTracks(randomAlbum);
}

var getAlbumTracks = function(albumId){
  console.log('album id', albumId);
  spotify.getAlbumTracks(albumId, { limit : 20, offset : 1 })
    .then(function(data) {
      // console.log('data body?', data.body.items);
      getRandomTrack(data.body.items);
    }, function(err) {
      console.log('Something went wrong!', err);
    });
}

// var getAlbumInfo = function(){

//   if(this.status !== 200){
//     console.log('disaster!');
//     return;
//   }
//   var tracks = JSON.parse(this.responseText).items;
//   console.log('track-listing', tracks);
//   getRandomTrack(tracks);
// }

var getRandomTrack = function(tracks){
  var random = Math.floor((Math.random() * tracks.length) + 1);
  randomTrack = tracks[random].external_urls.spotify;
  console.log(randomTrack);
  tweetTheThing(randomTrack);
}

var tweetTheThing = function(url){
  T.post('statuses/update', { status: "The laptop is open. Here's Elvis...\n" + url }, function(err, data, response) {
    console.log(data)
  })
}




var app = function(){
  var url = 'https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE/albums';
  getAllAlbums(url, handleRequest);
}

app();

// window.onload = app;