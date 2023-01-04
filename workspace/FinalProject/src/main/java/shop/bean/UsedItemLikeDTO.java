package shop.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name = "userItemLike")
public class UsedItemLikeDTO {

	@Column(name="seq")
	private int seq;
	
	@Column(name="id")
	private String id;
	
	@Column(name="userLike")
	private Boolean userLike;
	
//	@Column(name="likes")
//	private Boolean likes;
}
