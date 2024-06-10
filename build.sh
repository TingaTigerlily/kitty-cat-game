#!/bin/bash

# Exit script on error
set -e

# Remove old files in the root directory (optional, ensure to target only specific files/folders)
rm -rf css js sounds index.html kitty-cat.png

# Copy files from wwwroot to root
cp -r wwwroot/* .

# Ensure .nojekyll is in the root
touch .nojekyll

echo "Build complete. Files copied to root for GitHub Pages."
