require ('isomorphic-fetch');
require ('es6-promise');
const spotifyWebApi = require('spotify-web-api-node');
const spotify = new spotifyWebApi();

fetch("https://api.spotify.com/v1/artists/0FOcXqJgJ1oq9XfzYTDZmZ/albums?album_type=album&market=gb&limit=35")
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.log(json);
        });
