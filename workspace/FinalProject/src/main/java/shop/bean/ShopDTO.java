package shop.bean;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name="productTable")
@Entity
@SequenceGenerator(
			name="SHOP_SEQ_GENERATOR"
			, sequenceName="PRODUCT_SEQ"
			, initialValue = 1
			, allocationSize = 1
		)
public class ShopDTO {
	
	@Id // pk 설정
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PRODUCT_SEQ_GENERATOR")
	@Column(name="seq", length = 30)
	private int seq;
	
	@Column(name="img", nullable = false, length = 500)
	private String img;

	@Column(name="imgWeb", nullable = false, length = 500)
	private String imgWeb;
	
	@Column(name="brand", length = 30)
	private String brand;
	
	@Column(name="title", length = 100) // 제품 영어이름
	private String title;  
	
	@Column(name="subTitle", length = 100) // 한글이름
	private String subTitle;
	
	@Column(name="category", length = 30)
	private String category;

	@Column(name="categoryDetail", length = 30)
	private String categoryDetail;
	
	@Column(name="gender")
	private int gender;
	
	@Column(name="modelNum")
	private String modelNum;
	
	@Column(name="releaseDate")
	private int releaseDate;
	
	@Column(name="releasePrice")
	private int releasePrice;
	
	@Column(name="color")
	private String color;
	
	@Column(name="interest" , length = 20)
	private int interest;
	
	@Column(name="follow" , length = 20)
	private int follow;
	
//	@CreationTimestamp // 엔티티가 생성되는 시점의 시간 등록
//	private Timestamp logtime;
	
}














