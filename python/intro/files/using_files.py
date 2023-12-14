
#read
f = open("message.txt", "r")
data = f.read() 
f.close()
print(data)

#write
f = open("secret.txt", "w")
f.write("python")
f.close()

#Too Many Open Files
#files = []
#for i in range(10000):
#    files.append(open('some_file.txt', 'r'))
#    print(i)
#OSError !
    

#auto-closes a file
with open("message.txt", "r") as f:
    file_data = f.read()

print(file_data)


#an integer argument, 
#it will read up to that number of characters, 
#output all of them, 
#and keep the 'window' at that position ready to read on.
with open("becquer.txt", "r") as f:
    print(f.read(33))
    print(f.read(33))
    print(f.read())


#lines
with open("becquer.txt", "r") as f:
    print(f.readline())
    print(f.readline())
    print(f.readline())

#lines
#memory efficient, fast, leads, simple:
with open("becquer.txt", "r") as f:
    
    for line in f:
        print(line, end="")

