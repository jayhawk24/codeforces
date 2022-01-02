import java.util.*;
class stack{
	
	public static void main(String []argh)
	{
		Scanner sc = new Scanner(System.in);
		boolean res = false;
		while (sc.hasNext()) {
			String input=sc.next();
            //Complete the code
            Stack<Character> stack = new Stack<Character>();
            
            for( int i = 0; i < input.length() ; i++ ){
                char brac = input.charAt(i);
                if( brac == '{' || brac == '(' || brac == '[' ){
                    stack.add(brac);
                }
                else{
                    if(!stack.isEmpty()){
                        char popped = stack.pop();
                        
                        if(popped == '{' && brac == '}') continue;
                        if(popped == '(' && brac == ')') continue;
                        if(popped == '[' && brac == ']') continue;
                        
                        System.out.println("false");
                        res = true;
                        break;
                    }
                    else{
                        System.out.println("false");
                        res = true;
                        break;
                    }
                }
            }
            
            if(stack.isEmpty()) System.out.println("true");
            else if(!res) System.out.println("false");
            stack.clear();
		}
		
	}
}
