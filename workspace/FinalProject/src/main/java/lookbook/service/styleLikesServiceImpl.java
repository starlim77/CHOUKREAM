package lookbook.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lookbook.bean.LikesDTO;
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
	
	//mystyle에서 좋아요 포함 전체 list 데리고오기 
	@Override
	public List<LikesDTO> findLikes(String id) {		 
		 List<LikesDTO> likesDTOList= styleDAO.findLikes(id);
		 return likesDTOList;
    }
	
	//detail.트랜딩 좋아요 포함 전체리스트 데리고오기 // 로그인햇을때
	@Override
	public List<LikesDTO> list() {		 
		 List<LikesDTO> likesDTOList= styleDAO.list();		 
		 return likesDTOList;
    }
	
	//detail.트랜딩 좋아요 포함 전체리스트 데리고오기 // 로그인 했을때
	@Override
	public List<LikesDTO> listById(String id) {
		List<LikesDTO> likesDTOList= styleDAO.listById(id);		 
		 return likesDTOList;
	}
	
	@Override
	public List<LikesDTO> findLikes2(String id) {		 
		 List<LikesDTO> likesDTOList= styleDAO.listById(id);
		 return likesDTOList;
    }
	
	/*  리스트 데리고와서 좋아요 여부 넣어보기
	@Override
	public List<LikesDTO2> findlist() {
		List<LikesDTO2> likesDTOList= styleDAO.list();
		System.out.println("******" + likesDTOList);
		
		for(LikesDTO2 likesDTO2 : likesDTOList) {
		
			 likesDTO2 = StyleLikesDAO.findlist(likesDTO2.getId(),likesDTO2.getSeq());
			 if(likesDTO2 != null) {
				 likesDTO2.setIslikes(true);
			 }else {
				 likesDTO2.setIslikes(false);
			 }
		}
	
		return likesDTOList;
	}
	*/
	
	//detail 좋아요만 확인
//	@Override
//	public boolean checkLikes(StyleLikesDTO styleLikesDTO) {
//		Long id = styleLikesDTO.getMemberId();				
//		int seq = styleLikesDTO.getStyleSeq();
//		styleLikesDTO = styleDAO.checkLikes(id, seq);
//		
//		if(styleLikesDTO != null) {
//			return true;
//		}else {
//			return false;
//				
//		}
//	}

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
