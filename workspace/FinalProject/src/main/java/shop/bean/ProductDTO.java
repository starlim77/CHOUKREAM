package shop.bean;

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
 
   // tag 신발 ~ 기타 
   @Column(name="tag", length = 30)
   private String tag;
   
   
//   @CreationTimestamp // 엔티티가 생성되는 시점의 시간 등록
//   private Timestamp logtime;
   
//   @Column(name="interest" , length = 20)
//   private int interest;
//   
//   @Column(name="follow" , length = 20)
//   private int follow;
}













