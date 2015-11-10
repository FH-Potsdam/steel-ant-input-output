/* FUNCTIONS */

function runPSystem (){
  for (var i = particles.length-1; i >= 0; i--) {
    if( particles[i].isDead() ) {
      particles.splice(i, 1);
    } else {
      particles[i].run();
    }
  }
}

function particle ( h, s, l ){

  if( !looping ){
    this.vol = mic.getLevel();
    this.vY = map(this.vol, 0, 1, 1.5, 300);
    this.vX = map(this.vol, 0, 1, -10, 10);
  }else{
    this.vY = random(1.5, 100);
    this.vX = random(-10, 10);
  }

  this.location = createVector(random(0, width), height + this.vY);
  this.velocity = createVector(random(this.vX, 30), this.vY); // speed
  this.rotation = 0;
  this.lifespan = 180;

  colorMode(RGB)
  this.p = {
    settings: {
      size: this.vY,
      color: {
        r: 255,
        g: 255,
        b: 255
      }
    }
  };

 this.display = function(){

   colorMode( HSL )

   if( this.vY >= 18 ) {
     l = 65;
     stroke(h, s, l, this.lifespan - 80);
     line(width / 2, height / 2, this.location.x, this.location.y);
   }


    noStroke();

    l = 80;

    fill(h, s, l, this.lifespan);
    push();
    ellipse(this.location.x, this.location.y, this.p.settings.size, this.p.settings.size);

    if( this.vY >= 10 ) {
      l = 65;

      stroke(h, s, l, this.lifespan - 130);
      strokeWeight(1);

      l = 69;
      colorMode( HSL )
      fill(h, s, l, this.lifespan - 165);
      ellipse(width / 2, height / 2, this.vY  * 8, this.vY * 8);
    }

    pop();
 };

 this.isDead = function() {
   if( this.lifespan < 0 ) {
     return true;
   } else {
     return false;
   }
 };

 this.move = function(){
    this.location.x = this.location.x + this.velocity.x;
    this.location.y = this.location.y + -this.velocity.y;
    this.lifespan--;
    this.rotation++;
 };

 this.update = function(){
  this.move();
 };

 this.run = function(){
   this.update();
   this.display();
 };

}
