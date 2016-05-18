import paramiko, errno, time

f = open("output.txt", "w")

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

CPUlist = ""

for i in range(33):
    host = "149.89.150." + str(100+i)
    print host
    
    for attempt in range(30):
        try:
            ssh.connect(host, port = 22, username="hanzhangfrankl.wang", password="dragons123")
        except EnvironmentError as exc:
            if exc.errno == errno.ECONNREFUSED:
                i+=1
                host = "149.89.150." + str(100+i)
                print i
            else:
                raise
        else:
            break
    else:
        raise RuntimeError("too bad")
    
    stdin, stdout, stderr = ssh.exec_command("lscpu")
    
    cpu = stdout.read()
    
    ssh.exec_command("cd /proc")
    stdin, stdout, stderr = ssh.exec_command("cat version")
    version = stdout.read()
    
    ssh.close()
    CPUlist += cpu + "\n" + version +"\n"
    
print CPUlist

f.write(CPUlist)
f.close()