import paramiko

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

CPUlist = ""

#for i in range(32):
host = "149.89.150.100" #+ str(100+i)
print host
ssh.connect(host, port = 22, username="hanzhangfrankl.wang", password="dragons123")

stdin, stdout, stderr = ssh.exec_command("lscpu")

cpu = stdout.read()
ssh.exec_command("cd ../../../../proc")
stdin, stdout, stderr = ssh.exec_command("cat version")
version = stdout.read()

ssh.close()
CPUlist += cpu + "\n" + version +"\n"
    
print CPUlist

# import pyssh

# CPUlist = ""

# s = pyssh.new_session(hostname="localhost", port="22")
# r = s.execute("uname -a")
# print r

# for i in range(32):
#     host = "149.89.150." + str(100+i)
#     s = pyssh.new_session(hostname=host, port = "22", username = "hanzhangfrankl.wang", password = "dragons123")
#     cpu = s.execute("lscpu")
#     s.execute("cd ../../../../proc")
#     version = s.execute("cat version")
#     s.close()
#     CPUlist += cpu + "\n" + version +"\n"