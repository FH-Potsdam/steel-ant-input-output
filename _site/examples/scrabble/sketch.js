var scrabble;
function preload(){
scrabble = loadJSON("scrabble.json");
// NEVER LOG IN PRELOAD TO THE CONSOLE !!!!!!!!!!!
}
// getting started with p5js
function setup(){

  var canvas = createCanvas(300,100);
  canvas.parent('sketch');
  // text("empty example", 10,10);
  // console.log(scrabble);
  // executed once
  var letters = scrabble.letters;
  // var numberOfObjects = 0;
  var values = [];  // will hold the point values
  var letarr = []; // will hold the letter names
  var tiles = []; // will hold the number of tiles

// this is an special loop for objects
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Statements/for...in
  for(var key in letters){
    tiles.push(letters[key].tiles); // add the tile values to the array tiles
    values.push(letters[key].points);// add the point values to the array points
    letarr.push(key); // add the keys a,b,c,d,... to the array letarr
  }

var x = 0;
rectMode(CENTER);
// display it
var step = width/values.length;
for(var i = 0; i < values.length; i++){
  text(letarr[i],x,(height/2) - 10);
  rect(x,height/2 ,tiles[i],tiles[i]);
  ellipse(x,height/2 ,values[i],values[i]);

  x+=step;
  }
}
function draw(){
  // executed all the time
}