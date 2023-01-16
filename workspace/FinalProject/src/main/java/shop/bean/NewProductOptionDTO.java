package shop.bean;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "NewProductOption")
@NoArgsConstructor 
public class NewProductOptionDTO {	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	@Column(name="newOptionSeq")
	private int newOptionSeq;
	
	@Column(name="seq")
	private int seq;
	
	@Column(name="productOption")
	private String productOption;
	
	@Column(name="inventory", length = 30)
	private int inventory;
	
}