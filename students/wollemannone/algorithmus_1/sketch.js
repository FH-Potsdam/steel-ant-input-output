// getting started with p5js
var x = 0;
var y = 0;


//this is executed once
function setup(){
	colorMode(HSB, 360, 100, 100, 100);
	createCanvas(600,400);

	y = height/2;
	x = width/2;

	}



function draw(){


	background(0);
	fill(255,0,100);
	ellipse(x,y,50,50);




p1 = {x: 100, y: 26};
p2 = {x: 150, y: 300};
p3 = {x: 400, y: 61};
p4 = {x: 450, y: 250};
p5 = {x: 200, y: 150};



stroke(255, 0, 100, 100);
strokeWeight(5);


curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
curve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p5.x, p5.y);
curve(p3.x, p3.y, p4.x, p4.y, p5.x, p5.y, p5.x, p5.y);



strokeWeight(6);
stroke(200, 0, 80, 100);

point( p1.x, p1.y );
point( p2.x, p2.y );
point( p3.x, p3.y );
point( p4.x, p4.y );

}
