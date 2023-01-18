package member.service;

public class GenerateTempPassword {
	public String randomPassword() {
		char[] specialChar = {'!', '@', '#', '$', '%', '^', '*'};
		char[] numberChar = {'1', '2', '3', '4', '5', '6', '7', '8', '9', '0'};
		char[] passwordTable =  { 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
				'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
				'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
				'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 
				'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '*', 
				'1', '2', '3', '4', '5', '6', '7', '8', '9', '0' };
		
		return getRandPassword(1, specialChar) + getRandPassword(9, passwordTable) + getRandPassword(1, numberChar);
	}

//    public String excuteGenerate() {
//        Random random = new Random(System.currentTimeMillis());
//        int tablelength = passwordTable.length;
//        StringBuffer buf = new StringBuffer();
//        
//        for(int i = 0; i < pwdLength; i++) {
//            buf.append(passwordTable[random.nextInt(tablelength)]);
//        }
//        
//        return buf.toString();
//    }
    
    public String getRandPassword(int size, char[] passwordCol) {
		String randomPW = "";
		for (int i = 0; i < size; i++) {
			int selectRandomPW = (int) (Math.random() * (passwordCol.length));
			randomPW += passwordCol[selectRandomPW];
		}
		return randomPW;
	}

}
