var a = 2;

var b =0.301;

var aS = 0.004;

var bs = 0.001;

var count = 10;

function setup() {

createCanvas(800,800);

smooth();

background(255);

noFill();

stroke(0,500);

}


function draw(){

if(count == 10) {

fill (255, 5);

//rect (0,0, width, height);

noFill();

count =0;

}

count ++;

 

translate(width/2,
height/2); // koordinatensystem im Mittelpunkt
translate(cos(a)*500, sin(b)*300);

rotate(a*5);

stroke(10*sin(a),
150*cos(b), 10*sin (a));

strokeWeight (0.1);

ellipse(0,0,100
+80*tan(pow(b, 2)),100);

a += aS;

b += aS;

}