# import pyssh

# CPUlist = ""

# s = pyssh.new_session(hostname="localhost", port="22")
# r = s.execute("uname -a")
# print r

# for i in range(32):
#     host = "149.89.150." + str(100+i)
    s.close()
#     cpu = s.execute("lscpu")
#     s.execute("cd ../../../../proc")
#     version = s.execute("cat version")
#     s.close()
#     CPUlist += cpu + "\n" + version +"\n"