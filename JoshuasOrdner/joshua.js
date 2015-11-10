var width = 1200;
var height = 700;
var cW = width/2;
var cH = height/2;

var xl1 = Math.floor(Math.random()*(width/2 - 0 + 1) + 0);
var yl1 = Math.floor(Math.random()*(height/2 - 0 + 1) + 0);
var xl2 = Math.floor(Math.random()*(width - width/2 + 1) + width/2);
var yl2 = Math.floor(Math.random()*(height/2 - 0 + 1) + 0);
var xl4 = Math.floor(Math.random()*(width/2 - 0 + 1) + 0);
var yl4 = Math.floor(Math.random()*(height - height/2 + 1) + height/2);
var xl3 = Math.floor(Math.random()*(width - xl2 + 1) + xl2);
var yl3 = Math.floor(Math.random()*(height - yl4 + 1) + yl4);

var xpo1 = Math.floor(Math.random()*(xl1 - 1 + 1) + 1);
var ypo1 = Math.floor(Math.random()*(yl1 - 1 + 1) + 1);
var xpo2 = Math.floor(Math.random()*(xl1 - 1 + 1) + 1);
var ypo2 = Math.floor(Math.random()*(yl1 - 1 + 1) + 1);
var xpo3 = Math.floor(Math.random()*(xl1 - 1 + 1) + 1);
var ypo3 = Math.floor(Math.random()*(yl1 - 1 + 1) + 1);
var xpo4 = Math.floor(Math.random()*(xl1 - 1 + 1) + 1);
var ypo4 = Math.floor(Math.random()*(yl1 - 1 + 1) + 1);

var xpi1 = Math.floor(Math.random()*(xl2 - width/2 + 1) + width/2);
var ypi1 = Math.floor(Math.random()*(yl4 - height/2 + 1) + height/2);
var xpi2 = Math.floor(Math.random()*(xl2 - width/2 + 1) + width/2);
var ypi2 = Math.floor(Math.random()*(yl4 - height/2 + 1) + height/2);
var xpi3 = Math.floor(Math.random()*(xl2 - width/2 + 1) + width/2);
var ypi3 = Math.floor(Math.random()*(yl4 - height/2 + 1) + height/2);
var xpi4 = Math.floor(Math.random()*(xl2 - width/2 + 1) + width/2);
var ypi4 = Math.floor(Math.random()*(yl4 - height/2 + 1) + height/2);



function setup(){
  createCanvas(1200, 700);
}



