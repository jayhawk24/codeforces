import java.util.*;
import java.io.*;

class PSHOT {
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

        while (t > 0) {
            int n = reader.nextInt();

            String s = reader.nextLine();

            int ateam = 0;
            int bteam = 0;
            int ar = n;
            int br = n;
            int win = 2*n;
            for (int i = 0; i < 2 * n; i++) {
                if (i % 2 == 0) {
                    ateam += s.charAt(i) - 48;
                    ar--;
                } else {
                    bteam += s.charAt(i) - 48;
                    br--;
                }
                if (ateam > bteam + br) {
                    win = i + 1;
                    break;
                }
                if (bteam > ateam + ar) {
                    win = i + 1;
                    break;
                }
            }
                System.out.println(win);
            t--;
        }
    }
}