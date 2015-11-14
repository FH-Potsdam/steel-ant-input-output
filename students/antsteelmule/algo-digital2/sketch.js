var a = 2;

var b =0.301;

var aS = 0.004;

var bs = 0.001;

var count = 100;

 //source: http://digitaldesign.flause.org/?p=667

 var w = window, 
 wX = w.innerWidth,
 wY = w.innerHeight;

function setup() {

createCanvas(600,650);

smooth();

background(128, 109, 87);

noFill();

stroke(200,200);

}


function draw(){


if(count == 1) {

fill (255, 5);

//rect (0,0, width, height);

noFill();

count =10;

}

count ++;



translate(width/2,
height/7); // koordinatensystem im Mittelpunkt
translate(cos(a)*500, sin(b)*300);

rotate(a*5);

stroke(100*sin(a),
150*cos(b), 10*sin (a));

strokeWeight (0.1);

rect(0,0,100
+80*tan(pow(b, 2)),100);
// heart is rect

a += aS;

b += aS;

}