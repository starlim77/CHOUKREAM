package shop.bean;

import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.Data;

@Entity
@Data
@Table(name = "newProduct")
public class NewProductDTO {
	
	@Id // 자동
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	@Column
	private int seq;
	
	// 사진 경로 
	@Column(name="imgName",length=3000)
	private String imgName;
	
	// 브랜드 ok
	@Column(name="brand", length = 30)
	private String brand;
	
	// 제품 영어이름 ok
	@Column(name="title", length = 100) 
	private String title;  
   
	// 한글이름 ok
	@Column(name="subTitle", length = 100) 
   	private String subTitle;
	
	// ok
	@Column(name="category", length = 30)
	private String category;
	
	// tag 신발 ~ 기타 
	@Column(name="tag", length = 30)
	private String tag;
	
	// 0남자 1여자 2무관
   @Column(name="gender")
   private String gender;
   
   @Column(name="releaseDate")
   private String releaseDate;
	
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
	
	// 상세설명 이미지 ok
	@Column(name="descriptionImg")
   	private String descriptionImg;
	
	// 판매가 ok
	@Column(name="price")
   	private int price;
	
	// 상호명 ok
	@Column(name="businessName")
	private String businessName;
	
	// 사업자 번호 o
	@Column(name="comRegNo")
	private String comRegNo;
	
	// 대표자 o
	@Column(name="representative")
	private String representative;
	
	// 사업장 소재지o
	@Column(name="businessLocation")
	private String businessLocation;
	
	// 고객센터o
	@Column(name="serviceCall")
	private String serviceCall;
	
	// 소재o
	@Column(name="material")
	private String material;
	
	// ok
	@Column(name="color")
	private String color;
	
	// 제조 회사
	@Column(name="manufacturer")
	private String manufacturer;
	
	// 제조국
	@Column(name="countryOfManufacturer")
	private String countryOfManufacturer;
	
	// 제조 날짜 년,월 까지
	@Column(name="dateOfManufacturer")
	private String dateOfManufacturer;
	
	// size 테이블 
	@OneToMany(targetEntity = NewProductOptionDTO.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name ="seq", referencedColumnName = "seq")
	private List<NewProductOptionDTO> NewProductOptionDTO;
	
}














