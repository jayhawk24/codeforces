import java.util.*;
class STFOOD{

    public static void main(String args[]){
        
        
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();

        while(t > 0){
            int n = sc.nextInt();
            
            int max  = 0;
            for(int i = 0; i < n; i++){

                int s = sc.nextInt(); 
                int p = sc.nextInt();
                int v = sc.nextInt();

                int cost = (p / (s + 1)) * v;

                max = Math.max(cost, max);
            }
            System.out.println(max);
            t--;

    }
    sc.close();

}}