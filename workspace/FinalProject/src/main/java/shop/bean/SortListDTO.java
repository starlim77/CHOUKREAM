package shop.bean;

import org.springframework.stereotype.Service;

public interface SortListDTO {
	String getBrand();
	String getTitle();
	String getTag();
	String getCategory();	
	String getSub_title();
	String getImg_name(); // 여기서 언더바 대신 대문자를 사용하면 못알아 먹는다 .. NULL로
	Integer getSeq();
	String getMin_price();
	String getMax_price();
	Integer getLike_count();
	Integer getOrder_count();
	
	// 여기서 언더바를 쓰면 프론트에도 언더바가 들어간다 그러면 안됨
}
