class Q:
    que = []
    size = 0

    def enq(self, N):
        self.que.append(N)
        self.size += 1
        return(self.size)
    
    def deq(self):
        if self.size == 0:
            return("-1 0")
        rem = self.que.pop(0)
        self.size -= 1
        return(f"{rem} {self.size}")

def main():
    n = int(input())
    myq = Q()
    for _ in range(n):
        task = input().split()
        if(task[0] == 'E'):
            print(myq.enq(task[1]))
        else:
            print(myq.deq())
if __name__ == "__main__":
    main()
