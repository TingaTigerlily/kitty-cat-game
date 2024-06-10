#!/bin/bash

# Clean up root directory
rm -rf css js sounds index.html kitty-cat.png

# Copy files from wwwroot to root
cp -r wwwroot/* .

# Ensure .nojekyll is in the root
touch .nojekyll

echo "Build complete. Files copied to root for GitHub Pages."

