package shop.bean;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.data.annotation.CreatedDate;

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
import lombok.Data;

@Entity
@Data
@Table(name = "NewNewProduct")
public class NewNewProductDTO {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	@Column
	private int newSeq;
	
	// 회원 id 왜 들어간지 모르겠음
//	@Column(name="id",length=100)
//	private String id;
	
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
   
	// 모델 번호 (고유 번호) 필요없을듯
//	@Column(name="modelNum")
//	private String modelNum;
	
	// 발매일 만들기 필요없음, 제조년월로 대체
//	@Column(name="releaseDate")
//	private String releaseDate;
	
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
	
	@Column(name="businessName")
	private String businessName;
	
	@Column(name="comRegNo")
	private String comRegNo;
	
	@Column(name="representative")
	private String representative;
	
	@Column(name="businessLocation")
	private String businessLocation;
	
	@Column(name="serviceCall")
	private String serviceCall;
	
	@Column(name="material")
	private String material;
	
	@Column(name="color")
	private String color;
	
	@Column(name="manufacturer")
	private String manufacturer;
	
	@Column(name="countryOfManufacturer")
	private String countryOfManufacturer;
	
	@Column(name="dateOfManufacturer")
	private String dateOfManufacturer;
	
	@OneToMany(targetEntity = NewProductOptionDTO.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
	@JoinColumn(name ="newSeq", referencedColumnName = "newSeq")
	private List<NewProductOptionDTO> NewProductOptionDTO;
	
}
