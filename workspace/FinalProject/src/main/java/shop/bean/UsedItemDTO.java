package shop.bean;


import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="UsedItem")
public class UsedItemDTO {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="seq", nullable=false, length=30)
	private int seq;
	
	@Column(name="id", nullable=false, length=100)
	private String id;
	
	@Column(name="imgPath")
	private String imgPath;
	
	@Column(name="title", nullable=false,length=400)
	private String title;
	
	@Column(name="productName", nullable=true, length=400)
	private String productName;
	
	@Column(name="size", nullable=false, length=30)
	private String size;
	
	@Column(name="kind", nullable = false)
	private String kind;
	
	@Column(name="price", nullable=false)
	private int price;
	
	@Column(name="contents", length=2000)
	private String contents;
	
	@Column(name="likes",nullable=false)
	private int likes;
	
	@Column(name="hashtag", length = 300)
	@ColumnDefault("0")
	private String hashtag;

	
	
	
	
	
	
}
