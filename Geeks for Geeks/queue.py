class queue():
    size = 0
    queue = []
    def __init__(self, N):
        self.size = N
    def enqueue(self, item):
        if len(self.queue) > self.size:
            yn = input("queue filled do you want to increase size? y/n")
            if yn == 'y':
                self.queue.append(item)
            else:
                print("Overflow")
        else:
            self.queue.append(item)
    def dequeue(self):
        this.queue.pop(0)
    def display(self):
        print(self.queue)

def main():
    myQueue = queue(5)
    myQueue.enqueue(1)
    myQueue.enqueue(2)
    myQueue.display()
if __name__ == "__main__":
    main()
