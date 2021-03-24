class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
class LinkedList:
    def __init__(self):
        self.head = None
def printList(head):
    while head:
        print(head.data, end=' ')
        head = head.next
    print()


def insertBeg(head, data):
    if head == None:
        head = Node(data)
        return head
    newNode = Node(data)
    newNode.next = head
    return newNode

def insertEnd(head, data):
    if head == None:
        head = Node(data)
        return head
    temp = head
    while temp.next:
        temp = temp.next
    temp.next = Node(data)
    return head

if __name__ == '__main__':
    ll = LinkedList()
    n = int(input())
    arr = list(map(int,input().split()))
    for i in range(0,len(arr) -1,2):
        if arr[i+1] == 0:
            ll.head = insertBeg(ll.head,arr[i])
        else:
            ll.head = insertEnd(ll.head,arr[i])
        print(printList(ll.head))

