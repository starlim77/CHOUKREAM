package shop.bean;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Data
@Table(name = "NewProduct")
public class NewProductDTO {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	@Column
	private int seq;
	
	// 회원 id
	@Column(name="id",length=100)
	private String id;
	
	// 사진 경로 
	@Column(name="imgName",length=3000)
	private String imgName;
	
	// 브랜드 
	@Column(name="brand", length = 30)
	private String brand;
	// 제품 영어이름
	@Column(name="title", length = 100) 
	private String title;  
   
	// 한글이름
	@Column(name="subTitle", length = 100) 
   	private String subTitle;
	
	@Column(name="category", length = 30)
	private String category;

	@Column(name="categoryDetail", length = 30)
	private String categoryDetail;
	
	@Column(name="gender")
	private int gender;
   
	// 모델 번호 (고유 번호)
	@Column(name="modelNum")
	private String modelNum;
	
	// 발매일 만들기 
	@Column(name="releaseDate")
	private String releaseDate;
	
	// 상품 등록 날짜
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
   
	// 판매가
	@Column(name="price")
   	private int price;
   
	@Column(name="color")
	private String color;
	
	// size 테이블에 따로넣기
	@Column(name="size", length=30)
	private String size;
	
}














