#!/bin/bash
if hash reload 2>/dev/null; then
    BASEDIR="$( dirname "$0" )"
    echo "moving to current folder ${BASEDIR}"
    cd "$BASEDIR"
    echo "I will start a local server for you"
    echo "you can find your website at http://localhost:8080/"
    echo "to finish the server just type CTRL + C"
    echo "You can do this also by yourself:"
    echo "    1. open Terminal.app"
    echo "    2. type 'cd ' (dont forget the whitespace)"
    echo "    3. drag and drop the folder where you want your server to be behind the cd"
    echo "    4. hit ENTER (you moved now in the filesystem)"
    echo "    5. type reload and hit ENTER"
    echo "starting server"
    reload
  else
    echo "the nodejs reload module is not installed"
    echo "please install it first"
fi

