class linklist:
    def __init__(self):
        self.head = None
        self.tail = None

    def append(self, newNode):
        if self.head == None:
            self.head = newNode
            self.tail = newNode
            return
        self.tail.next = newNode
        self.tail = self.tail.next

    def display(self):
        nextNode = self.head
        while nextNode:
            print(nextNode.data, end=" ")
            nextNode = nextNode.next


class node:
    def __init__(self, data):
        self.data = data
        self.next = None


def main():
    ll = linklist()

    n = int(input())
    arr = list(map(int, input().split()))

    for num in arr:
        newNode = node(num)
        ll.append(newNode)
    print(ll.display())


if __name__ == "__main__":
    main()
