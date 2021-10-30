# Prime numbers between 1 to 100 
for i in range (1,100):
    z=0
    for x in range(1,i+1):
        rem=i%x
        if rem==0:
            z=z+1
    if (z<=2):
        print(f"{i}")
    