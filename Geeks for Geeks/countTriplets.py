# User function Template for python3
class Solution:
    def partition(self, arr, start, end):

        pivot = arr[end]
        pind = start
        for i in range(start, end):
            if arr[i] <= pivot:
                arr[i], arr[pind] = arr[pind], arr[i]
                pind += 1

        arr[-1], arr[pind] = arr[pind], arr[-1]

        return pind

    def quickSort(self, arr, start, end):
        if start < end:
            pivot = self.partition(arr, start, end)
            self.quickSort(arr, start, pivot - 1)
            self.quickSort(arr, pivot + 1, end)

    def countTriplet(self, arr, n):
        count = 0
        arr.sort()
        for i in range(n - 1, -1, -1):
            j = 0
            k = i - 1
            while j <= k:
                if j == k:
                    break
                sm = arr[j] + arr[k]
                if sm == arr[i]:
                    count += 1
                    k -= 1
                elif sm < arr[i]:
                    j += 1
                else:
                    k -= 1
        return count


# {
#  Driver Code Starts
# Initial Template for Python 3

if __name__ == "__main__":
    T = int(input())
    for i in range(T):
        n = int(input())
        arr = [int(x) for x in input().split()]

        ob = Solution()
        ans = ob.countTriplet(arr, n)
        print(ans)

# } Driver Code Ends