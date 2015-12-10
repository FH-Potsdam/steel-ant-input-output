---
layout: example
title: cross domain call with jsonp refresh
engine: p5
extra: jsonp-refresh
---

# cross domain call with jsonp refresh

To call the open-notify.org API ISS now from any domain we need to make a cross domain call. This is normally restricted. Luckily the open-notify.org API allows to make JSONP calls. See this [stackoverflow](http://stackoverflow.com/questions/11736431/make-cross-domain-ajax-jsonp-request-with-jquery) for further insight. The solution used for only one jsonp call depends on having the callBack function hardcoded into our HTML. What if we want to refresh that data over time? The HTML gets read once and that is it.

_(jQuery and AJAX enter the stage, crowd applauds)_  

In this example we make [jQuery.ajax](http://api.jquery.com/jquery.ajax/) call to the open-notify API. Now we run into another problem. First the callback function is asynchron to the rest of our sketch. Second the data only exists in the callback function of the ajax call. 

_(sessionStorage enters as well, crowd goes wild)_

The solution is to save a [stringified](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verison of the data into the [sessionStorage](https://developer.mozilla.org/en/docs/Web/API/Window/sessionStorage) and restore that data in our draw function later on
.  
This technique should also work for the pass time and the astros API.  

_(Crowd goes wild, standing ovations)_



## sketch.js 
{% highlight js %}
{% include_relative sketch.js %}
{% endhighlight %}

## index.html 

{% highlight html %}
{% include_relative index.html %}
{% endhighlight %}

