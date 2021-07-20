import java.util.*;
import java.io.*;

public class helpfulMaths {
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
        String str = reader.nextLine();

        int one = 0;
        int two = 0;
        int three = 0;
        String ans = "";

        for(int i = 0; i < str.length(); i++){
            if (str.charAt(i) == '1'){
                one++;
            }
            else if(str.charAt(i) == '2'){
                two++;
            }
            else if(str.charAt(i) == '3'){
                three++;
            }
        }
        while (one > 0) {
            ans += "1+";
            one--;
        }
        while(two > 0){
            ans += "2+";
            two--;
        }
        while (three > 0) {
            ans += "3+";
            three--;
        }
        System.out.println(ans.substring(0, ans.length() - 1));
    }
}