#!/usr/bin/expect -f
STR="149.89.150."
for i in {1..6}
  spawn ssh hanzhangfrankl.wang@$STR$i
  expect "assword:"
  sleep 1
  send "dragons123\r"
  command1
  command2
  commandN
