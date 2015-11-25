
var time = 0;



function setup(){

  setTimeout(function(){
     window.location.reload(1);
  }, 60000);

  var dt = new Date();
  var hour = dt.getHours();
  var minutes = dt.getMinutes();

  // var dt = new Date();
  // var hour = 3;
  // var minutes = dt.getMinutes();

  var minutesX_ = (minutes % 10);
  var minutes_X = round((minutes/10)-0.5);

  console.log("minutes_X:%s", minutes_X);
  console.log("minutesX_:%s", minutesX_);


  time = (hour % 12);
    if (hour === 12){
      time = 12;
    }

    if (hour === 0){
      time = 12;
    }


createCanvas(windowWidth-15, windowHeight-15);


  var counterHour = 0;
  var points = [];

  for(var i = 1; i < 360; i += (360/time)){

    var xOffset = random(300, 10);
    var yOffset = random(250, 10);

    var x = sin(radians(i))*xOffset + width/2;
    var y = cos(radians(i))*yOffset + height/3;
    var p = {"x":x,"y":y,"name":counterHour};
    points.push(p);
    var x1 = sin(radians(i))*220 + width/2;
    var y1 = cos(radians(i))*220 + height/3;
    vertex(x, y);

    text(counterHour, x1 ,y1);
    console.log("iteration i:%s x:%s y:%s",i, x, y);
    counterHour++;

  }

  // endShape(CLOSE);

  // background(254, 208, 106);
  background(240, 240, 240);
    strokeWeight(2);
      noFill();



beginShape();
for(var j = 0; j < points.length; j++){
  var onepoint = points[j];

  // var secondpoint = null;
  // if(j == points.length -1){
  //   secondpoint = points[0];
  //
  // }else{
  //   secondpoint = points[j +1];
  //
  // }

    var px = onepoint.x;
    var py = onepoint.y;
  console.log("iteration j:%s x:%s y:%s", j, px, py);
    stroke(150,150,150);
    vertex(px,py);

    if (time === 1){
      strokeWeight(3);
      point(px, py);
    }
}

endShape(CLOSE);

var firstPoint = points[0];
var pastPoint = points[points.length-2];

stroke(0,0,0);

for(var k=0; k < minutesX_; k++){
  var currX_ = random(3,280);
  var currY_ = random(40,150);
  if(time == 1){
    strokeWeight(7);
    var currX_1 = random(10,60);
    point((width/2 - currX_1), (height/2 - currY_));
    strokeWeight(2);
    line((width/2 - currX_1), (height/2 - currY_), firstPoint.x, firstPoint.y);
  } else if (time == 2) {
    var currX_2 = random(10,60);
    strokeWeight(7);
    point((pastPoint.x - currX_2), (pastPoint.y - currY_));
    strokeWeight(2);
    line((pastPoint.x - currX_2), (pastPoint.y - currY_), firstPoint.x, firstPoint.y);
  } else if (time > 2){
    strokeWeight(7);
    point(firstPoint.x + currX_, firstPoint.y + currY_);
    strokeWeight(2);
    line(firstPoint.x + currX_, firstPoint.y + currY_, firstPoint.x, firstPoint.y);
  }
}


for(var l=0; l < minutes_X; l++){
  var curr_X = random(3,280);
  var curr_Y = random(40,150);
    if(time == 1){
    strokeWeight(3);
    point((width/2 + curr_X), (height/2 - curr_Y));
    strokeWeight(1);
    line((width/2 + curr_X), (height/2 - curr_Y), firstPoint.x, firstPoint.y);
  } else if (time == 2) {
    strokeWeight(3);
    point((pastPoint.x + curr_X), (pastPoint.y - curr_Y));
    strokeWeight(1);
    line((pastPoint.x + curr_X), (pastPoint.y - curr_Y), firstPoint.x, firstPoint.y);
  } else if(time > 2){
    strokeWeight(3);
    point(firstPoint.x - curr_X, firstPoint.y + curr_Y);
    strokeWeight(1);
    line(firstPoint.x - curr_X, firstPoint.y + curr_Y, firstPoint.x, firstPoint.y);
  }
}
}


function draw(){
}
