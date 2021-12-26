import java.util.*;
import java.io.*;

class MatchedBrackets{
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
        int n = reader.nextInt();
        
        Stack<Integer> stack = new Stack<Integer>();
        int depth = 0;
        int count = 0;
        int startDepth = 0;
        int maxs = 0;
        int maxsIndex = 0;
        int index = 0;

        StringBuilder input = new StringBuilder();

        for(int i = 1; i <= n; i++){
            input.append(reader.nextInt());
        }
        
        for(int i = 0; i < input.length(); i++){

            if(input.charAt(i) == '1'){
                stack.add(1);
                count++;

                if(count > depth){
                    depth = count;
                    startDepth = i + 1;
                }
            }
            else{
                count--;
                stack.pop();
            }
        } 
        
        for(int i = 0; i < n; i++){

            if(input.charAt(i) == '1'){
                if(stack.isEmpty()){
                    count=0;
                    index = i;
                }
                stack.add(i);
                count++;
            }
            else{
                stack.pop();
                count++;
                if(count > maxs){
                    maxs = count;
                    maxsIndex = index + 1;
                }
            }
        }

        System.out.printf("%d %d %d %d",depth,startDepth, maxs, maxsIndex);
    
    }
}