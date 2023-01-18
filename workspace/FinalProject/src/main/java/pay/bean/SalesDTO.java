package pay.bean;

import java.time.LocalDateTime;

public interface SalesDTO {
	String getId();
	String getOrder_number();
	Integer getPay_price();
	String getStatus();
	LocalDateTime getLog_time();
	String getImg_name();
	String getTitle();
	String getType();
	String getSize();
}
