const config = require('./config');
// ^^^ required for twitter api
var Twit = require('twit');
var SpotifyWebApi = require('spotify-web-api-node');
var T = new Twit(config);
var spotify = new SpotifyWebApi();
require('es6-promise');
require('isomorphic-fetch');

//get list of Super Furry albums
const getTrack = () => {


    // fetch('https://api.spotify.com/v1/artists/0FOcXqJgJ1oq9XfzYTDZmZ/albums?album_type=album&market=gb&limit=35')
    // .then(response => {
    //         return response.json();
    //     })

    spotify.getArtistAlbums('0FOcXqJgJ1oq9XfzYTDZmZ', {limit: 35, offset: 1})

	.then(data => {
		//return random album id
		var array = data.body.items;

		var random = Math.floor(Math.random() * array.length);
		return array[random].id;
	})
	.then(id => {
		//get that album
		spotify.getAlbumTracks(id, {limit: 20, offset: 1})
		.then(data => {
			// choose a random song from it
			var tracks = data.body.items;
			var random = Math.floor(Math.random() * tracks.length);
			var randomTrack = tracks[random];
			return randomTrack;
		})
		.then(track => {
			 T.post('statuses/update', {status: "Tick, tock, it's Furry O'Clock...\n" + track.external_urls.spotify},
				 (err, data, response) => {
					 if(response != 200){
						 console.log(err);
					 } else {
						 console.log('One furries track, sent off to the twittersphere: ' + data);
					 }
				})
		})
	})
}



getTrack();
