#!/bin/sh
npm run build &&
sed -i "s/=\"\//=\"/g" build/index.html
