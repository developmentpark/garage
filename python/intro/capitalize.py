def solve(s):
    res = []
    for i in range(len(s)):
        if (i == 0 or s[i - 1] == " ") and s[i].isalpha():
            res.append(s[i].upper())
        else:
            res.append(s[i])
    return "".join(res)

if __name__ == '__main__':
    print(solve("chris alan"))
    print(solve("12abc"))
    print(solve("12446"))
    print(solve("132 456 Wq  m e"))
    print(solve("1 w 2 r 3g"))