package shop.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="ProductSizeTmp")
@Data
@SequenceGenerator(
		name = "PRODUCT_SIZE_SEQ_GENERATOR",
		sequenceName = "PRODUCT_SIZE_SEQ",
		initialValue = 1,
		allocationSize = 1)
public class ProductSizeDTO {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PRODUCT_SIZE_SEQ_GENERATOR" )
	@Column(name = "SizeSeq", length = 30)
	private int sizeSeq;
	
	@Column(name = "ProductType")
	private int productType;
	
	@Column (name = "size")
	private String size;
	
}
