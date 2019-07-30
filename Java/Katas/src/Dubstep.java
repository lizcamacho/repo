public class Dubstep {
  public static String SongDecoder (String song)
  {
	  String splitSong[] = song.split("WUB");
	  String newString;
	  newString = String.join(" ",splitSong);
      return newString.replaceAll(" +"," ").trim();
   }
  public static  void main(String args[]) {
	  System.out.println(SongDecoder("RWUBWUBWUBLWUB"));
  }
}