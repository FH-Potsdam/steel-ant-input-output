
var s,s2,x,x2,y,y2,w;

function setup() {

  // createCanvas(windowWidth, windowHeight);
  createCanvas(600,400);
 background(255); // Setzen den Hintergrund auf Weiß (0);

 s =0.0;
s2 =0.0;
 x =0.0;
 y =0.0;
 x2 =0.0;
 y2 =0.0;
 w = random(2,30);
 w2 =random(10,50);


}

function draw() {
 x += Math.cos(Math.PI/2 * (s*s));
 y -= Math.sin(Math.PI/2 * (s*s));
  s += 0.1;

fill ('#000');
 ellipse((x*20)+width/2,(y*20)+height/2,random(10,50),random(10,50));


 x2 += Math.cos(Math.PI/2 * (s2*s2));
 y2 -= Math.sin(Math.PI/2 * (s2*s2));
  s2 += 0.1;

fill('#FFF');
 ellipse((x2*20)+width/2,(y2*20)+height/2,w,w);

}
