
var temp_x1 = 0;
var temp_y1 = 0;
var temp_x2 = 0;
var temp_y2 = 0;
var temp_x3 = 0;
var temp_y3 = 0;
var temp_x4 = 0;
var temp_y4 = 0;

function setup(){


createCanvas(600,400);
background(0);

temp_x1 = random(0, width/2);
temp_y1 = random(0,height/2);
temp_x2 = random(width/2+1, width);
temp_y2 = random(0,height/2);
temp_x4 = random(0, width/2);
temp_y4 = random(height/2+1,height);
temp_x3 = random(width/2+1, width);
temp_y3 = random(height/2+1,height);
}

function draw() {
colorMode(HSB,360,100,100,100);

//pointing legs n opposite qudrant?
if (temp_y1>temp_y2 && temp_x1>temp_x4) { //how to combine conditions
	stroke(0, 100,100, 100);//red
}	else{
	stroke(130, 100, 100, 100);//green
}
//is left leg close to the half width
if (temp_x1 && temp_x4 > width/4){ 
	stroke(240, 100,100, 100);//blue

}

strokeWeight(5);
noFill();
	
beginShape();
vertex(temp_x1, temp_y1);
vertex(temp_x2, temp_y2);
vertex(temp_x3, temp_y3);
vertex(temp_x4, temp_y4);
endShape(CLOSE);


}
