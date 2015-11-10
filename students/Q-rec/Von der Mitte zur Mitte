var x= 4
var y= 4
var posx= 0
var posy= 250
var pos2x=100
var pos2y=250
var pos3x=100
var pos3y=400
var pos4y=250


function setup() {
  //colorMode(HSB,360,100,100,100);
  createCanvas(500,500);
  ellipse(random(0, height),250,x,y);
}


function draw() {

  fill(0);
  stroke(0);
  ellipse(posx,posy,x,y);//moving line
  posx=posx+1

if(posx>pos2x){//erste abbiegung
    posy=posy+1
    posx=posx-1
  }
 if(posy>pos3y){//zweite abbiegung
  posy=posy-1
  posx=posx+1
}
  if(posx>pos4y){// dritte abbiegung
  posy=posy+1
  posx=posx-1
}


  if(posx>480){
    posx=posx-1
    posy=posy+1
  }
  //if(posy>480){
  //  posx=posx+1
  //  posy=posy-1

  //}
}
