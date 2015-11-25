// Canvas size
var w = 600;
var h = 600;

var pos = w/3 - 100;
var center = [w/2, h/2];

// p1 coordinates
var x1 = center[0];
var y1 = center[1] - pos;

// p2 coordinates
var x2 = center[0] - pos;
var y2 = center[1] + pos;

// p3 coordinates
var x3 = center[0] + pos;
var y3 = center[1] + pos;

// Our 3 triangle points
var p1 = [x1,y1];
var p2 = [x2,y2];
var p3 = [x3,y3];

// Iterations or number of points between 2 triangle points
var steps;
var minSteps = 50;
var maxSteps = 150;

var translateStartPoint;
var minTranslateStartPoint = 10;
var maxTranslateStartPoint = 40;

var translateIncrement;
var minTranslateIncrement = 1;
var maxTranslateIncrement = 5;

function setup() {
	// Executed once
	colorMode (HSB, 360, 100, 100, 100);
	createCanvas(w, h);
	// Non stop function
	background(0);

	translateIncrement = random(minTranslateIncrement, maxTranslateIncrement);
	translateStartPoint = random(minTranslateStartPoint, maxTranslateStartPoint);
	steps = random(minSteps, maxSteps);

	// We want to find as many as "steps" points between the three points of our triangle.
	// That means we want to get "steps" points between p1 and p2; p2 and p3; p3 and p1.
	// In other words, p1 will become p2 after iteration "steps" times; p2 will become p3
	// and p3 will become p1.
	p1_p2_steps = calc_steps(p1, p2, steps); // "steps" points between p1 and p2
	p2_p3_steps = calc_steps(p2, p3, steps); // "steps" points between p2 and p3
	p3_p1_steps = calc_steps(p3, p1, steps); // "steps" points between p3 and p1
}

/**
 * Iterates _step times by creating (x, y) coordinates between p_1 and p_2 points
 */
function calc_steps (p_1, p_2, _step) {
	var arr = [];

	for (var i = (1/_step); i < 1; i+=(1/_step)) {
		// To know what lerp does see more in http://p5js.org/reference/#/p5/lerp
		var x = lerp(p_1[0], p_2[0], i);
		var y = lerp(p_1[1], p_2[1], i);
		arr.push([x,y]);
	}
	return arr;
}

function draw() {
	for (var i = 0; i < steps-1; i++) {
		
		fill(100, 0, 100, i+2); //+2 because we don't want that the full white color appear
		noStroke();

		translate(translateStartPoint, translateStartPoint);
		// Create a triangle using the points calculated within function calc_steps(p_1, p_2, _step).
		triangle(p1_p2_steps[i][0], p1_p2_steps[i][1],  // p4 -> (x4, y4)
				 p2_p3_steps[i][0], p2_p3_steps[i][1],  // p5 -> (x5, y5)
				 p3_p1_steps[i][0], p3_p1_steps[i][1]); // p6 -> (x6, y6)

		translateStartPoint = translateStartPoint - translateIncrement;
	}
	noLoop();
}