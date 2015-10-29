var x =0;
var y =250;
var w =5;
var h =5;



function setup() {
  createCanvas(500,500);
  background(255,255,255);

}
function draw() {
  fill(0);
  stroke(0);
  ellipse (x,y,w,h);
  x=x +random(-2,3);
  y=y +random(-4,4);


}
