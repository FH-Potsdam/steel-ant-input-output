// mesh
// based on this work
// Title: Blob Grid
// http://www.openprocessing.org/sketch/64363#
// http://www.asymptoticdesign.org/
// This work is licensed under a Creative Commons 3.0 License.
// (Attribution - NonCommerical - ShareAlike)
// http://creativecommons.org/licenses/by-nc-sa/3.0/

var rows = 10;
var columns = 10;

var mesh  = [];


function  setup(){
  var canvas = createCanvas(500,500);
  canvas.parent('sketch');
  for(var i = 0; i < columns+1; i++){
    var vecs = [];
    for (var j = 0; j < rows+1; j++) {
      vecs.push(createVector(i*(width/columns), j*(height/rows),0));
    }
    mesh.push(vecs);
  }
}

function  draw(){
background(128);
    for(var i = 0; i < columns+1; i++){
    for (var j = 0; j < rows+1; j++) {
      mesh[i][j].x += random(-0.5,0.5);
      mesh[i][j].y += random(-0.5,0.5);
    }
  }
  for(var c = 0; c < columns;c++){
    for(var r = 0; r < rows; r++){
    beginShape();
    vertex(mesh[c][r].x, mesh[c][r].y);
    vertex(mesh[c+1][r].x, mesh[c+1][r].y);
    vertex(mesh[c+1][r+1].x, mesh[c+1][r+1].y);
    vertex( mesh[c][r+1].x, mesh[c][r+1].y);
    endShape(CLOSE);
    }
  }
}
