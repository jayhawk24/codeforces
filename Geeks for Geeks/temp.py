def countWaysToSplit(s):
    n = len(s)
    count = 0
    for i in range(n):
        for j in range(i + 1, n - 1):
            for k in range(j + 1, n - 1):
                a = s[i:j]
                b = s[j:k]
                c = s[k:]

                if a != b and b != c and a != c and a + b + c == s:
                    x = a + b
                    y = b + c
                    z = c + a
                    if x != y and y != z and x != z:
                        count += 1
    return count


if __name__ == "__main__":
    print(countWaysToSplit(input()))