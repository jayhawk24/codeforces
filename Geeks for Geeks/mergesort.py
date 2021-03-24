def merge(L, R, arr):
    nl = len(L)
    nr = len(R)

    i, j, k = 0, 0, 0

    while i < nl and j < nr:
        if L[i] <= R[j]:
            arr[k] = L[i]
            k += 1
            i += 1
        else:
            arr[k] = R[j]
            k += 1
            j += 1

    def exhaust(index, maxIndex, arrIndex, arr, shortArr):
        while index < maxIndex:
            arr[arrIndex] = shortArr[index]
            index += 1
            arrIndex += 1

    exhaust(i, nl, k, arr, L)
    exhaust(j, nr, k, arr, R)


def mergeSort(arr):
    n = len(arr)
    if n < 2:
        return arr
    mid = n // 2
    left = arr[:mid]
    right = arr[mid:]
    mergeSort(left)
    mergeSort(right)
    merge(left, right, arr)


if __name__ == "__main__":
    nums = list(map(int, input().split()))
    mergeSort(nums)
    print(nums)
