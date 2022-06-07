#!/bin/bash
# build.sh - Run app build. Will run Composer, NPM, Webpack etc.

set -e

# build.sh - theme.
cd client
    npm install
    npm run start
cd -
