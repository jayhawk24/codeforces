import java.util.*;

class STUPMACH{

    public static void main(String args[]){

        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t > 0){
            int n = sc.nextInt();
            int[] arr = new int[n];

            long mn = Long.MAX_VALUE;
            long total = 0;

            for(int i = 0; i < arr.length; i++){
                arr[i] =  sc.nextInt();
                mn = Math.min(arr[i], mn);
                total += mn;
            }    
            System.out.println(total);
            t--;
        }
        sc.close();
    }
}
