
var particles = [];

function runPSystem (){
  colorMode(HSB,360,100,100,100);

  for (var i = 0; i < particles.length;i++) {
    particles[i].run();
  }
}

function particle (x, y, w, h){
 this.x = x;
 this.y = y;
 this.w = w;
 this.h = h;
 this.counter = 0;
 this.rotation = 0;
 this.factorX = random(1,3);
 this.factorY = random(1,3);
 console.log("1. X-factor: " + this.factorX);
 console.log("1. Y-factor: " + this.factorY);


 this.display = function(){

    noFill();
    stroke(140,60,50,10);
    push();// set the matrix so it is always centered
    translate(this.x, this.y);// push it to our position
    rectMode(CENTER);// we want the rect to be centered
    rotate(radians(this.rotation));// rotate it takes radians as arg
    rect(0, 0, this.w, this.h);// draw the particle
    pop();// push the matrix back

 };


 this.turn = function(){
  this.rotation++;
 };
 this.move = function(){

   var borderX = width/20;
   var borderY = width/20 - borderX/2;
   var dateWidth = width/6;
   var dateHeight = height/28;
   var rectWidth = dateWidth * 1.5;
   var rectHeight = dateHeight * 3;


   if (this.counter === 0){
     this.x++;
     if (this.x > width - borderX * this.factorX){
       this.counter = 1;
     }
   }

    if (this.counter === 1){
      this.y++;
      if (this.y > height - borderY * this.factorY){
        this.counter = 2;
      }
    }

    if (this.counter === 2){
      this.x--;
      if (this.x < borderX * this.factorX){
        this.counter = 3;
      }
    }

    if (this.counter === 3){
      this.y--;
      if (this.y < borderY * this.factorY){
        this.counter = 0;
      }
    }

 };
 this.update = function(){
  this.turn();
  this.move();
 };
 this.run = function(){
  this.display();
  this.update();
 }
}

//-------------------

var particles2 = [];

function runPSystem2 (){

  for (var i = 0; i < particles2.length;i++) {
    particles2[i].run2();
  }

};

function particle2 (x2, y2, w2, h2){
 this.x2 = x2;
 this.y2 = y2;
 this.w2 = w2;
 this.h2 = h2;
 this.counter2 = 0;
 this.rotation2 = 0;
 this.factorX = random(2.0,6.8);
 this.factorY = random(2.0,6.8);
 console.log("2. X-factor: " + this.factorX);
 console.log("2. Y-factor: " + this.factorY);


 this.display2 = function(){

    stroke(200,50,55,10);
    push();// set the matrix so it is always centered
    translate(this.x2, this.y2);// push it to our position
    rectMode(CENTER);// we want the rect to be centered
    rotate(radians(this.rotation2));// rotate it takes radians as arg
    rect(0, 0, this.w2, this.h2);// draw the particle
    pop();// push the matrix back

 };



 this.turn2 = function(){
  this.rotation2++;
 };
 this.move2 = function(){

   var borderX = width/20;
   var borderY = width/20 - borderX/2;
   var dateWidth = width/6;
   var dateHeight = height/28;
   var rectWidth = dateWidth * 1.5;
   var rectHeight = dateHeight * 3;

   if (this.counter2 === 0){
     this.x2++;
     if (this.x2 > width - borderX * this.factorX){
       this.counter2 = 1;
     }
   }

    if (this.counter2 === 1){
      this.y2++;
      if (this.y2 > height - borderX * this.factorY){
        this.counter2 = 2;
      }
    }

    if (this.counter2 === 2){
      this.x2--;
      if (this.x2 < borderX * this.factorX){
        this.counter2 = 3;
      }
    }

    if (this.counter2 === 3){
      this.y2--;
      if (this.y2 < borderX * this.factorY){
        this.counter2 = 0;
      }
    }


 };
 this.update2 = function(){
  this.turn2();
  this.move2();
 };
 this.run2 = function(){
  this.display2();
  this.update2();
 };
}

//----------------


var particles3 = [];


function runPSystem3 (){

  for (var i = 0; i < particles3.length;i++) {
    particles3[i].run3();
  }

};

