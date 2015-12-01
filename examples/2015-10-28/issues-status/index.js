var data;
var timeFormat = 'YYYY MM DD';
var margin = 20;
var txtHeight = 12;
var now;
var start;
function preload() {
  data = loadJSON('issue.json');
}

function setup() {
   now = moment();
   start = moment('2015-10-21');
  console.log(start);
  textSize(txtHeight);


  var extract = [];
  for (var i = 0; i < data.length; i++) {
    var created = moment(data[i].created_at);
    // issues_created.push(created.unix());
    // assignees.push(data[i].assignee.login);
    // titles.push(data[i].title);
    var end = data[i].closed_at === null ? now.unix() : moment(data[i].closed_at).unix();

    extract.push({'created':created.unix(),
      'assignee': data[i].assignee.login,
      'title': data[i].title,
      'end':end
    });
  }
  var canvas = createCanvas(800, 500);
  canvas.parent('sketch');
  xAxis();
  var y = 20;
  var gutter = 2;
  var h = 300 / extract.length - 1;

  console.log(extract);

  for (var j = 0; j < extract.length; j++) {
    y = y + h + gutter;
    var x = map(extract[j].created, start.unix(), now.unix(), margin, width- margin);
    text(extract[j].assignee, x - 100, y + 9);
    var w = ((width-margin) - x) - gutter;
    rect(x, y, w, h);
  }
}

function xAxis(){
  var step = 10;
  for(var x = margin; x <= width -margin; x +=step){
    line(x,height - margin/2, x, height);
  }
 line(margin, 0, margin, height);
  var twstart = textWidth(start.format(timeFormat));
  textRotate(margin + (txtHeight/2), height - twstart- margin, 90, start.format(timeFormat));

  var dr = moment.range(start, now);
  dr.center();

  var middleDt = moment(dr.center());
  var twm = textWidth(middleDt.format(timeFormat));
  textRotate((width / 2) + (txtHeight/2) , height - twm -margin, 90, middleDt.format(timeFormat));

  line(width / 2, 0, width / 2, height);
  var twnow = textWidth(now.format(timeFormat));
  textRotate((width - margin) + (txtHeight/2), height -twnow -margin, 90, now.format(timeFormat));
  line(width - margin, 0, width - margin, height);
}

function textRotate(x,y,deg,txt){
  push();
  translate(x, y);
  rotate(radians(deg));
  text(txt, 0,0);
  pop();
}
function draw() {

}