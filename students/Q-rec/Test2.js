// getting started with p5js

var w = 500;
var h = 500;
var step = 50;
var points = [];
var startpoint = null;
var nextpoint = null;
// todo
// rule for selecting the numbers
//
var start_indicies = [4,36,76,44];

var get_neighbours = function(ndx, list, width, height, steps) {
  var w_steps = (width / steps) - 1;
  var h_steps = (height / steps) - 1;
  var curr_point = list[ndx];
  var neighbours = [];
  var left = false;
  var right = false;
  var top = false;
  var bottom = false;
  var centered = false;
  // for(var i = 0; i < list.length;i++){
  if (ndx < h_steps) {
    // we are at the left border
    console.log('Left border with index "%s" point is at x: %s y: %s ', ndx, list[ndx].x, list[ndx].y);
    left = true;
  }
  if (ndx > (list.length - 1) - h_steps) {
    // right border
    console.log('Right border with index "%s" point is at x: %s y: %s ', ndx, list[ndx].x, list[ndx].y);
    right = true;
  }
  if (ndx % (h_steps) === 0) {
    // upper border
    console.log('Upper border with index "%s" point is at x: %s y: %s ', ndx, list[ndx].x, list[ndx].y);
    top = true;
  }
  if (ndx % (h_steps) === h_steps - 1) {
    // lower border
    console.log('Lower border with index "%s" point is at x: %s y: %s ', ndx, list[ndx].x, list[ndx].y);
    bottom = true;
  }





  if (right !== true && left !== true && top !== true && bottom !== true) {
    console.log('centered with index "%s" point is at x: %s y: %s ', ndx, list[ndx].x, list[ndx].y);
    centered = true;
  }


  if (right === true && bottom === false && top === false) {
    neighbours = [];
    neighbours.push(ndx - (h_steps + 1));
    neighbours.push(ndx - h_steps);
    neighbours.push(ndx - (h_steps - 1));
    neighbours.push(ndx - 1);
    neighbours.push(ndx + 1);
  }
  if (right === true && top === true && bottom === false) {
    neighbours = [];
    // neighbours.push(ndx - (h_steps + 1));
    neighbours.push(ndx - h_steps);
    neighbours.push(ndx - (h_steps - 1));
    // neighbours.push(ndx - 1);
    neighbours.push(ndx + 1);

  }
  if (right === true && bottom === true && top === false) {
    neighbours = [];
    neighbours.push(ndx - (h_steps + 1));
    neighbours.push(ndx - h_steps);
    // neighbours.push(ndx - (h_steps - 1));
    neighbours.push(ndx - 1);
    // neighbours.push(ndx + 1);

  }
  if (left === true && bottom === false && top === false) {
    neighbours = [];
    neighbours.push(ndx + (h_steps + 1));
    neighbours.push(ndx + h_steps);
    neighbours.push(ndx + (h_steps - 1));
    neighbours.push(ndx - 1);
    neighbours.push(ndx + 1);
  }
  if (left === true && top === true && bottom === false) {
    neighbours = [];
    neighbours.push(ndx + (h_steps + 1));
    neighbours.push(ndx + h_steps);
    // neighbours.push(ndx + (h_steps - 1));
    // neighbours.push(ndx - 1);
    neighbours.push(ndx + 1);
    // neighbours.push(ndx - (h_steps + 1));
    // neighbours.push(ndx - h_steps);
    // neighbours.push(ndx - (h_steps - 1));


  }
  if (left === true && bottom === true && top === false) {
    neighbours = [];
    // neighbours.push(ndx + (h_steps + 1));
    neighbours.push(ndx + h_steps);
    neighbours.push(ndx + (h_steps - 1));
    neighbours.push(ndx - 1);
    // neighbours.push(ndx + 1);
    // neighbours.push(ndx - (h_steps + 1));
    // neighbours.push(ndx - h_steps);
    // neighbours.push(ndx - (h_steps - 1));
  }
  if (top === true && left === false && right === false) {
    neighbours = [];
    neighbours.push(ndx + (h_steps + 1));
    neighbours.push(ndx + h_steps);
    // neighbours.push(ndx + (h_steps - 1));
    // neighbours.push(ndx - 1);
    neighbours.push(ndx + 1);
    // neighbours.push(ndx - (h_steps + 1));
    neighbours.push(ndx - h_steps);
    neighbours.push(ndx - (h_steps - 1));
  }
  if (bottom === true && left === false && right === false) {
    neighbours = [];
    // neighbours.push(ndx + (h_steps + 1));
    neighbours.push(ndx + h_steps);
    neighbours.push(ndx + (h_steps - 1));
    neighbours.push(ndx - 1);
    // neighbours.push(ndx + 1);
    neighbours.push(ndx - (h_steps + 1));
    neighbours.push(ndx - h_steps);
    // neighbours.push(ndx - (h_steps - 1));
  }

  if (centered === true) {
    neighbours = [];
    neighbours.push(ndx + (h_steps + 1));
    neighbours.push(ndx + h_steps);
    neighbours.push(ndx + (h_steps - 1));
    neighbours.push(ndx - 1);
    neighbours.push(ndx + 1);
    neighbours.push(ndx - (h_steps + 1));
    neighbours.push(ndx - h_steps);
    neighbours.push(ndx - (h_steps - 1));
  }

return neighbours;
};


