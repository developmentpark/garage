def chunker(iterable, size):
    arr = []
    for i in range(len(iterable)):

        arr.append(iterable[i])

        if (i + 1) % size == 0 or (i + 1) == len(iterable):
            yield arr
            arr = []
        

    


for i in chunker(list(range(21)), 5):
    print(i)