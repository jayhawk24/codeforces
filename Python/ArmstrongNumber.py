num=int(input())
i=num    #initial number
scd=0  #sum of cube of digit
while (num!=0):
    a=num/10
    b=a-int(a)
    digit=int(b*10)
    num=a//1
    scd=scd+digit**3
if (scd==i):
    print(f"{i} is Armstrong number")
else:
    print(f"{i} not Armstrong")