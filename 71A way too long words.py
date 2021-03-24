def abrevate(word):
    n = len(word)
    if n > 10:
        return word[0] + str(n - 2) + word[-1]
    return word


for _ in range(int(input())):
    w = input()
    print(abrevate(w))
