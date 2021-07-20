import java.util.*;
import java.io.*;

public class iqTest {
    // For fast input output
    static class FastReader {
        BufferedReader br;
        StringTokenizer st;

        public FastReader() {
            try {
                br = new BufferedReader(new FileReader("io/input.txt"));
                PrintStream out = new PrintStream(new FileOutputStream("io/output.txt"));
                System.setOut(out);
            } catch (Exception e) {
                br = new BufferedReader(new InputStreamReader(System.in));
            }
        }

        String next() {
            while (st == null || !st.hasMoreElements()) {
                try {
                    st = new StringTokenizer(br.readLine());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            return st.nextToken();
        }

        int nextInt() {
            return Integer.parseInt(next());
        }

        long nextLong() {
            return Long.parseLong(next());
        }

        double nextDouble() {
            return Double.parseDouble(next());
        }

        String nextLine() {
            String str = "";
            try {
                str = br.readLine();
            } catch (IOException e) {
                e.printStackTrace();
            }
            return str;
        }
    }

    // end of fast i/o code
    public static void main(String[] args) {
        FastReader reader = new FastReader();
        int n = reader.nextInt();
        int[] arr = new int[n];

        for(int i = 0; i < n; i++){
            arr[i] = reader.nextInt();
        }
        
        int[] diff = new int[n-1];

        for (int i = 0; i < n-1; i++) {
            diff[i] = arr[i+1] - arr[i]; 
        }

        int i = 0;
        int j = n-2;
        int ans = 0;
        
        while(i < j){
            if(diff[i] != diff[j]){
                ans = i+1;
                break;
            }
            i++;
            j--;
        }
        System.out.println(ans);
    }
}