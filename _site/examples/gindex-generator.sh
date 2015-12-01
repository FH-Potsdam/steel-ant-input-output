#!/bin/zsh

# for D in *; do [ -d "${D}" ] && echo "${D}"; done

function addIndex(){
  echo "" > ${1}/index.md
  echo "---" >> ${1}/index.md
  echo "layout: example" >> ${1}/index.md
  echo "title: ${1}" >> ${1}/index.md
  echo "---" >> ${1}/index.md
  echo "# ${1}" >> ${1}/index.md
  echo "## sketch.js " >> ${1}/index.md
  echo "{% highlight js %}" >> ${1}/index.md
  echo "{% include_relative sketch.js %}" >> ${1}/index.md
  echo "{% endhighlight %}" >> ${1}/index.md
  echo "## index.html " >> ${1}/index.md
  echo "{% highlight js %}" >> ${1}/index.md
  echo "{% include_relative index.html %}" >> ${1}/index.md
  echo "{% endhighlight %}" >> ${1}/index.md
}

for D in *; do [ -d "${D}" ] && addIndex ${D}; done