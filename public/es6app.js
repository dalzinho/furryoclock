const config = require('./config');
// ^^^ required for twitter api
// const spotifyAccessToken = require('./spotifyAccessToken');
const spotifyConfig = require('./spotifyConfig');
var Twit = require('twit');
var SpotifyWebApi = require('spotify-web-api-node');
var T = new Twit(config);
var spotify = new SpotifyWebApi(spotifyConfig);
require('es6-promise');
require('isomorphic-fetch');


//get list of Super Furry albums
const getTrack = () => {
				

				spotify.clientCredentialsGrant()
								.then(data => {
												console.log("The access token expires in " + data.body['expires_in']);
												console.log("The access token is " + data.body['access_token']);
												spotify.setAccessToken(data.body['access_token']);
								}, err => {
												console.log("error getting token" + err.message)
								}
								)

				// console.log(spotifyAccessToken);
				// spotify.setAccessToken(spotifyAccessToken);

.then(
				spotify.getArtistAlbums('0FOcXqJgJ1oq9XfzYTDZmZ', {limit:50, album_type:"album,single"})
								.then(data => {
												console.log(data.body);
												return data.body;
								}, err => {
												console.error(err);
								})
				// fetch('https://api.spotify.com/v1/artists/0FOcXqJgJ1oq9XfzYTDZmZ/albums?album_type=album&limit=35')
				// .then(response => {
				//         if(response.status != 200){
				//             console.error('Album fetch error:', response.status, response.statusText);
				//         }
				// return response.json();
				// })

				.then(data => {
								var array = data.items;

								var random = Math.floor(Math.random() * array.length);
								const album = array[random];
								console.log('selected album:', album.name);
								return album.id;
				})
				.catch(response => {
								console.log('spotify album getter error:', response);
				})
				.then(id => {
								//get that album
								spotify.getAlbumTracks(id, {limit: 30})
												.then(data => {
																// choose a random song from it
																var tracks = data.body.items;
																var random = Math.floor(Math.random() * tracks.length);
																var randomTrack = tracks[random];
																console.log('track:', randomTrack.name);
																return randomTrack;
												})

								.then(track => {
												T.post('statuses/update', {status: "Tick, tock, it's Furry O'Clock...\n" + track.external_urls.spotify},
																				(err, data, response) => {
																								switch(response){
																												case 187:
																																console.log('Code 187. Duplicate tweet!')
																																				break;
																												case 200:
																																console.log('Successfully posted!');
																																break;
																												default:
																																console.log(err);

																								}
																				})
								})
				}))
}


// getCredentials();
getTrack();
