package lookbook.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lookbook.bean.StyleCommentDTO;
import lookbook.dao.StyleCommentDAO;
import lookbook.dao.StyleDAO;
import lookbook.entity.StyleCommentEntity;
import lookbook.entity.StyleEntity;

@Service
@RequiredArgsConstructor
public class StyleCommentServiceImpl implements StyleCommentService {
	@Autowired
	private StyleDAO styleDAO;
	@Autowired
	private StyleCommentDAO styleCommentDAO;
		
	@Transactional
	public Long save(StyleCommentDTO styleCommentDTO) {
		//부모엔티티( StyleEntity ) 조회
		Optional<StyleEntity> optionalStyleEntity = styleDAO.findBySeq(styleCommentDTO.getStyleSeq());
		
		if(optionalStyleEntity.isPresent()) {// 글번호 잘못 넘어가지 않게
			StyleEntity styleEntity = optionalStyleEntity.get();//글번호 
			
			//dto -> entity
			StyleCommentEntity styleCommentEntity = StyleCommentEntity.toSaveEntity(styleCommentDTO,styleEntity);//
			//클래스 메소드로 사용하는이유- 엔티티를 외부에 노출안시키고 보호해/엔티티는 DB연결하니까
			//builder를 쓰기도 한다
			
			return styleCommentDAO.save(styleCommentEntity).getId();//댓글 저장
		} else {
			return null;
		}
		
	}
	
	@Transactional
	public List<StyleCommentDTO> findAll(int styleSeq) {
		//select * from style_comment_table where styleSeq=? order by seq desc;
		StyleEntity styleEntity = styleDAO.findBySeq(styleSeq).get();
		
		List<StyleCommentEntity> styleCommentEntityList = styleCommentDAO.findAllByStyleEntityOrderByIdDesc(styleEntity);
		
		//entityList --> DTOList
		 List<StyleCommentDTO> styleCommentDTOList = new ArrayList<>();
	        for (StyleCommentEntity styleCommentEntity : styleCommentEntityList) {
	            StyleCommentDTO styleCommentDTO = StyleCommentDTO.toStyleCommentDTO(styleCommentEntity, styleSeq);
	            styleCommentDTOList.add(styleCommentDTO);
	            
	            System.out.println(styleCommentDTO);
	        }
		
		
		return styleCommentDTOList;
	}

	@Transactional
	public void delete(String id) {
		styleCommentDAO.deleteById(id);
		
	}

	
	
}
