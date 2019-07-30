
public class Solution {
	public int solution(int[] A) {
		int counter[] = new int[A.length];
		//System.out.println(counter[5]);
		// Count the items, only the positive numbers
		for (int i = 0; i < A.length; i++) {
		    if (A[i] > 0 && A[i] <= A.length) {System.out.println(counter[A[i] - 1] ++);
		        counter[A[i] - 1]++;
		        
		    }
		}
		// Return the first number that has count 0
		for (int i = 0; i < counter.length; i++)
		    if (counter[i] == 0)
		        return i + 1;

		// If no number has count 0, then that means all number in the sequence
		// appears so the next number not appearing is in next number after the
		// sequence.
		return A.length + 1;
		  
	}
	public int solution2 (int[] A) {
		int mayor=A[0];
		int menor=A[0];
		//System.out.println(A[1]);
		for(int i = 0; i < A.length; i++) {
			if(A[i] >= mayor) {
				mayor = A[i];
			}else {
				menor = A[i];
			}
		}
		int B[] = new int[mayor];
		for(int i = 0; i < B.length; i++) {
			System.out.println(B[0]);
		}
		System.out.println(mayor);
		System.out.println(menor);
		
		return 0;
	}
	public static void main(String args[]) {
		Solution a = new Solution();
		int[] array = {1,3,4,6,7,8};
		System.out.println(a.solution2(array));
		//public int solution(int[] A);
	}

}
