/**
 * A Simple sketch that demonstrates the saving of images
 */
var i = 0; // this is just for displaying things
var a = 0;// this is just for displaying things
function setup() {
  //executed once
}

function draw() {
  // draw something to save
  background(255,10);
  noFill();
  arc(width / 2, height / 2, i%width, i%width, a%360, a%360*-1, OPEN);
  a++;
  i += 5;

  // now here it is
  // we can save images based on events like counting up within draw
  if(frameCount%1000 === 999){
    saveCanvas("img","png");
  }
}

function keyTyped(){
// or we can use a keyTyped function. Try it out if you type the key s
// it will save an image for you
  if(key == "s"){
    console.log("s");
    saveCanvas("img","png");
  }
}