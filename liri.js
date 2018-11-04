var Spotify = require('node-spotify-api');
require('dotenv').config();
var fs = require("fs");
var keys = require('./keys.js');

var nodeArgs = process.argv;
var appArgs = process.argv[2];

var input = "";

for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
        input += " " + nodeArgs[i];
    } else {
        input += nodeArgs[i];
    }
}

switch(appArgs) {
    case 'spotify-this-song': getSong(input);
    break;
}

//Function for Spotify
function getSong(songName) {
    var spotify = new Spotify(keys.spotify);

    //If no song is provided, use "The Sign" 
        if (!songName) {
            songName = "The Sign";
        };        

        console.log(songName);

        //Callback to spotify to search for song name
        spotify.search({ type: 'track', query: songName}, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            } 
            console.log("Artist: " + data.tracks.items[0].artists[0].name + "\nSong name: " + data.tracks.items[0].name +
            "\nAlbum Name: " + data.tracks.items[0].album.name + "\nPreview Link: " + data.tracks.items[0].preview_url); 
        });
};