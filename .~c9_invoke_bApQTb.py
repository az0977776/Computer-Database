import pyssh
for i in range(32):
    host = "149.89.150." + 1
    pyssh.new_session(hostname = host,port = 22, username="hanzhangfrankl.wang",password="dragons123")