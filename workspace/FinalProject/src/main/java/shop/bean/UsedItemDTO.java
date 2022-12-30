package shop.bean;


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
	
	@Column(name="id", nullable=false, length=30)
	private String id;
	
	@Column(name="imgName")
	private String imgName;
	
	@Column(name="title", nullable=false,length=100)
	private String title;
	
	@Column(name="productName", nullable=true, length=100)
	private String productName;
	
	@Column(name="size", nullable=false, length=30)
	private String size;
	
	@Column(name="price", nullable=false)
	private int price;
	
	@Column(name="productDescription",nullable=false, length=300)
	private String productDescription;
	

	
	
	
	
	
	
}
