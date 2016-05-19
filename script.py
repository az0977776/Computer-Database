import paramiko, errno, time

f = open("output.txt", "w")

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

CPUlist = ""
skippedHosts = ""



for i in range(33):
    host = "149.89.150." + str(100+i)
    print host
    
    for attempt in range(30):
        try:
            ssh.connect(host, port = 22, username="hanzhangfrankl.wang", password="dragons123")
            timeRun = time.time()
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
    
    stdin, stdout, stderr = ssh.exec_command("lscpu")
    
    cpu = stdout.read()
    
    stdin, stdout, stderr = ssh.exec_command("cat /proc/version")
    version = stdout.read()
    
    ssh.close()
    CPUlist += host + "\n" + cpu + "\n" + version +"\n|||||"
    
print CPUlist

f.write(CPUlist)
f.close()