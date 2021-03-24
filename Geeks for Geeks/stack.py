# User function Template for python3


class stack:
    def __init__(self):
        self.s = []
        self.minEle = None

    def push(self, x):
        if len(self.s) < 1:
            self.minEle = x
            self.s.append(x)
        else:
            if x <= self.minEle:
                self.s.append((2 * x) - self.minEle)
                self.minEle = x
            else:
                self.s.append(x)

    def pop(self):
        if len(self.s) < 1:
            return -1
        else:
            y = self.s.pop()
            if y <= self.minEle:
                self.minEle = (2 * self.minEle) - y
        return y

    def getMin(self):
        if len(self.s) < 1:
            return -1
        return self.minEle


# {
#  Driver Code Starts
# contributed by RavinderSinghPB
if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        q = int(input())

        arr = [int(x) for x in input().split()]

        stk = stack()

        qi = 0
        qn = 1
        while qn <= q:
            qt = arr[qi]

            if qt == 1:
                stk.push(arr[qi + 1])
                qi += 2
            elif qt == 2:
                print(stk.pop(), end=" ")
                qi += 1
            else:
                print(stk.getMin(), end=" ")
                qi += 1
            qn += 1
        print()

# } Driver Code Ends