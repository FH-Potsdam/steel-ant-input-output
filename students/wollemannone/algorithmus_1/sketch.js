// getting started with p5js
var x = 0;
var y = 0;
var  vertices  = [];
var numberOfVertices = 5;
// http://stackoverflow.com/questions/2212604/javascript-check-mouse-clicked-inside-the-circle-or-polygon/2212851#2212851
// nvert - Number of vertices in the polygon. Whether to repeat the first vertex at the end is discussed below.
// vertx, verty - Arrays containing the x- and y-coordinates of the polygon's vertices.
// testx, testy - X- and y-coordinate of the test point.
// function pnpoly(nvert, vertx, verty, testx, testy) {
//   var i, j, c = false;
//   for (i = 0, j = nvert - 1; i < nvert; j = i++) {
//     if (((verty[i] > testy) != (verty[j] > testy)) &&
//       (testx < (vertx[j] - vertx[i]) * (testy - verty[i]) / (verty[j] - verty[i]) + vertx[i])) {
//       c = !c;
//     }
//   }
//   return c;
// }

// this is our variant of the pnpoly function
function is_inside(nvert, list, testx, testy) {
  var i, j, c = false;
  var vertx = [];
  var verty = [];

  for(var k = 0; k < list.length; k++){
    vertx.push(list[k][0]);
    verty.push(list[k][1]);
  }

  for (i = 0, j = nvert - 1; i < nvert; j = i++) {
    if (((verty[i] > testy) != (verty[j] > testy)) &&
      (testx < (vertx[j] - vertx[i]) * (testy - verty[i]) / (verty[j] - verty[i]) + vertx[i])) {
      c = !c;
    }
  }
  return c;
}


function setup() {
  colorMode(HSB, 360, 100, 100, 100);
  createCanvas(600, 400);

  y = height / 2;
  x = width / 2;
  for(var i = 0; i < numberOfVertices;i++){
    var temp_x = random(0,width);
    var temp_y = random(0,height);
    vertices.push([temp_x, temp_y]);
  }

  // console.log(vertices);


}

function draw() {

  background(0);
  fill(255, 0, 100);
  // ellipse(x, y, 50, 50);


  //             0    1    2    3    5    6
  // var xverts = [100, 150, 400, 450, 200, 10];
  //             0    1    2    3    5   6
  // var yverts = [26, 300, 61, 250, 150, 100];

  // var p1 = {x: 100, y: 26};
  // var p2 = {x: 150, y: 300};
  // var p3 = {x: 400, y: 61};
  // var p4 = {x: 450, y: 250};
  // var p5 = {x: 200, y: 150};


  stroke(255, 0, 100, 100);
  strokeWeight(5);

noFill();
  beginShape();
  for(var i = 0; i < vertices.length;i++){
    vertex(vertices[i][0], vertices[i][1]);
  }
endShape(CLOSE);

 var test_x = 80;
 var test_y = 50;
var is_point_inside = is_inside(vertices.length, vertices, test_x, test_y);

 var test_x1 = 100;
 var test_y1 = 20;
var is_point_inside2 = is_inside(vertices.length, vertices, test_x1, test_y1);

if(is_point_inside === true){
 fill(120,100,50);
}else{
 fill(0,100,50);
}
 ellipse(test_x, test_y, 30, 30);

  // curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
  // curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
  // curve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p5.x, p5.y);
  // curve(p3.x, p3.y, p4.x, p4.y, p5.x, p5.y, p5.x, p5.y);


  // strokeWeight(6);
  // stroke(200, 0, 80, 100);

  // point(p1.x, p1.y);
  // point(p2.x, p2.y);
  // point(p3.x, p3.y);
  // point(p4.x, p4.y);

}