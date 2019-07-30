//Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
public class ValidBraces {
	public static boolean isValid(String braces) {
		while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
		 return !braces.length;
	    }
	public static void main(String args[]) {
		String braces = "()[]{}";
		System.out.println(isValid(braces));
	}

}
