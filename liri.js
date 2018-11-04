//---------- Required Packages ----------
var Spotify = require('node-spotify-api');
require('dotenv').config();
var fs = require("fs");
var keys = require('./keys.js');
var request = require('request');

//---------- Creating variables to store what's entered in the commandline ----------
var nodeArgs = process.argv;
var appArgs = process.argv[2];
var input = "";

//---------- Loop through the arguments for commandline search ----------
for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
        input += " " + nodeArgs[i];
    } else {
        input += nodeArgs[i];
    }
}

//---------- Switch Between Different Apps ----------
switch(appArgs) {
    case 'spotify-this-song': getSong(input);
    break;

    case 'movie-this': getMovie(input);
    break;
}


//---------- function to find a song through Spotify API ----------
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

//---------- function to find a movie through OMDB API ----------
function getMovie(movieName) {
    
        if (!movieName){
            movieName = "Mr. Nobody.";
        };
        console.log(movieName);

        //creating the query URL for OMDB API search with user input as movieName
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json&tomatoes=true&apikey=trilogy";
        console.log(queryUrl);

        request(queryUrl, function(err, response, body) {

            // If the request is successful
            if (!err && response.statusCode === 200) {
                var movieObj = JSON.parse(body);
    
                //console.log(movieObj); // this shows the text in the console
                var movieResults = 
                "---------- start ----------" + "\r\n" +
                "Title: " + movieObj.Title+"\r\n"+
                "Year: " + movieObj.Year+"\r\n"+
                "Imdb Rating: " + movieObj.imdbRating+"\r\n"+
                "Rotten Tomatoes Rating: " + movieObj.tomatoRating+"\r\n"+
                "Country: " + movieObj.Country+"\r\n"+
                "Language: " + movieObj.Language+"\r\n"+
                "Plot: " + movieObj.Plot+"\r\n"+
                "Actors: " + movieObj.Actors+"\r\n"+
                "---------- end ----------" + "\r\n";
                console.log(movieResults)
            } 
            else {
                console.log("something went wrong here:"+ err);
                return;
            }
        });
    }