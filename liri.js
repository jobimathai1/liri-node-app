require("dotenv").config();
var keys = require('./keys');

var spotify = new Spotify(keys.spotify);
var request = require("request");
var fs = require("fs");

//Create Switch Case statements for Spotify, OMDB, Bands In Town

//Write a function to search through Spotify for songs based on user input, if song not found then else to Ace of Base

//Write a function to search through OMDB for movie based on user input

//Write a function to search through Bands in Town for concerts based on user input

//Write a function to go through random.txt file and do what it says

//Instead of just logging to console, look into logging into a log.txt file