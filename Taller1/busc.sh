#!/bin/bash
find . -mtime 0|xargs tail -f|xargs while read LINE do 
echo $LINE done