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
//@Table(name = "userItemLike")//많이 아프셨나봐요 진영씨?ㅋㅋㅋㅋㅋㅋ DAO랑 DTO랑 테이블명이 다른데 안나올수 밖에
@Table(name = "usedItemLike")
@Entity
@SequenceGenerator(
		name="ITEMLIKE_GENERATOR",
		sequenceName="ITEMLIKE_SEQ",
		initialValue =1,
		allocationSize=1)
public class UsedItemLikeDTO {
	
	@Id
//	@Column(name="registerNo")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="ITEMLIKE_GENERATOR")
	private int registerNo;
	//얘를 pk로 잡고 나중에 데이터 불러올때 DAO에 seq랑 id를 기준으로 가져오는 걸로 수정해야함.
	//pk 설정 안하는 방법은 잘 안나와서 일단 skip했음.
	
	@Column(name="seq")
	private int seq;
	
	
	@Column(name="id")
	private String id;
	
	
	@Column(name="userLike")
	private Boolean userLike;
	
}
