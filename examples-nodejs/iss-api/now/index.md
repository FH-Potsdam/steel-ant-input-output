---
layout: example
title: ISS Astros
engine: node
---

now
===

Make a web request to [open-notify.org](http://open-notify.org/) and check where the iss is now.

Run it like this:

{% highlight bash %}
cd path/to/steel-ant-input-output/examples-nodejs/iss-api/now
npm install
node index.js
{% endhighlight %}


## index.js  

{% highlight js %}
{% include_relative index.js %}
{% endhighlight %}

## package.json  

{% highlight js %}
{% include_relative package.json %}
{% endhighlight %}