
function setup() {
  createCanvas(
    c.settings.width,
    c.settings.height
  );

  // load background-image-overlay
  bgLayer = loadImage('assets/images/background.png');

  // Create an Audio input
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  colorMode(HSL);

  if( h < 360 ){
    h = h + 0.4;
  } else {
    h = 0;
  }

  background( h, s, l );

  particles.push(new particle( h, s, l ));
  runPSystem();

  // init background-image-overlay
  //image(bgLayer, 0, 0, width, height);
}



function mousePressed() {

  if( !looping ){
    //saveCanvas("img","png");
    //noLoop();
    looping = 1;
  }else{
    //loop();
    looping = 0;
  }

}
