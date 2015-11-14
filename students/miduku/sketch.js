var h = 360,
		s = 0,
		b = 100,
		a = 100;

var h2 = 12,
		s2 = 40,
		b2 = 23,
		a2 = 100;

var h3 = 0,
		s3 = 0,
		b3 = 15,
		a3 = 100,
		a3Wipe = 40;

// vars for line
var eX, eY, // position
		eX2, eY2,
		eW = 1; // width

// for bounces on wall
var bounces = 0,
		bouncesMax,
		bouncesTotal = 0; // current total amount of bounces

// for conversion from polar to cartesian coordinates.
// basically getting x and y from an angle and a radius.
// angle: 0 to 360 ... duh
var angle,
		radius ; // sets the speed

var angleOff = 0.0;

var quadrant;

var wall;	// which wall? t,r,b,l?

// for Dot
var dot = [];

// for saving position of corner of triangle
var tWallPosX = [],
		tWallPosY = [],
		triangle = [];

// for filling whole document
var w = window,
		wX = w.innerWidth/2,
		wY = w.innerHeight/2;


/*
* only executed once
*/
function setup(){
	// change color mode to hsl
	colorMode(HSB, 360, 100, 100, 100);
	var bgrColor = color(h3, s3, b3);

	var c = createCanvas(wX, wY);
			c.parent("container");

	// start line at...
	eX = random(0,width);
	eY = 0;
	angle = radians(random(1,179));
	radius = 20; //speed of line drawing
	bouncesMax = 4;

	// rectangle/background
	background(bgrColor);
}


/*
* this will be executed all the time
*/
function draw(){
	// angleOff += 0.01;
	// var nOff = noise(angleOff)*10;

	// jitter
	eW = random(0.5,1.5);
	angle += radians(random(-1,1));

	// translate from angle: polar to cartesian coordianates
	eX += cartesianX(radius,angle);
	eY += cartesianY(radius,angle);

	
	// DRAW LINE
	stroke(h,s,b,a);
	strokeWeight(eW);
	line(eX,eY, eX2,eY2);


	// quadrants:
	// 1: 0° - 90°
	// 2: 90° - 180°
	// 3: 180° - 270°
	// 4: 270° - 360°
	if (angle >= radians(0) && angle < radians(90)) {
		quadrant = 1;
	}
	else if (angle >= radians(90) && angle < radians(180)) {
		quadrant = 2;
	}
	else if (angle >= radians(180) && angle < radians(270)) {
		quadrant = 3;
	}
	else if (angle >= radians(270) && angle < radians(360)) {
		quadrant = 4;
	}

	// wall sides
	if (eY < 0) {
		wall = 1;
	}
	else if (eX > width) {
		wall = 2;
	}
	else if (eY > height) {
		wall = 3;
	}
	else if (eX < 0) {
		wall = 4;
	}

	// if bounce from specific wall from specific angle
	// 0° - 90°
	if (quadrant === 1 && wall === 2) { // right
		angle += radians(90);
		bounces++;
		eX = width;
	}
	else if (quadrant === 1 && wall === 3) { // bottom
		angle -= radians(90);
		bounces++;
		eY = height;
	}
	// 90° - 180°
	else if (quadrant === 2 && wall === 3) { // bottom
		angle += radians(90);
		bounces++;
		eY = height;
	}
	else if (quadrant === 2 && wall === 4) { // left
		angle -= radians(90);
		bounces++;
		eX = 0;
	}
	// 180° - 270°
	else if (quadrant === 3 && wall === 4) { // left
		angle += radians(90);
		bounces++;
		eX = 0;
	}
	else if (quadrant === 3 && wall === 1) { // top
		angle -= radians(90);
		bounces++;
		eY = 0;
	}
	// 270° - 360°
	else if (quadrant === 4 && wall === 1) { // top
		angle += radians(90);
		bounces++;
		eY = 0;
	}
	else if (quadrant === 4 && wall === 2) { // right
		angle -= radians(90);
		bounces++;
		eX = width;
	}

	// stay in 360°
	if (angle >= radians(360)) {
		angle -= radians(360);
	}
	else if (angle < radians(0)) {
		angle += radians(360);
	}

	if (frameCount === 1) {
		dot[bouncesTotal] = new Dot();
		dot[bouncesTotal].show();
	}
	// if specific amount of bouncing, reset position
	if (bounces > bouncesMax) {
		noStroke();
		// eX = random(0,width);
		// eY = 0;	
		angle = radians(random(0,180));
		bounces = 0; // reset bounces counter
		frameCount = 1;
	}

	// if at wall-bounce, add thing
	if (eX === width || eY === height || eX === 0 || eY === 0) {

		// save position at wall
		tWallPosX[bouncesTotal] = eX;
		tWallPosY[bouncesTotal] = eY;

		// create new Dot at wall
		dot[bouncesTotal] = new Dot();
		dot[bouncesTotal].show();
		triangle[bouncesTotal] = new Triangle();

		// draw triangle, start at third bounce
		if (bouncesTotal >= 2) {
			triangle[bouncesTotal].show();
		}

		// add count
		bouncesTotal++;
	}

	// fadeout effect
	background(h3, s3, b3, 1);

	// get last coordinate for drawing a line
	eX2 = eX;
	eY2 = eY;

	console.log(angle);
}


/*
* custom functions
*/
// create cartesian coordinates
function cartesianX(radius,angle) {
	var x = radius*cos(angle);

	return x;
}

function cartesianY(radius,angle) {
	var y = radius*sin(angle);

	return y;
}



/*
* Classes
*/
// Dot constructor
var Dot = function() {
	this.x = eX;
	this.y = eY;
	// this.width = eW;
	// this.color = color(h,s,b,a);
};

// show method
Dot.prototype.show = function() {
	noStroke();
	// fill(this.color);
	// ellipse(this.x,this.y, this.width*5,this.width*5);
};

// Triangle constructor
var Triangle = function() {
	this.x1 = tWallPosX[bouncesTotal];
	this.y1 = tWallPosY[bouncesTotal];
	this.x2 = tWallPosX[bouncesTotal-2];
	this.y2 = tWallPosY[bouncesTotal-2];

	// this.colorFill = color(h2,s2,b2,10);
	this.colorStroke = color(h,s,b,a);
};

Triangle.prototype.show = function() {
	stroke(this.colorStroke);
	// noFill();
	// noStroke();
	// fill(this.colorFill);

	// triangle(
	// 	this.x1,this.y1,
	// 	this.x2,this.y2,
	// 	this.x3,this.y3
	// );
line(
		this.x1,this.y1,
		this.x2,this.y2
	);
};