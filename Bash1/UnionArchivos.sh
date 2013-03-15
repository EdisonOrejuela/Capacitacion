#!/bin/bash
grep -l -i "Archivo" *.txt|xargs $var|xargs cat >Salida/Union.txt
