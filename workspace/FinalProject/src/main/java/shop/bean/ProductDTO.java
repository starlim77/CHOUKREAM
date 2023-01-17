package shop.bean;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.springframework.data.annotation.CreatedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Table(name="productTable")
@Entity
public class ProductDTO {
   
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="seq",length=30)
   private int seq;
   
   
   @Column(name="brand", length = 30)
   private String brand;
   
   @Column(name="category", length = 30)
   private String category;
   
   // 0남자 1여자 2무관
   @Column(name="gender")
   private int gender;
   
   @Column(name="color")
   private String color;
   
   // 이미지 주소 
   @Column(name="imgName", length = 500)
   private String imgName; 
   
   @Column(name="modelNum")
   private String modelNum;
   
   @Column(name="releaseDate")
   private String releaseDate;
   
   @Column(name="releasePrice")
   private int releasePrice;
   
   @Column(name="subTitle", length = 100) // 한글이름
   private String subTitle;
   
   @Column(name="title", length = 100) // 제품 영어이름
   private String title;
   
   	// 상품 등록 날짜 / 자동
	@Column(name="registerProductDate", nullable = false)
	@CreatedDate
	private String registerProductDate;
	// date 말고 String 으로 바꾸기 
	
	@PrePersist
	public void prePersist() {
		if (registerProductDate == null) {
			registerProductDate = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy.MM.dd HH:mm"));
		}
	}
 
   // tag 신발 ~ 기타 
   @Column(name="tag", length = 30)
   private String tag;
}













