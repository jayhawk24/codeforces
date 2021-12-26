import java.util.*;
import java.io.*;

public class taxi {
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

        int n = Integer.parseInt(reader.nextLine());
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) {
            arr[i] = reader.nextInt();
        }
        int taxi = 0;
        taxi += countNum(4, arr, n);
        int threes = countNum(3, arr, n);
        int twos = countNum(2, arr, n);
        int ones = countNum(1, arr, n);

        if (threes > 0 && ones > 0) {
            taxi += threes;
            ones = ones - threes;
        }
        else{
            taxi += threes;
        }

        if (twos / 2 > 0) {
            taxi += Math.floor(twos / 2);
            if (twos % 2 == 1)
                twos = 1;
            else
                twos = 0;
        }

        if (twos > 0) {
            ones = ones - 2;
            taxi += 1;
        }

        if (ones > 0) {
            double k = Math.ceil(ones / 4);
            System.out.println(k);
            if (k > 1)
                taxi += k;
            else
                taxi += 1;
        }

        System.out.println(taxi);
    }

    public static int countNum(int k, int[] arr, int n) {
        int count = 0;
        for (int i = 0; i < n; i++) {
            if (arr[i] == k)
                count += 1;
        }
        return count;
    }
}