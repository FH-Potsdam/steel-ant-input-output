var data;
var timeFormat = 'YYYY MM DD';
var margin = 20;
var txtHeight = 12;
var ganttheight = 1100;
var now;
var start;
var step = 10;

var bars = [];
var xAxisLines = [];

/**
 * [enumerateDaysBetweenDates description]
 * http://stackoverflow.com/questions/23795522/how-to-enumerate-dates-between-two-dates-in-moment
 * @param  {[type]} startDate [description]
 * @param  {[type]} endDate   [description]
 * @return {[type]}           [description]
 */
var enumerateDaysBetweenDates = function(startDate, endDate) {
    var dates = [];

    var currDate = startDate.clone().startOf('day');
    var lastDate = endDate.clone().startOf('day');

    while(currDate.add('days', 1).diff(lastDate) < 0) {
        // console.log(currDate.toDate());
        dates.push(currDate.clone().toDate());
    }

    return dates;
};


function xAxisLine (_x1,_y1,_x2,_y2,_d,_i){
  this.index = _i;
  this.x1 = _x1;
  this.y1 = _y1;
  this.x2 = _x2;
  this.y2 = _y2;
  this.date = moment(_d);
  this.defaultColor = color('#C9C9C9');
  this.strongColor = color('#000000');
  this.rollOverColor = color('#8CDDFC');
  this.isOver = false;
  this.txt = this.date.format(timeFormat);
  this.tw = textWidth(this.txt);


  this.display = function(){
    stroke(this.defaultColor);
    strokeWeight(1);
    line(this.x1,this.y1,this.x2,this.y2);
  }

  this.rollOver = function(){
    this.isInside();
    if(this.isOver===true){
      this.y2 = height - (this.tw*1.5);
      this.textDisplay();
    }else{
      this.y2 = height;
    }
  }
  this.isInside = function(){
    if(mouseX > this.x1 - 2 && mouseX < this.x1 + 2){
      this.isOver = true;
    }else{
      this.isOver = false;
    }
  }
  this.run = function(){
    this.display();
  }

  this.textDisplay = function(){
  noStroke();
  fill(this.defaultColor);
  push();
  translate(this.x1, height - this.tw);
  rotate(radians(90));
  textStyle(BOLD);
  textAlign(LEFT);
  text(this.txt, 0,0);
  pop();
  }
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
  var canvas = createCanvas(800, 1500);
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
  var dates = enumerateDaysBetweenDates(start, now);
  var linestep = (width-(margin*2))/dates.length;
  for(var k = 0; k <= dates.length;k++){
    var x1 = linestep*(k+1);
    var y1 = 0;
    var x2 = linestep*(k+1);
    var y2 = height;
    var l = new xAxisLine(x1,y1,x2,y2,dates[k],k);
    xAxisLines.push(l);
  }
}


function draw() {
  background(360, 0,100);
  for(var l = 0; l < xAxisLines.length;l++){
    xAxisLines[l].rollOver();
  }
  for(var k = 0; k < xAxisLines.length;k++){
    xAxisLines[k].run();
  }

  for(var i = 0; i < bars.length; i ++){
    bars[i].run();
  }
    for(var j = 0; j < bars.length; j ++){
    bars[j].rollOver();
  }
}