function draw(){

  background(254, 208, 106);


    function drawLines(){
      strokeWeight(5);
      line(xl1, yl1, xl2, yl2);
      line(xl2, yl2, xl3, yl3);
      line(xl3, yl3, xl4, yl4);
      line(xl4, yl4, xl1, yl1);
    }

    function drawPointsOut(){
      strokeWeight(10);
      point(xpo1, ypo1);
      point(xpo2, ypo2);
      point(xpo3, ypo3);
      point(xpo4, ypo4);
    }

    function drawPointsIn(){
      strokeWeight(4);
      point(xpi1, ypi1);
      point(xpi2, ypi2);
      point(xpi3, ypi3);
      point(xpi4, ypi4);
    }

    function drawConnectOut(){
      strokeWeight(1);
      line(xpo1, ypo1, xl1, yl1);
      line(xpo2, ypo2, xl1, yl1);
      line(xpo3, ypo3, xl1, yl1);
      line(xpo4, ypo4, xl1, yl1);
    }

    function drawConnectIn(){
      strokeWeight(1);
      line(xpi1, ypi1, xl3, yl3);
      line(xpi2, ypi2, xl3, yl3);
      line(xpi3, ypi3, xl3, yl3);
      line(xpi4, ypi4, xl3, yl3);
    }

      drawLines();
      drawPointsOut();
      drawPointsIn();
      drawConnectOut();
      drawConnectIn();


// Bewegung 4eck

  xl1 = xl1 - 0.5;
    if(xl1 < 0){
      xl1 = cW;
      yl1 = cH;
      myhue = 125;
    }
    if(xl1 > width){
      xl1 = cW;
      yl1 = cH;
      myhue = 125;
    }

  yl1 = yl1 - 0.5;
    if(yl1 < 0){
      xl1 = cW;
      yl1 = cH;
      myhue = 125;
    }
    if(yl1 > height){
      xl1 = cW;
      yl1 = cH;
      myhue = 125;
    }

  xl2 = xl2 + 0.5;
    if(xl2 < 0){
      xl2 = cW;
      yl2 = cH;
      myhue = 125;
    }
    if(xl2 > width){
      xl2 = cW;
      yl2 = cH;
      myhue = 125;
    }

  yl2 = yl2 - 0.5;
    if(yl2 < 0){
      xl2 = cW;
      yl2 = cH;
      myhue = 125;
    }
    if(yl2 > height){
      xl2 = cW;
      yl2 = cH;
      myhue = 125;
    }

  xl3 = xl3 + 0.5;
    if(xl3 < 0){
      xl3 = cW;
      yl3 = cH;
      myhue = 125;
    }
    if(xl3 > width){
      xl3 = cW;
      yl3 = cH;
      myhue = 125;
    }

  yl3 = yl3 + 0.5;
    if(yl3 < 0){
      xl3 = cW;
      yl3 = cH;
      myhue = 125;
    }
    if(yl3 > height){
      xl3 = cW;
      yl3 = cH;
      myhue = 125;
    }

  xl4 = xl4 - 0.5;
    if(xl4 < 0){
      xl4 = cW;
      yl4 = cH;
      myhue = 125;
    }
    if(xl4 > width){
      xl4 = cW;
      yl4 = cH;
      myhue = 125;
    }

  yl4 = yl4 + 0.5;
    if(yl4 < 0){
      xl4 = cW;
      yl4 = cH;
      myhue = 125;
    }
    if(yl4 > height){
      xl4 = cW;
      yl4 = cH;
      myhue = 125;
    }


// Bewegung große Punkte

  xpo1 = xpo1 - 1.5;
    if(xpo1 < 0){
      point(xpo1, ypo1);
      xpo1 = xl1;
      ypo1 = yl1;
    }

  ypo1 = ypo1 - 1.5;
    if(ypo1 < 0){
      point(xpo1, ypo1);
      xpo1 = xl1;
      ypo1 = yl1;
    }

  xpo2 = xpo2 - 1.5;
    if(xpo2 < 0){
      point(xpo2, ypo2);
      xpo2 = xl2;
      ypo2 = yl2;
    }

  ypo2 = ypo2 - 1.5;
    if(ypo2 < 0){
      point(xpo2, ypo2);
      xpo2 = xl2;
      ypo2 = yl2;
    }

  xpo3 = xpo3 - 1.5;
    if(xpo3 < 0){
      point(xpo3, ypo3);
      xpo3 = xl3;
      ypo3 = yl3;
    }

  ypo3 = ypo3 - 1.5;
    if(ypo3 < 0){
      point(xpo3, ypo3);
      xpo3 = xl3;
      ypo3 = yl3;
    }

  xpo4 = xpo4 - 1.5;
    if(xpo4 < 0){
      point(xpo4, ypo4);
      xpo4 = xl4;
      ypo4 = yl4;
    }

  ypo4 = ypo4 - 1.5;
    if(ypo4 < 0){
      point(xpo4, ypo4);
      xpo4 = xl4;
      ypo4 = yl4;
    }



// Bewegung kleine Punkte

  xpi1 = xpi1 + 1;
    if(xpi1 > width){
      point(xpi1, ypi1);
      xpi1 = xl1;
      ypi1 = yl1;
    }

  ypi1 = ypi1 + 1;
    if(ypi1 > height){
      point(xpi1, ypi1);
      xpi1 = xl1;
      ypi1 = yl1;
    }

  xpi2 = xpi2 + 1;
    if(xpi2 > width){
      point(xpi2, ypi2);
      xpi2 = xl2;
      ypi2 = yl2;
    }

  ypi2 = ypi2 + 1;
    if(ypi2 > height){
      point(xpi2, ypi2);
      xpi2 = xl2;
      ypi2 = yl2;
    }

  xpi3 = xpi3 + 1;
    if(xpi3 > width){
      point(xpi3, ypi3);
      xpi3 = xl3;
      ypi3 = yl3;
    }

  ypi3 = ypi3 + 1;
    if(ypi3 > height){
      point(xpi3, ypi3);
      xpi3 = xl3;
      ypi3 = yl3;
    }

  xpi4 = xpi4 + 1;
    if(xpi4 > width){
      point(xpi4, ypi4);
      xpi4 = xl4;
      ypi4 = yl4;
    }

  ypi4 = ypi4 + 1;
    if(ypi4 > height){
      point(xpi4, ypi4);
      xpi4 = xl4;
      ypi4 = yl4;
    }
}
