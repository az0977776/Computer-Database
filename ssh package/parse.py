import csv
# f = open('output.txt')
# file = f.read()

# # print file

# csvOutput = "ComputerName,BIOSdate,Version\n"

# csvOutput += file.replace("\n", ",")
# csvOutput = csvOutput.replace('==', '\n')
# csvOutput = csvOutput.replace('\n,', '\n')
# csvOutput = csvOutput.replace('!!', '')
# csvOutput = csvOutput.replace('  ', '')
# # print csvOutput

# csvFile = open('output.csv', 'w')

# csvFile.write(csvOutput)
# csvFile.close()

hostname = {}
version = {}
compType = {}

with open('output.csv') as csvfile:
    computer = csv.DictReader(csvfile)
    print computer
    for row in computer:
        hostname[str(row['IP Address'])] = row['Hostname']
        version[str(row['IP Address'])] = row['Version']
        compType[str(row['IP Address'])] = row['Type']

print hostname
print version
print compType

csvfile.close()