def spy(arr, n):
    
    if arr[0] != arr[1] and arr[0] != arr[2]:
        return 1

    for i in range(1, n - 1):
        if arr[i] != arr[i + 1] and arr[i] != arr[i-1]:
            return i + 1
    
    return n


for _ in range(int(input())):

    n = int(input())
    arr = list(map(int, input().split()))
    print(spy(arr, n))
