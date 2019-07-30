
public class LeaderSorted {
	public static int returnLeader(int array[]) {
		int counter=1;
		int i = 0;
		for(int j = i+1; j < array.length; j++) {		
			if(array[i] == array[j]) {
				counter++;
			}else {
				counter = 1;
				i = j;
			}
			if(2*counter > array.length) {
				return array[i];
			}
		}
	return -1;
	}
	
	public static void main(String args[]) {
		int array[] = {1, 1, 1, 1, 50};
		returnLeader( array );
	}
}
