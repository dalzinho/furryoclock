const config = require('./config');
// ^^^ required for twitter api
var Twit = require('twit');
var SpotifyWebApi = require('spotify-web-api-node');
var T = new Twit(config);
var spotify = new SpotifyWebApi();

//get list of Elvis albums
const getTrack = () => {
	spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
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
			var randomTrack = tracks[random].external_urls.spotify;
			return randomTrack;
		})
		.then(track => {

			T.post('statuses/update', {status: "The laptop is open. Here's Elvis...\n" + track},
				(err, data, response) => {
					if(response != 200){
						console.error(err);
					} else {
						console.log(response);
					}
				})
		})
	})
}



getTrack();
