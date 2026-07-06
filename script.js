//Enforces strict js checks for good hygiene
"use strict";

//Initializes variables and assign html page elements to them
const rouletteButton = document.getElementById("rouletteButton");
const selectedLocalJSONFile = document.getElementById("selectedLocalJSONFile");
const resultSection = document.getElementById("result");

//Initializes location array
let locations = [];

//async because load file takes time
async function fetchSelectedJSON(File) {
    //await (takes time) to read the selected file called LocationList.json
    const text = await File.text();
    locations = JSON.parse(text);
    console.log(locations);
}

//async because load file takes time
async function fetchRepositoryJSON() {
    //await (takes time) to fetch file called LocationList.json
    const response = await fetch("./LocationList.json");
    //await to parse json into js array
    locations = await response.json();
}

//Define action when clicking on a pick button
function handleRouletteButtonClick() {
    //print something
    console.log("Roulette button clicked");
    //console.log(getRandomLocation());
    displayLocation(getRandomLocation());
}
//Define action when clicking on the choose file button
function handleJSONFileChange(event) {
    console.log("Choose File button clicked");
    console.log("event.target:", event.target);
    console.log("event.target.files:", event.target.files);
    if (event.target.files[0]) {
        fetchSelectedJSON(event.target.files[0]);
    } else {
        console.log("File selection is cancelled.")
        return;
    }
}

//get a random location
function getRandomLocation() {
    let randomLocation = locations[Math.floor(Math.random() * locations.length)];
    return randomLocation;
}
//display location result
function displayLocation(locations) {
    resultSection.textContent = 
        locations["Name"] + "\n" +
        locations["Location"] + "\n" + 
        locations["Lat-Long"];
}

//assign function to button
rouletteButton.addEventListener("click",handleRouletteButtonClick);
selectedLocalJSONFile.addEventListener("change",handleJSONFileChange);

//debugging print to console
console.log("Script is loaded");
/* loadLocationList() */
fetchRepositoryJSON();
