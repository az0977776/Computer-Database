# import pyssh

# CPUlist = ""

# s = pyssh.new_session(hostname="localhost", port="22")
# r = s.execute("uname -a")
# print r

    return cpu + "\n" + version
#     host = "149.89.150." + str(100+i)
#     s = pyssh.new_session(hostname=host, port = "22", username = "hanzhangfrankl.wang", password = "dragons123")
#     cpu = s.execute("lscpu")
#     s.execute("cd ../../../../proc")
#     version = s.execute("cat version")
#     s.close()
#     CPUlist += cpu + "\n" + version +"\n"