#!/bin/bash
echo "CPU Name: " >> output.txt
hostname >> output.txt

echo "CPU Info: " >> output.txt
lscpu >> output.txt

echo "Version: " >> output.txt
cat /proc/version >> output.txt

echo "=====" >> output.txt
echo "" >> output.txt