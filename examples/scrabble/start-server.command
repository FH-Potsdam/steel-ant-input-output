#!/bin/bash
BASEDIR="$( dirname "$0" )"
echo "moving to current folder ${BASEDIR}"
cd "$BASEDIR"
python -m SimpleHTTPServer