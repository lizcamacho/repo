
public class Canada {

	public String canada(String S) {
		String newString = S.replaceAll("(-|\\s)+", "");
		String[] splitS = newString.split("");
		int cont = 1;
		String res = "";
		int pos=0;
		for(String ch : splitS) {
			//if(splitS.length % 2 != 0) {
				res +=ch;
			    if((cont % 3) == 0){
			        res+="-";
			    }
			    cont++;
			//}
			 
			    
		    
		}
		res=(res.endsWith("-"))?res.substring(0,res.length()-1):res;
        String result;      
        if ((splitS.length % 3) == 1) {
            result = res.substring(0,res.length()-5) +newString.substring(newString.length()-4,S.length()-2) + "-" + newString.substring(newString.length()-2);
        }else{
            result= res;
        }
        return result;
	}
	
	public int solution(int[] A) {
		int[] top = new int[A.length];
		int max = -Integer.MAX_VALUE;
		for (int i=A.length-1; i>=0; i--) {
		    if (A[i] > max) max = A[i];
		    top[i] = max;
		}

		int best = 0;
		int curMaxIndex = 0;
		for (int i=0; i<A.length; i++) {
		    while(curMaxIndex < top.length && top[curMaxIndex] >= A[i])
		        curMaxIndex++;
		    if((curMaxIndex - 1 - i) > best)
		        best = curMaxIndex - 1 - i;
		}

		return best; 
    }
	
	public static void main(String args[]) {
		Canada a = new Canada();
		String array = "00-44  48 5555 8361";
		int[] b = {3,5,6,3,3,5};
		System.out.println(a.canada(array));
	}
}

