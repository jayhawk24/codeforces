t = int(input());

while t > 0:

    companies = input().split(' ');
    
    x , y = input().split(' ');

    selx = 0;
    sely = 0;
    for i in range(3):
        if( x == companies[i]):
            selx = i;
        if( y == companies[i]):
            sely = i;
    
    if(selx < sely):
        print( companies[selx] ); 
    else:
        print( companies[sely] );

    t = t - 1;
