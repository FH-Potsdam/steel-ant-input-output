---
layout: default
title: geocode locations
---

geocode
=======

This example loads data from [iss-now.json](iss-now.json) and calls the google maps geocode API via the [geocoder](https://www.npmjs.com/package/geocoder) package. The results will be written to the file [geocoded-iss-now.json](geocoded-iss-now.json). Be aware that you need to limit the request. You cant fire hundrets of requests directly. Thats why the code uses a `setInterval` function.

Run it like this:


{% highlight bash %}
cd path/to/steel-ant-input-output/examples-nodejs/geocode
npm install
node index.js
{% endhighlight %}


## index.js  

{% highlight js %}
{% include_relative index.js %}
{% endhighlight %}