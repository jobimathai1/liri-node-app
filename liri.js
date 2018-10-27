require("dotenv").config();
var keys = require('./keys');

var spotify = new Spotify(keys.spotify);
var request = require("request");
var fs = require("fs");

//Store the node command line arguments
var cmdArgs = process.argv;
var additionalArg = "";
//Liri command comes after "node filename.js"
var liriCmdArgs = cmdArgs[2];

//In case of space in the argument
for (var i = 3; i < cmdArgs.length; i++) {
    if (i > 3 && i < cmdArgs.length) {
        additionalArg = additionalArg + "+"
        cmdArgs[i];
    } else {
        additionalArg = additionalArg + cmdArgs[i];
    }
}


//Create Switch Case statements for Spotify, OMDB, Bands In Town

switch (liriCmdArgs) {
    case 'spotify-this-song':
        spotify();
        break;

    case 'movie-this':
        imdb();
        break;

    case 'movie-this':
        imdb();
        break;

    case 'do-what-it-says':
        doWhat();
        break;
}

//Write a function to search through Spotify for songs based on user input, if song not found then else to Ace of Base

//Write a function to search through OMDB for movie based on user input

//Write a function to search through Bands in Town for concerts based on user input

//Write a function to go through random.txt file and do what it says

//Instead of just logging to console, look into logging into a log.txt file