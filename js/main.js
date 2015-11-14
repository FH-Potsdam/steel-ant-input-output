$(document).ready(function() {
  console.log("ready!");
  var srcs = $('script');
  // console.log(srcs);
  var src = null;
  for (var i = 0; i < srcs.length; i++) {
    var val = srcs[i].src;
    // console.log(val);
    if (val.length === 0) continue;
    if (val.substring(0, 17) === 'http://FH-Potsdam' || val.substring(0, 14) === 'http://0.0.0.0'|| val.substring(0, 21) === 'http://127.0.0.1:4000') {
      src = val;
      console.log(src);
      break;
    } else {
      continue;
    }
  }
  var parts = src.split('/');
  $("body").append('<pre><code id="target"></code></pre>')
  $("#target").load(parts[parts.length - 1]);
});