#!/bin/bash
grep -i "\<x" grepdata.txt
grep '^[0-9]\{3\}[ ]' grepdata.txt
grep '[ ][2][0-9][0-9][0-9]'grepdata.txt
grep '\([aeiou]\)[a-z]\1' grepdata.txt
grep '^[a-rt-zA-RT-Z0-9]' grepdata.txt
grep -i ca grepdata.txt
grep -B1 @ grepdata.txt
grep -v -i sep. grepdata.txt
grep -w de grepdata.txt