row, col = map(int, input().split())
matrix = []
ans = [[0] * row for a in range(col)]
for _ in range(row):
    matrix.append(list(map(int, input().split())))
for i in range(row):
    for j in range(col):
        temp = matrix[i][j]
        ans[j][i] = temp
for i in range(col):
    for j in range(row):
        print(ans[i][j], end=" ")
    print()
