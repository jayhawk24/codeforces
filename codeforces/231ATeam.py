def sol(prblm):
    _1 = prblm.count("1")
    if _1 >= 2:
        return 1
    return 0


count = 0

for _ in range(int(input())):
    prblm = input()
    count += sol(prblm)

print(count)
