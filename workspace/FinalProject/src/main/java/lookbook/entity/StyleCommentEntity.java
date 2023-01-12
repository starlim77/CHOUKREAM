package lookbook.entity;

import java.sql.Timestamp;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lookbook.bean.StyleCommentDTO;

@Entity
@Data
@Table(name = "style_comment_table")
public class StyleCommentEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;// Long이면 null 이 들어올 수 잇어서 //null값이 오는게 확인하기 더 좋다?
	
	@Column(length = 30, nullable = false)
	private String commentMember;
	
	@Column
	private String commentContents;
	
	@CreationTimestamp
	@Column(updatable = false)
	private Timestamp createdTime;
	
	/* styleDetail : styleComment = 1:N */
	@ManyToOne(fetch = FetchType.LAZY) //댓글기준
	@JoinColumn(name = "style_seq")
	private StyleEntity styleEntity;
	
	public static StyleCommentEntity toSaveEntity(StyleCommentDTO styleCommentDTO, StyleEntity styleEntity) {
		StyleCommentEntity styleCommentEntity = new StyleCommentEntity();
		styleCommentEntity.setCommentMember(styleCommentDTO.getCommentMember());
		styleCommentEntity.setCommentContents(styleCommentDTO.getCommentContents());
		styleCommentEntity.setStyleEntity(styleEntity);//게시글 번호로 조회한 부모entitiy를 넣어줌
		return styleCommentEntity;
	}

	
	
	
	
}
