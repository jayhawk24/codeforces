x=0
y=1
x=0
y=1
i= [0,1]
z=0
while z<500:
    z=x+y
    x=y
    y=z
    i.append(z)
print(i)