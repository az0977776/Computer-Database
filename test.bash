#!/bin/bash
CPUname=hostname
installDate=echo /sys/devices/virtual/dmi/id/bios_date
version=echo cat /proc/version

echo $CPUname $installDate $version