import java.util.*;
import java.io.*;

class GENE01   {
    // For fast input output
    static class FastReader {
        BufferedReader br;
        StringTokenizer st;

        public FastReader() {
            try {
                br = new BufferedReader(
                        new FileReader("io/input.txt"));
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
        
        String R = "R";
        String B = "B";
        String G = "G";

        String inp = reader.nextLine();

        String p1 = inp.split(" ")[0];
        String p2 = inp.split(" ")[1];

        System.out.println(inp);
        if( p1 == R || p2 == R){
            System.out.println(R);
        }
        else if(p1 == B){
            if(p2 == B || p2 == G)
            System.out.println(B);
        }
        else if(p2 == B){
            if(p1 == B || p1 == G)
            System.out.println(B);
        }
        System.out.println(p1);
    }
}