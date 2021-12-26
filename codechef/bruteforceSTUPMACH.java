import java.util.*;

class BSTUPMACH{

    public static void main(String args[]){

        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t > 0){
            int n = sc.nextInt();
            int[] arr = new int[n];

            for(int i = 0; i < arr.length; i++){
                int num = sc.nextInt();
                arr[i] = num;
            }

            int total = 0;
            int pastMin = 0;
            int size = arr.length;

            while(size > 0){

                int[] reduce = getMin(arr , size);
                int newMin = (reduce[0] - pastMin);
                if(newMin < 0) break;
                total += (newMin * size);
                pastMin += newMin;
                size = reduce[1];
            }
            int last = arr[0] - pastMin;
            if(last > 0) total += last;
            System.out.println(total);
            t--;
        }
        sc.close();
    }
    public static int[] getMin(int[] nums, int size){
        int min = nums[0];
        int index = 0;
        for(int i = 0; i < size; i++){
            min = Math.min(nums[i], min);
            index = i;
        }
        int[] ans = new int[2];
        ans[0] = min;
        ans[1] = index;
        return ans;
    }
}
