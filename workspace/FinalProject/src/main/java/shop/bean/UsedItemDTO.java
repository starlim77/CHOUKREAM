package shop.bean;


import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.annotations.ColumnDefault;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
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
	@Column(name="seq",length=30)
	private int seq;
	
	@Column(name="writer",length=100)
	private String writer;
	
	@Column(name="id",length=100)
	private String id;
	
	@Column(name="imgName",length=3000)
	private String imgName;
	
	@Column(name="title",length=400)
	private String title;
	
	@Column(name="productName", length=400)
	private String productName;
	
	@Column(name="size", length=30)
	private String size;
	
	@Column(name="kind")
	private String kind;
	
	@Column(name="price")
	private int price;
	
	@Column(name="contents", length=2000)
	private String contents;
	
	@Column(name="likes")
	private int likes;
	
	@ElementCollection
	@CollectionTable(name="usedItem_hashTag")
	private Set<String> hashTag = new HashSet<String>();
	
	@Column(name="sellingState")
	private boolean sellingState;
	
	
	//jpa관련 기본 개념
	//https://data-make.tistory.com/610
	
	
	
}
