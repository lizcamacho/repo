
import java.util.ArrayList;
import java.util.Collections;


public class WrongSubtraction {
	public static int subtract(int a, int b) {
		int res = a - b;
		ArrayList array = new ArrayList<Integer>();
		for(; res != 0; res /= 10) {
			array.add(res % 10);
		}
		Collections.reverse(array);
		int sort = (int) (Math.random() * array.size()-1 + 1);
		int random50 = (int) (Math.random() * 9 + 1);
		while((int) array.get(sort) == random50) {
			random50 = (int) (Math.random() * 9 + 1);
		}
		array.remove(sort);
		array.add(sort, random50);
		
		String arraytoString =array.toString().replace("[", "").replace("]", "").replace(",", "").replace(" ", ""); 
		
		return Integer.parseInt(arraytoString);
	}
	public static void main(String args[]) {
		int a = 4848, b = 1234;
		System.out.println(subtract(a, b));
	}
}
