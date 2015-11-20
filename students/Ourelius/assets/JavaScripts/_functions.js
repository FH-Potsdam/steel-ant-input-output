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
    this.vY = map(this.vol, 0, 1, 1.5, 130);
    this.vX = map(this.vol, 0, 1, -10, 10);
  }else{
    this.vY = random(1.5, 20);
    this.vX = random(-10, 10);
  }

  this.location = createVector(random(-width, width), height + this.vY);
  this.velocity = createVector(random(this.vX, 10), this.vY); // speed
  this.rotation = 50;
  this.lifespan = 180;

  colorMode(RGB)
  this.p = {
    settings: {
      size: this.vY * 3,
      color: {
        r: 255,
        g: 255,
        b: 255
      }
    }
  };

 this.display = function(){

   colorMode( HSL )

   if( this.vY >= 8 ) {
     l = 60;
     stroke(h, s, l, this.lifespan - 20);
     bezier(width / 2, -100, this.location.x / 2, this.location.y * 2, this.location.y / 3, this.location.x * 3, this.location.x, this.location.y);
   }

    noStroke();

    l = 60;

    fill(h, s, l, this.lifespan);
    push();
    ellipse(this.location.x, this.location.y, this.p.settings.size, this.p.settings.size);

    if( this.vY >= 10 ) {
      l = 65;

      stroke(h, s, l, this.lifespan - 150);
      strokeWeight(1);

      l = 70;
      colorMode( HSL )
      noStroke();
      fill(h, s, l, this.lifespan - 150);
      //ellipse(width / 2, height / 2, this.vY  * 10, this.vY * 10);
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
