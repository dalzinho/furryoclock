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

const getAlbumIds = new Promise((resolve, reject) => {
	spotify.clientCredentialsGrant()
	.then(data => {
		spotify.setAccessToken(data.body['access_token']);
		spotify.getArtistAlbums('0FOcXqJgJ1oq9XfzYTDZmZ', {limit:50, album_type:"album,single"})
		.then(data => {
			let albumIds = [];
			data.body.items.forEach(item => {
				albumIds.push(item.id);
			})
			resolve(albumIds)
		})
	}, "credential fail");
})


const getIds = new Promise((res, rej) => {
	spotify.clientCredentialsGrant()
	.then(data => {
		spotify.setAccessToken(data.body['access_token']);
		getAlbumIds
		.then(datum => {
			
			datum.forEach(id => {
				trackcallback(id)
				.then(response => {
					response.body.items.forEach(track => {
						console.log(track.id)
					})
				})
			})			
		})

	})
})





const trackcallback = (id) => {
	return new Promise((resolve, reject) => {
		spotify.getAlbumTracks(id)
		.then(data => {
			resolve(data);
		})
	}, "not resolved, catboy")	
} 


getIds


