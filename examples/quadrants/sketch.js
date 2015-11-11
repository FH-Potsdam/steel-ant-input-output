// creating quadrants in a grid
// and placing a point inside

var quadrants = [];
var step = 25;
function setup() {

  createCanvas(400, 400);
  for (var x = 0; x < width; x += step) {
    for (var y = 0; y < height; y += step) {
      rect(x, y, step, step);
      var quadrant = {
        "x1": x,
        "y1": y,
        "x2": x + step,
        "y2": y + step
      };
      quadrants.push(quadrant);
    }
  }

  for (var i = 0; i < quadrants.length; i++) {
    var quad  = quadrants[i];
    var upperleft_x = quad.x1;
    var upperleft_y = quad.y1;
    var lowerright_x = quad.x2;
    var lowerright_y = quad.y2;

    var px = random(upperleft_x, lowerright_x);
    var py = random(upperleft_y, lowerright_y);
    strokeWeight(random(1,5));
    point(px, py);
  }

}

function draw() {



}