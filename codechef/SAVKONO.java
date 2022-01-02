import java.util.*;
import java.io.*;

class Main {
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
        int t = reader.nextInt();

        while(t > 0){
            int n = reader.nextInt();
            int z = reader.nextInt();

            PriorityQueue<Integer> arr = new PriorityQueue<>(n, Collections.reverseOrder());
            
            for(int i = 0; i < n; i++){

                int num = reader.nextInt();
                arr.add(num);
            }

            int count = 0;

            while( arr.size() > 0 ){
                count++;
                int max = arr.poll();
                z -= max;
                int div = Math.floorDiv(max , 2);
                arr.add(div);
                if(z <= 0 || div == 0) break;
            }

            if(z <= 0){
                System.out.println(count);
            }else System.out.println("Evacuate");
            t--;
        }
    }
}