/**
 * Simple sketch that shows the power of arrays
 * it draws a trails that follows the mouse
 * @author: Fabian "fabiantheblind" Morón Zirfas
 * @license: WTFPL
 */
var trails = [];
var  onetrail = [];

// executed once
function setup() {
  var canvas = createCanvas(500,500);
  canvas.parent('sketch');
}
// executed all the time
function draw() {
  background(0); // delete the bg
  noStroke();
  fill(255);
  text("Draw on me", 10,15);
  stroke(255);
  strokeWeight(1);
  noFill();
  noFill();
  draw_trail();// draw the trail
}

// if the mouse is pressed we create anew list
function mousePressed() {
  onetrail =[];
}

// if the mouse is released we add the list to the
// list of lists
function mouseReleased() {
  trails.push(onetrail);
}
/**
 * So here is the trick.
 * If the mouse is dragged we store the locations
 * in our arraylist.
 * We constrain the list to 100 points with the while loop
 */
function mouseDragged() {
  onetrail.push([mouseX, mouseY]);// add the location of the mouse

  // this is just to see
  // where we are drawing
  beginShape();
  for (var i = 0; i < onetrail.length;i++) {
    var p = onetrail[i];
    vertex(p[0], p[1]);
  }
  endShape();
}
/**
 * Lets draw the trail
 * we loop thru our arraylist and draw every point we find in there
 *
 */
function draw_trail() {
  for (var i = 0; i < trails.length;i++) {
    beginShape();
    for (var j = 0; j < trails[i].length;j++) {
      var p = trails[i][j];
      vertex(p[0], p[1]);
    }
    endShape();
  }
}
//not so simple anymore. eh?