function setup(){


  frameRate([20]);

  createCanvas(w,h);
  background (255,92,82);
  var counter = 0;
    for (var x = step; x < w; x += step) {
    for (var y = step; y < h; y += step) {
      points.push({
        "x": x,
        "y": y,
        "ndx": counter
      });
      counter++;
    }
  }

  var random_start_index = start_indicies[Math.floor(Math.random() * start_indicies.length)];
   startpoint = points[random_start_index];//points[Math.floor(Math.random() * points.length)];

}
// http://stackoverflow.com/questions/10073699/pad-a-number-with-leading-zeros-in-javascript
function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;

}





function draw(){
  stroke (255);
  switch(startpoint.ndx){
    case 4:
    // links 4
    line(0,startpoint.y, startpoint.x,startpoint.y);

    break;
    case 36:
    line(startpoint.x, 0, startpoint.x,startpoint.y);
    //oben 36


    break;
    case 76:
    line(width,startpoint.y, startpoint.x, startpoint.y);
    // rechts 76


    break;
    case 44:
    line(startpoint.x, height, startpoint.x, startpoint.y);
    // 44 unten


    break;
  }


  for(var i = 0; i < points.length;i++){
  }

  var nearest_neighbours = get_neighbours(startpoint.ndx, points, w, h, step);
  var nextindex =  nearest_neighbours[Math.floor(Math.random() * nearest_neighbours.length)];
  nextpoint = points[nextindex];
 // fill(0,0,0,80);
  noStroke();
  // rect(startpoint.x, startpoint.y, step+1, step+1);
  stroke (255);
  line(startpoint.x, startpoint.y, nextpoint.x, nextpoint.y );
  startpoint = nextpoint;



  for(var j = 0; j < start_indicies.length;j++){
//[4,36,76,44];
    switch(startpoint.ndx){
      case 4:
      // links 4
      line(startpoint.x, startpoint.y,0, height/2);
<<<<<<< HEAD
      saveCanvas('linie','png');
=======
      if (keyIsPressed=== true){
      saveCanvas('linie','png');}
>>>>>>> origin/master
      noLoop();
      startpoint = {"x":0, "y":height/2,"ndx":null};

      break;
      case 36:
      line(startpoint.x, startpoint.y,width/2, 0);
<<<<<<< HEAD
      saveCanvas('linie','png');
=======
      if (keyIsPressed=== true){
      saveCanvas('linie','png');}
>>>>>>> origin/master
      noLoop();
      startpoint = {"x":250, "y":0,"ndx":null};
      //oben 36


      break;
      case 76:
      line(startpoint.x, startpoint.y,width, height/2);
<<<<<<< HEAD
      saveCanvas('linie','png');
=======
      if (keyIsPressed=== true){
      saveCanvas('linie','png');}
>>>>>>> origin/master
      noLoop();
      startpoint = {"x":width, "y":height/2,"ndx":null};
      // rechts 76


      break;
      case 44:
      line(startpoint.x, startpoint.y,width/2, height);
<<<<<<< HEAD
      saveCanvas('linie','png');
=======
      if (keyIsPressed=== true){
      saveCanvas('linie','png');}
>>>>>>> origin/master
      noLoop;
      startpoint = {"x":width/2, "y":height,"ndx":null};
      // 44 unten
      break;
    }
  }

}
