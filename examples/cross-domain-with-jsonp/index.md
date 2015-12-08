---
layout: example
title: cross domain call with jsonp
engine: p5
extra: jsonp
---

# cross domain call with jsonp

To call the open-notify.org API ISS now from any domain we need to make a cross domain call. This is normally restricted. Luckily the open-notify.org API allows to make JSONP calls. See this [stackoverflow](http://stackoverflow.com/questions/11736431/make-cross-domain-ajax-jsonp-request-with-jquery) for further insight.  

It's important that you have the this line in your index.html file:  

{% highlight html %}
<script src="http://api.open-notify.org/iss-now.json?callback=getData"></script>
{% endhighlight %}



This technique should also work for the pass time and the astros API.  

## sketch.js 
{% highlight js %}
{% include_relative sketch.js %}
{% endhighlight %}

## index.html 

{% highlight html %}
{% include_relative index.html %}
{% endhighlight %}

