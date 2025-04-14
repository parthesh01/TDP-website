#!/bin/bash

# Install dependencies
cd client
npm install

# Build the project
npm run build

# Move the build output to the correct location
mv dist ../dist 