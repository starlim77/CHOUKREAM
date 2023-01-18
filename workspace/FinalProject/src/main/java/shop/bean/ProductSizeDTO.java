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
@Table(name="productSizeTable")
@Entity
public class ProductSizeDTO {

	   @Id // pk 설정
	   @GeneratedValue(strategy = GenerationType.IDENTITY )
	   @Column(name="sizeSeq", length = 30)
	   private int sizeSeq;
	
	   @Column(name="seq", length = 30)
	   private int seq;
	   
	   @Column(name="size", length = 30)
	   private String size;
}
