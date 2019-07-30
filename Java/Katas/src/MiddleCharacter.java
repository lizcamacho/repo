//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
public class MiddleCharacter {
	public static String getMiddle(String word) {
		char arrayWord[] = word.toCharArray();
		if(arrayWord.length % 2 == 0) {
			String newChar1 = String.valueOf(arrayWord[(arrayWord.length / 2) - 1]);
			String newChar2 = String.valueOf(arrayWord[arrayWord.length / 2]);
			return newChar1+newChar2;	
		}
		return String.valueOf(arrayWord[arrayWord.length / 2]);
	  }
	public static void main(String args[]) {
		System.out.println(getMiddle("middle"));
	}
}
