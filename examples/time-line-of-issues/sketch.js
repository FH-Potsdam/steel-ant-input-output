var data;
var timeFormat = 'YYYY MM DD';
var margin = 20;
var txtHeight = 12;
var ganttheight = 550;
var now;
var start;

var bars = [];
function preload() {
  data = loadJSON('issue.json');
}

function setup() {
   now = moment();
   start = moment('2015-10-21');
  // console.log(start);

  textSize(txtHeight);
  colorMode(HSL, 360, 100,100,100);

  var extract = [];
  for (var i = 0; i < data.length; i++) {
    var created = moment(data[i].created_at);
    // issues_created.push(created.unix());
    // assignees.push(data[i].assignee.login);
    // titles.push(data[i].title);
    // console.log(data[i].closed_at);
    var end = data[i].closed_at === null ? now.unix() : moment(data[i].closed_at).unix();
    var isopen = data[i].closed_at === null ? true : false;
    if(data[i].assignee === null || data[i].title === null){
      //skip content that has no one assigned
      continue;
    }
    extract.push({'created':created.unix(),
      'assignee': data[i].assignee.login,
      'title': data[i].title,
      'end':end,
      'isopen':isopen
    });
  }
// http://stackoverflow.com/questions/979256/sorting-an-array-of-javascript-objects
  extract.sort(function(a, b) {
    return parseFloat(a.created) - parseFloat(b.created);
});
  // http://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
//   extract.sort(function(a, b){
//     if(a.assignee < b.assignee) return -1;
//     if(a.assignee > b.assignee) return 1;
//     return 0;
// });
  var canvas = createCanvas(800, 800);
  canvas.parent('sketch');
  // xAxis();
  var y = 20;
  var gutter = 2;
  var h = ganttheight / extract.length - 1;
  // console.log(extract);


  for (var j = 0; j < extract.length; j++) {
    y = y + h + gutter;
    var x = map(extract[j].created, start.unix(), now.unix(), margin, width- margin);
    // text(extract[j].assignee, x - 100, y + 9);
    var xw= map(extract[j].end, start.unix(), now.unix(), margin, width- margin);
    var w = xw - x;
    var b = new Bar(x,y,w,h, extract[j]);
    bars.push(b);
    // rect(x, y, w, h);

  }
}

function xAxis(){
  noStroke();
  fill('#000000');
  var step = 10;
  var twstart = textWidth(start.format(timeFormat));
  textRotate(margin + (txtHeight/2), height - twstart- margin, 90, start.format(timeFormat));

  var dr = moment.range(start, now);
  dr.center();

  var middleDt = moment(dr.center());
  var twm = textWidth(middleDt.format(timeFormat));
  textRotate((width / 2) + (txtHeight/2) , height - twm -margin, 90, middleDt.format(timeFormat));

  var twnow = textWidth(now.format(timeFormat));
  textRotate((width - margin) + (txtHeight/2), height -twnow -margin, 90, now.format(timeFormat));

  for(var x = margin; x <= width -margin; x +=step){
    line(x,height - margin/2, x, height);
  }
  strokeWeight(1);
  stroke('#000000');
  line(margin, 0, margin, height);
  line(width / 2, 0, width / 2, height);
  line(width - margin, 0, width - margin, height);
}

function textRotate(x,y,deg,txt){
  push();
  translate(x, y);
  rotate(radians(deg));
  textStyle(BOLD);
  textAlign(LEFT);

  text(txt, 0,0);
  pop();
}

function Bar(_x,_y,_w,_h,data){
  this.x = _x;
  this.y = _y;
  this.w = _w;
  this.h = _h;
  this.d = data;
  this.x2 = this.x + this.w;
  this.y2 = this.y + this.h;
  this.over = false;
  this.overColor = color('#B75C84');
  this.defaultColor = color('#B7AA5C');
  this.closedColor = color('#7F7F7F');

  this.rollOver = function(){
    this.isInside();
    if(this.over === true){
      fill('#000000');
      noStroke();
      textAlign(RIGHT);
      textStyle(BOLD);
      textSize(18);
      text(this.d.assignee , mouseX, mouseY);
      textStyle(NORMAL);
      textSize(txtHeight);
      text(this.d.title , mouseX, mouseY + (txtHeight*1.2));

    }
  }
  this.display = function(){
    noStroke();
    if(this.over === true){
      fill(this.overColor);
    }else{
      if (this.d.isopen === true){
        fill(this.defaultColor);
      }else{
        fill(this.closedColor);
      }
    }
    rect(this.x, this.y, this.w, this.h);
  }
  this.isInside = function(){
    if(((mouseX > this.x) && (mouseX < this.x2) )&& ((mouseY > this.y) && (mouseY < this.y2))){
    this.over = true;
    }else{
    this.over = false;
    }
  }

this.run = function(){
  this.isInside();
  this.display();
  }
}


function draw() {
  background(360, 0,100);
  for(var i = 0; i < bars.length; i ++){
    bars[i].run();
  }
    for(var j = 0; j < bars.length; j ++){
    bars[j].rollOver();
  }
  xAxis();
}

