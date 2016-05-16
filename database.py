import sqlite3

"""
//create table for computer's data
c.execute('create table computers (type text, installation text, OS text, updated text, working text)')

//put stuff to test
c.execute('insert into computers values ("lenovo","hi","ubuntu","4/3/5","yes")')

//show data in table
result = c.execute('select * from computers')
for r in result:
    print r
"""

def addComp(type,installation,OS,updated,working):
    conn = sqlite3.connect('labs.db')
    c = conn.cursor()
    #add rooms and computer number?
    c.execute('insert into computers values("'+type+'","'+installation+'","'+OS+'","'+updated+'","'+working+'")')
    conn.commit()


conn = sqlite3.connect('labs.db')
c = conn.cursor()
result = c.execute('select * from computers')
for r in result:
    print r
