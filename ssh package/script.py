import paramiko, errno, time

f = open("output.csv", "w")

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

CPUlist = "IP Address,Hostname,Version,Type\n"
skippedHosts = ""



for i in range(6):
    host = "149.89.150." + str(100+i)
    print host
    
    for attempt in range(30):
        try:
            ssh.connect(host, port = 22, username="hanzhangfrankl.wang", password="dragons123")
        except EnvironmentError as exc:
            if exc.errno == errno.ECONNREFUSED:
                skippedHosts += host + "\n"
                i+=1
                host = "149.89.150." + str(100+i)
                print i
            elif exc.errno == errno.ETIMEDOUT:
                skippedHosts += host + "\n"
                i+=1
                host = "149.89.150." + str(100+i)
                print i
                ssh.close()
            else:
                 raise
        else:
            break
    else:
        raise RuntimeError("too bad")
    
    stdin, stdout, stderr = ssh.exec_command("hostname")
    cpu = stdout.read().strip('\n')
    
    stdin, stdout, stderr = ssh.exec_command("cat /proc/version")
    version = stdout.read().strip('\n')
    
    stdin, stdout, stderr = ssh.exec_command("cat /sys/devices/virtual/dmi/id/sys_vendor")
    compType = stdout.read().strip('\n')
    
    ssh.close()
    CPUlist += host + "," + cpu + "," + version + ',' + compType + '\n'
    
print CPUlist

content = CPUlist+"\n"+"===================="+"\n"+skippedHosts

f.write(content)
f.close()