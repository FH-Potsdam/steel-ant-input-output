/**
 * Simple sketch that shows the power of arraylists
 * it draws a trail that follows the mouse
 * @author: Fabian "fabiantheblind" Morón Zirfas
 * @license: WTFPL
 */
var trail = [];// define our trail list
// executed once
function setup(){
  var canvas = createCanvas(500,100);
  canvas.parent('sketch');
}
// executed all the time
function draw(){
  background(0); // delete the bg
  noStroke();
  fill(255);
  text("Draw on me!",10,15);
  stroke(255);
  strokeWeight(1);
  noFill();
  draw_trail();// draw the trail
// line(mouseX,mouseY,pmouseX,pmouseY);// this is another way to draw 2 point trails
}
/**
 * So here is the trick.
 * If the mouse is dragged we store the locations
 * in our arraylist.
 * We constrain the list to 100 points with the while loop
 */
function mouseDragged(){

  trail.push([mouseX,mouseY]);// add the location of the mouse
  // if the list has more then 100 entries remove the first one
  while(trail.length > 100){
    trail.shift();
  }
//  println(trail);
}
/**
 * Lets draw the trail
 * we loop thru our arraylist and draw every point we find in there
 *
 */
function draw_trail(){
  beginShape();
  for(var i = 0; i < trail.length;i++){
    vertex(trail[i][0], trail[i][1]);
  }
  endShape();
}
//pretty simple eh?