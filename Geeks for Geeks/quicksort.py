def quicksort(arr, start, end):

    if start < end:
        pivotIndex = partition(arr, start, end)
        quicksort(arr, start, pivotIndex - 1)
        quicksort(arr, pivotIndex + 1, end)


def partition(arr, start, end):
    pivot = arr[end]
    partitionIndex = start

    for i in range(start, end):
        if arr[i] <= pivot:

            temp = arr[partitionIndex]
            arr[partitionIndex] = arr[i]
            arr[i] = temp

            partitionIndex += 1

    temp = arr[partitionIndex]
    arr[partitionIndex] = arr[end]
    arr[end] = temp

    return partitionIndex


if __name__ == "__main__":
    n = int(input())
    arr = list(map(int, input().split()))
    quicksort(arr, 0, n - 1)
    print(arr)
