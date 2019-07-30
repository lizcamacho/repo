
public class Prueba {
	public static int index(int[] p) {
		int sumaDerecha=0;
		int sumaIzquierda = 0;
		for(int i = 0; i < p.length; i++) {
			sumaDerecha = 0;
			sumaIzquierda = 0;
			for(int j = i + 1; j < p.length; j++) {
				sumaDerecha += p[j];
			}
			if(i !=0) {
				for(int j = i - 1; j >= 0; j--) {
					sumaIzquierda += p[j];
				}
			}
			if(sumaDerecha == sumaIzquierda) {
				return i;
			}
		}
		return -1;
	}
	public static void main(String[] argumentos){
		
		
		int array[] = { -1, 3, -4, 5, 1, -6, 2, 1};
		System.out.println(index(array));
		
		}
}
