def create_dic(filename):
    dic = {}
    with open(filename, "r") as f:
        for line in f:
            key, val = line.strip().split(": ")
            dic[key.lower()] = val
    return dic

if __name__ == "__main__":
    dic = create_dic("./flowers.txt")
    name = input("Enter your name: ")
    first_letter = name[0]
    print("Unique flower name with the first letter: {}".format(dic[first_letter]))
