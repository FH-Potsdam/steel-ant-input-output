#!/bin/zsh

for D in *; do [ -d "${D}" ] &&

echo "{% endhighlight %}" >> ${D}/index.html
echo "{% include_relative index.html %}" >> ${D}/index.html
echo "{% highlight js %}" >> ${D}/index.html
echo "## index.html " >> ${D}/index.html
echo "{% endhighlight %}" >> ${D}/index.html
echo "{% include_relative sketch.js %}" >> ${D}/index.html
echo "{% highlight js %}" >> ${D}/index.html
echo "## sketch.js " >> ${D}/index.html
echo "# Bounce Back and Forth" >> ${D}/index.html
echo "---" >> ${D}/index.html
echo "title: Bounce back and forth" >> ${D}/index.html
echo "layout: example" >> ${D}/index.html
echo "---" >> ${D}/index.html
echo "";
done
