package shop.bean;

public interface NewSortListDTO {
	String getBrand();
	String getTitle();
	String getTag();
	String getCategory();	
	String getSub_title();
	String getImg_name(); // 여기서 언더바 대신 대문자를 사용하면 못알아 먹는다 .. NULL로
	Integer getSeq();
	Integer getGender();
	Integer getPrice();
	Integer getLike_count();
	Integer getOrder_count();
}
