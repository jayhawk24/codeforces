# User function template for Python
"""
Input:
N = 5
arr[] = {1 2 3 4 5} 
K = 4
Output: 3
Explanation: 4 appears at index 3.

"""


class Solution:
    def binarysearch(self, arr, n, k):
        # code here
        mid = n // 2
        while True:
            if arr[mid] == k:
                return mid
            elif arr[mid] > k:
                mid = mid // 2
            elif arr[mid] < k:
                mid += mid // 2
            if mid > n or mid < 0:
                return -1


# {
#  Driver Code Starts
# Initial template for Python

if __name__ == "__main__":
    t = int(input())
    for i in range(t):
        n = int(input())
        arr = list(map(int, input().strip().split(" ")))
        k = int(input())
        ob = Solution()
        print(ob.binarysearch(arr, n, k))


# } Driver Code Ends