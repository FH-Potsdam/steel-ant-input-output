---
layout: example
title: time line of issues
engine: p5
---

# time line of issues

A complex sketch that shows how to work with time. It uses the [moment.js](http://momentjs.com/) library and its [moment range](http://gf3.github.io/moment-range/) extension to display github issues in time line. The issues.json is export using [Paw](https://luckymarmot.com/paw).  
This could also be done with an AJAX call.  

Still work in progress. Needs more comments and further refining  

## sketch.js 
{% highlight js %}
{% include_relative sketch.js %}
{% endhighlight %}

## index.html 
{% highlight js %}
{% include_relative index.html %}
{% endhighlight %}


## issue.json

The issues.json file is to huge to display it in here. Take a look at [the raw source](issue.json).  


<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/moment-range/2.0.3/moment-range.js"></script>