#!/usr/bin/expect -f
set str "149.89.150."
for {set i 0} {$i<6} {incr i} {
  spawn ssh hanzhangfrankl.wang@$str$i
  expect "assword:"
  sleep 1
  send "dragons123\r"
  expect "$ "
  send "cd ~/Desktop\r"
  expect "$ "
  send "echo 'CPU Name:' >> output.txt\r"
  expect "$ "
  send "hostname >> output.txt\r"
  expect "$ "
  send "echo 'CPU Info: ' >> output.txt\r"
  expect "$ "
  send "lscpu >> output.txt\r"
  expect "$ "
  send "echo 'Version: ' >> output.txt\r"
  expect "$ "
  send "cat /proc/version >> output.txt\r"
  expect "$ "
  send "echo '=====' >> output.txt\r"
  expect "$ "
  send "echo '' >> output.txt\r"
}
