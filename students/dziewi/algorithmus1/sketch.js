// getting started with p5js
var theta;

function setup(){
  createCanvas(640,400);
  background(255);

}
function draw(){
  theta =(PI/6);
  strokeWeight(2);
  translate(width/2,height);
  line(0,0,0,-50);
  translate(0,-50);

push(); //saving the point
    //  Branch to the right
  rotate(theta);
              //  Branch to the right
  line(0,0,0,-50);
  translate(0,-50);
  rotate(-theta);
//  Branch to the left
line(0,0,0,-50);
            //  Branch to the right
            rotate(theta);
line(0,0,0,-50);
translate (0,-50);

pop(); //going back to starting point


push(); //saving the point
  rotate(theta);
//  Branch to the right
  line(0,0,0,-50);
  translate(0,-50);

pop(); //going back to starting point
  rotate(-theta);
//  Branch to the left
  line(0,0,0,-50);
  translate (0,-50);
  push(); //saving the point
    rotate(theta);
  //  Branch to the right
    line(0,0,0,-50);
    translate(0,-50);

  pop(); //going back to starting point
    rotate(-theta);
  //  Branch to the left
    line(0,0,0,-50);
    translate(0,-50);
    push(); //saving the point
      rotate(theta);
    //  Branch to the right
      line(0,0,0,-50);
      translate(0,-50);

    pop(); //going back to starting point
      rotate(-theta);
    //  Branch to the left
      line(0,0,0,-50);
      translate(0,-50);





}
