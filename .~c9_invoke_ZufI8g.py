import pyssh
for i in range(32):
    host = "149.89.150." + str(100 + i)
    pyssh.new_session(hostname = host,port )