// Canvas size
var w = 650;
var h = 650;
var anim = 0;//for the animation
var fr = 5; //frame rate

var posBig = w/2 - 25;
var posSmall = w/2 - 100;
var center = [w/2, h/2];

// p1 coordinates
var x1 = center[0];
var y1 = center[1] - posBig;

// p2 coordinates
var x2 = center[0] - posBig;
var y2 = center[1] + posBig;

// p3 coordinates
var x3 = center[0] + posBig;
var y3 = center[1] + posBig;

// p1 coordinates
var x4 = center[0];
var y4 = center[1] - posSmall;

// p2 coordinates
var x5 = center[0] - posSmall;
var y5 = center[1] + posSmall;

// p3 coordinates
var x6 = center[0] + posSmall;
var y6 = center[1] + posSmall;

// Our 3 triangle points
var p1 = [x1,y1];
var p2 = [x2,y2];
var p3 = [x3,y3];

var p4 = [x4, y4];
var p5 = [x5, y5];
var p6 = [x6, y6];

// Iterations or number of points between 2 triangle points
var steps = 20; 

// Variable we will use to iterate through all the steps on big triangle
var iBig;

// Variable we will use to iterate through all the steps on big triangle
var iSmall;

function setup() {
	// Executed once
	colorMode (HSB, 360, 100, 100, 100);
	createCanvas(w, h);
	frameRate(fr);

	// We want to find as many as "steps" points between the three points of our triangle.
	// That means we want to get "steps" points between p1 and p2; p2 and p3; p3 and p1.
	// In other words, p1 will become p2 after iteration "steps" times; p2 will become p3
	// and p3 will become p1.
	// Big triangle
	p1_p2_steps = calc_steps(p1, p2, steps); // "steps" points between p1 and p2
	p2_p3_steps = calc_steps(p2, p3, steps); // "steps" points between p2 and p3
	p3_p1_steps = calc_steps(p3, p1, steps); // "steps" points between p3 and p1

	// Small triangle
	p4_p5_steps = calc_steps(p4, p5, steps); // "steps" points between p4 and p5
	p5_p6_steps = calc_steps(p5, p6, steps); // "steps" points between p5 and p6
	p6_p4_steps = calc_steps(p6, p4, steps); // "steps" points between p6 and p4

	// Iterates in clockwise direction
	iBig = p1_p2_steps.length-1;

	// Iterates in anti-clockwise direction
	iSmall = 0;

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
	// Non stop function
	background (0, 0, 0);
	
    var deckkraft = 50; //max. level of transparency
    var deckkraftStep = 20/p1_p2_steps.length; //transparencysteps
    

	for(var i = 0; i < anim;i++){
		
		fill (100, 0, 100, deckkraft); //color
	triangle(p1_p2_steps[i][0], p1_p2_steps[i][1],  // p1 -> (x1, y1)
			 p2_p3_steps[i][0], p2_p3_steps[i][1],  // p2 -> (x2, y2)
		 	 p3_p1_steps[i][0], p3_p1_steps[i][1]); // p3 -> (x3, y3)


			 
deckkraft = deckkraft - deckkraftStep;





 			 	}
 		anim++;
 		if(anim >= p1_p2_steps.length){
 			anim = 0; //step animation
 		}


	// Moving to next step
	iBig = iBig - 1;
	iSmall = iSmall + 1;
	
	// Reset
	if (iBig < 0) {
		iBig = p1_p2_steps.length-1;
	}
	if (iSmall > p4_p5_steps.length-1) {
		iSmall = 0;
	}
	
}