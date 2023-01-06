package lookbook.entity;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lookbook.bean.StyleDTO;


//DB의 테이블 역할을 하는 클래스
@Entity
@Data
@RequiredArgsConstructor
@Table(name ="style_table")
public class StyleEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "STYLE_SEQ") 
	@Column(name="seq")
	private int seq;
	
	@Column(name = "id", length=30)
	private String id;
	
	
	@Column(name="content")
	private String content;
	
	@CreationTimestamp  //엔터키가 생성되는 시점의 시간 등록
	private Timestamp logtime;
	
	@Column(name="hit")
	private int hit;
	
	@Column
	private int fileAttached;// 1 or 0
	
	@OneToMany(mappedBy = "styleEntity", cascade = CascadeType.REMOVE, orphanRemoval = true, fetch = FetchType.LAZY)
	private List<StyleFileEntity> styleFileEntityList = new ArrayList<>();
	//mappedBy = "styleEntity" -이름 파일엔티티에 매칭시킨 이름이랑 같은이름으로
	//부모가 삭제되면 자식도 같이 삭제되도록 관계설정
	
	@OneToMany(mappedBy = "styleEntity", cascade = CascadeType.REMOVE, orphanRemoval = true, fetch = FetchType.LAZY)
	private List<StyleCommentEntity> styleCommentEntityList = new ArrayList<>();
	
	public static StyleEntity toSaveEntity(StyleDTO styleDTO) {
		StyleEntity styleEntity = new StyleEntity();
		styleEntity.setId(styleDTO.getId());		
		styleEntity.setContent(styleDTO.getContent());
		styleEntity.setLogtime(styleDTO.getLogtime());
		styleEntity.setHit(0);
		styleEntity.setFileAttached(0);
		
		System.out.println("여기"+styleEntity);
		return styleEntity;
	}


	public static StyleEntity toSaveFileEntity(StyleDTO styleDTO) {
		StyleEntity styleEntity = new StyleEntity();
		styleEntity.setId(styleDTO.getId());		
		styleEntity.setContent(styleDTO.getContent());
		styleEntity.setLogtime(styleDTO.getLogtime());
		styleEntity.setHit(0);
		styleEntity.setFileAttached(1);  // 파일 있음
		
		System.out.println("요기"+styleEntity);
		return styleEntity;
	}
	
}
