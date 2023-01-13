package lookbook.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lookbook.bean.StyleDTO;
import lookbook.bean.StyleLikesDTO;
import lookbook.dao.StyleDAO;
import lookbook.dao.StyleFileDAO;
import lookbook.dao.StyleLikesDAO;
import lookbook.entity.StyleEntity;
import lookbook.entity.StyleLikesEntity;
import member.bean.MemberDto;
import member.dao.MemberDAO;

@Service
@RequiredArgsConstructor
public class styleLikesServiceImpl implements StyleLikesService {
	@Autowired
	private StyleDAO styleDAO;
	@Autowired
	private MemberDAO memberDAO;
	@Autowired
	private StyleLikesDAO styleLikesDAO;
	
	 //좋아요 했는지 찾기
	 @Override
	 public List<StyleLikesDTO> findLikes(String id) {
//			Long memberId = styleLikesDTO.getMemberId();				
//			int styleSeq = styleLikesDTO.getStyleSeq();
			 
		 // 저장된 좋아요가 없다면 false , 있다면 true // 게시물 seq와 로그인아이디를 같이 가져가서 조회
//	        Optional<StyleLikesEntity> findLikes = styleLikesDAO.findByMemberDto_IdAndStyleEntity_Seq(memberId, styleSeq);
	       
//	        if (findLikes.isEmpty()){
//	            return false;
//	        }else {
//	            return true;
//	        }
		 List<StyleLikesEntity> styleEntityList = styleLikesDAO.findByMemberDto_Id(id);
	     List<StyleLikesDTO> styleLikesDTOList = new ArrayList<>();
	     
	      for (StyleLikesEntity styleEntity: styleEntityList) {
	         styleLikesDTOList.add(StyleLikesDTO.toStyleLikesDTO(styleEntity));
	      }
		 
		 return styleLikesDTOList;

    }


//좋아요 저장하기
//참고 : https://velog.io/@hellocdpa/220220-SpringBoot%EC%A2%8B%EC%95%84%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
		@Transactional
	    @Override
	    public int save(StyleLikesDTO styleLikesDTO,boolean isLike) {
			Long memberId = styleLikesDTO.getMemberId();				
			int styleSeq = styleLikesDTO.getStyleSeq();
				
			Optional<StyleLikesEntity> findLikes = styleLikesDAO.findByMemberDto_IdAndStyleEntity_Seq(memberId, styleSeq);

			
			MemberDto memberDto = memberDAO.findById(memberId).get();   //memberdto 테이블의 @id 컬럼
			Optional<StyleEntity> optionalStyleEntity = styleDAO.findBySeq(styleSeq);
			StyleEntity styleEntity = optionalStyleEntity.get();

			StyleLikesEntity styleLikesEntity = StyleLikesEntity.toLikesEntity(memberDto, styleEntity );
	      
			if (findLikes.isEmpty()){
	            styleLikesDAO.save(styleLikesEntity);
				styleEntity.setLikesCount(styleEntity.getLikesCount()+1);  //좋아요 +1 저장

	            return 1;
	            
	        } else {
		      
	        	styleLikesDAO.deleteByMemberDto_IdAndStyleEntity_Seq(memberId, styleSeq);
	        	styleEntity.setLikesCount(styleEntity.getLikesCount()-1);

	            return 0;

	        }

	    }

		
		//좋아요 카운트
		@Override
		public int findAll(StyleLikesDTO styleLikesDTO) {	
			int styleSeq = styleLikesDTO.getStyleSeq();
			System.out.println("styleSeq ====="  + styleSeq);
			return styleLikesDAO.countByStyleEntity_Seq(styleSeq);
			
		}

}
