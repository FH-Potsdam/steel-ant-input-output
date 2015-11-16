function setup() {
  /**
   * @author: @fabiantheblind
   * @license: MIT
   *
   * written for "Eingabe, Ausgabe. Grundlagen der prozessorientierten Gestaltung"
   * @FHP WS 2013/2014 by Moika Hoinkis
   *
   * create works of Sol LeWitt in Processing
   * http://www.massmoca.org/lewitt/grid.php
   */
  var canvas = createCanvas(800, 450);
  canvas.parent('sketch');
  var hueoffset = 50; //the offset of the hue from 0
  var huerange = 120; // the range of the hue
  var b = 60; // constant brightness
  var satmin = 70; // saturation minimum
  var satmax = 100; // saturation maximum
  var stepmin = 30; // step minimum
  var stepmax = 70; // step maximum
  var step = stepmin; // the actual step

  background(255); // bg color
  var c; // will holf the color

  colorMode(HSB, 360, 100, 100); // use HSB mode for easier handling of harmonics
  noStroke(); // dont ned a stroke

  /**
   * Lets loop.
   * we will create some rectangles
   * with a random height between the step min/max
   * and the width of the canvas.
   * we increase the y value each iteration with a random value
   */
  for (var y = 0; y < height; y += step) {

    step = (random(stepmin, stepmax)); // we cast to var just because we use var for step
    c = color(hueoffset + (y % huerange), random(satmin, satmax), b); // calculate the color
    fill(c); // set the color
    rect(0, y, width, step); // draw he rectangke
  } // end of y loop
  // saveFrame("lewitt-422.png");

}

function draw() {}