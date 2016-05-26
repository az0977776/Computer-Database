#!/bin/bash
hostname >> output.txt
hostname -I >> output.txt
cat /sys/devices/virtual/dmi/id/sys_vendor >> output.txt

{ cat /proc/version; echo "!!"; } | tr "\n" " " >> output.txt
echo '==' >> output.txt
