#!/bin/bash
hostname >> output.txt
cat /sys/devices/virtual/dmi/id/bios_date >> output.txt

{ cat /proc/version; echo "!!"; } | tr "\n" " " >> output.txt
echo '==' >> output.txt