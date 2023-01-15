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
@Table(name="UsedItemReport")
public class UsedItemReportDTO {

	
	
	//등록번호/글번호/신고한사람/신고당한 사람/
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="registerNo",length=30)
	private int registerNo;
	
	@Column(name="seq",length=30)
	private int seq;
	
	@Column(name="reportId",length=100)//신고자
	private String reportId;
	
	@Column(name="writer",length=100)//작성자
	private String writer;
	
	//신고당한 시간 설정할지 말지 정할것
}
