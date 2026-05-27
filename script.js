//Enforces strict js checks for good hygiene
"use strict";

//Initializes variables and assign html page elements to them
const pickButton = document.getElementById("pickButton");
const resultSection = document.getElementById("result");

//Initializes location array
let locations = [];

//async because load file takes time
async function loadLocationList() {
    //await (takes time) to fetch file called LocationList.json
    const response = await fetch("./LocationList.json");
    //await to parse json into js array
    locations = await response.json();
    console.log(locations);
}
//Define action when clicking on a pick button
function handlePickButtonClick() {
    //print something
    console.log("Pick button clicked");
    //console.log(getRandomLocation());
    displayLocation(getRandomLocation());
}
//get a random location
function getRandomLocation() {
    let randomLocation = locations[Math.floor(Math.random() * locations.length)];
    return randomLocation;
}
//display location result
function displayLocation(location) {
    resultSection.textContent = 
        location["Name"] + "\n" +
        location["Location"] + "\n" + 
        location["Lat-Long"];
}

//assign function to button
pickButton.addEventListener("click",handlePickButtonClick);

//debugging print to console
console.log("Script is loaded");
loadLocationList()