function particle3 (x3, y3, w3, h3){
 this.x3 = x3;
 this.y3 = y3;
 this.w3 = w3;
 this.h3 = h3;
 this.counter3 = 0;
 this.rotation3 = 0;
 this.factorX = random(1.5,5);
 this.factorY = random(1.5,5);
 console.log("3. X-factor: " + this.factorX);
 console.log("3. Y-factor: " + this.factorY);

 this.display3 = function(){

    stroke(260,50,80,8);
    push();// set the matrix so it is always centered
    translate(this.x3, this.y3);// push it to our position
    rectMode(CENTER);// we want the rect to be centered
    rotate(radians(this.rotation3));// rotate it takes radians as arg
    rect(0, 0, this.w3, this.h3);// draw the particle
    pop();// push the matrix back

 };



 this.turn3 = function(){
  this.rotation3++;
 };
 this.move3 = function(){

   var borderX = width/20;
   var borderY = width/20 - borderX/2;
   var dateWidth = width/6;
   var dateHeight = height/28;
   var rectWidth = dateWidth * 1.5;
   var rectHeight = dateHeight * 3;


   if (this.counter3 === 0){
     this.y3--;
     if (this.y3 < height/2 - borderX * this.factorY){
       this.counter3 = 1;
     }
   }

    if (this.counter3 === 1){
      this.x3++;
      if (this.x3 > width/2 + borderX * this.factorX){
        this.counter3 = 2;
      }
    }

    if (this.counter3 === 2){
      this.y3++;
      if (this.y3 > height/2 + borderX * this.factorY){
        this.counter3 = 3;
      }
    }

    if (this.counter3 === 3){
      this.x3--;
      if (this.x3 < width/2 - borderX * this.factorX){
        this.counter3 = 0;
      }
    }
 };
 this.update3 = function(){
  this.turn3();
  this.move3();
 };
 this.run3 = function(){
  this.display3();
  this.update3();
 };
}



function setup() {

  createCanvas(600,600);

  var fluke1 = random(10);
  var fluke2 = random(10);
  var fluke3 = random(10);
  var borderX = width/20;
  var borderY = width/20 - borderX/2;
  var dateWidth = width/6;
  var dateHeight = height/28;
  var rectWidth = dateWidth * 1.5;
  var rectHeight = dateHeight * 3;

  //background
  fill(0,0,0,0);
  noStroke();
  rect(0, 0, width, height);

  rectMode(CENTER);
  strokeWeight(0.5);

  //Date
  if(fluke1>=7.5){
    particles.push(new particle(borderX + dateWidth/2, borderY + dateHeight/2, dateWidth, dateHeight));
  }else if(fluke1>=5){
    particles.push(new particle(width - borderX - dateWidth/2, borderY + dateHeight/2, dateWidth, dateHeight));
  }else if(fluke1>=2.5){
    particles.push(new particle(borderX + dateWidth/2, borderY * 4 + dateHeight + rectHeight + rectHeight + dateHeight/2, dateWidth, dateHeight));
  }else{
    particles.push(new particle(width - borderX - dateWidth/2, borderY * 4 + dateHeight + rectHeight + rectHeight + dateHeight/2, dateWidth, dateHeight));
  };

  //addressee
  if(fluke2>=6.67){
    particles2.push(new particle2(borderX + rectWidth/2, borderY * 3 + dateHeight + rectHeight + rectHeight/2, rectWidth, rectHeight));
  }else if(fluke2>= 3.34){
    particles2.push(new particle2(width/2, borderY * 2 + dateHeight + rectHeight/2, rectWidth, rectHeight));
  }else{
    particles2.push(new particle2(width - borderX - rectWidth/2, borderY * 3 + dateHeight + rectHeight + rectHeight/2, rectWidth, rectHeight));
  };

  //sender
  if(fluke3>=6.67){
    particles3.push(new particle3(borderX + rectWidth/2, borderY * 2 + dateHeight + rectHeight/2, rectWidth, rectHeight));
  }else if(fluke3>=3.34){
    particles3.push(new particle3(width - borderX - rectWidth/2, borderY * 2 + dateHeight + rectHeight/2, rectWidth, rectHeight));
  }else{
    particles3.push(new particle3(width/2, height - borderY - dateHeight/2, dateWidth * 3, dateHeight));
  };

  //check
  /*console.log("fluke1 is " + fluke1);
  console.log("fluke2 is " + fluke2);
  console.log("fluke3 is " + fluke3);
*/

}


function mousePressed() {

}

function draw() {
  colorMode(HSB,360,100,100,100);
  //fill(180,0,100,5);
  //rect(0,0,1200,1200);
  noFill();
  runPSystem();
  runPSystem2();
  runPSystem3();
}

function keyTyped(){
  if(key == "s"){
    console.log("s");
    saveCanvas("img","png");
  }
}
