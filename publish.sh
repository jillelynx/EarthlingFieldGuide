#!/bin/bash
# Earthling Field Guide: publish the SCRAMBLED copy to the game's web address.
# Your readable code stays private on the main branch.
# The website is served from the "gh-pages" branch, which holds only the scrambled copy.
# Run from Terminal:   cd ~/Desktop/Earthling_Field_Guide && ./publish.sh
set -e
cd "$(dirname "$0")"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is not installed. Download the LTS version from https://nodejs.org, install it, then run this again."
  exit 1
fi

if [ ! -d tools/node_modules ]; then
  echo "First time only: installing the scrambling tools..."
  (cd tools && npm install --silent)
fi

node tools/build.mjs

REMOTE=$(git remote get-url origin)
cd dist
rm -rf .git
git init -q
git checkout -q -b gh-pages
touch .nojekyll
git add -A
git commit -q -m "Publish scrambled copy $(date '+%Y-%m-%d %H:%M')"
git push -q -f "$REMOTE" gh-pages
rm -rf .git
echo ""
echo "Published! The game's web address now serves the scrambled copy."
echo "It can take a minute or two to update."
