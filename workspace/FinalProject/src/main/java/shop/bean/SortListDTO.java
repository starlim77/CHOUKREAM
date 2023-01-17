package shop.bean;

import org.springframework.stereotype.Service;

@Service
public interface SortListDTO {
	String getBrand();
	String getTitle();
	String getSubTitle();
	String getImgName();
	Integer getSeq();
	Integer getMinPrice();
	Integer getMaxPrice();
	Integer getLikeCount();
	Integer getOrderCount();
}
