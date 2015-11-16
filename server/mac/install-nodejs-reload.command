#!/bin/bash

echo "Installing Node Version Manager"
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
echo "Installing Nodejs version v4.2.2"
nvm install v4.2.2
echo "Installing reload module globally"
npm install -g reload
echo "we are done. Bye Bye"
