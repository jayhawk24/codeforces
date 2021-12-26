import java.util.*;
import java.io.*;

class INPSTFIX {
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
        StringBuilder postfix = new StringBuilder();
        Stack<Character> stack = new Stack<Character>();
        while (t > 0) {

            int n = reader.nextInt();
            String exp = reader.nextLine();

            for (int i = 0; i < n; i++) {
                char symbol = exp.charAt(i);

                if (isOperator(symbol)) {

                    if (symbol == ')') {

                        char popped = stack.pop();
                        do {
                            postfix.append(popped);
                            if(stack.isEmpty()) break;
                            popped = stack.pop();
                        } while (popped != '(' && !stack.isEmpty());

                    }

                    else {
                        if(stack.isEmpty()) {
                            stack.add(symbol);
                            continue;
                        }
                        Symbol s = new Symbol(symbol);
                        Symbol top = new Symbol(stack.lastElement());

                        if (top.data != '(') {

                            while (top.priority >= s.priority && !stack.isEmpty()) {

                                postfix.append(stack.pop());
                                if(stack.isEmpty()) break;
                                top = new Symbol(stack.lastElement());

                            }
                        }

                        stack.add(symbol);

                    }

                } else {
                    postfix.append(symbol);
                }
            }
            while (!stack.isEmpty()) {
                char popped = stack.pop();
                if (popped != '(')
                    postfix.append(popped);
            }
            System.out.println(postfix);

            t--;
        }
    }

    public static boolean isOperator(char symbol) {
        if (symbol == '(' || symbol == ')' || symbol == '+' || symbol == '-' || symbol == '*' || symbol == '/'
                || symbol == '^')
            return true;
        return false;
    }

    static class Symbol {
        char data;
        int priority;

        public Symbol(char data) {
            this.data = data;
            if (data == '+' || data == '-')
                this.priority = 1;
            else if (data == '*' || data == '/')
                this.priority = 2;
            else if (data == '^')
                this.priority = 3;
            this.priority = 0;
        }
    }
}