package lookbook.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lookbook.bean.StyleDTO;
import lookbook.dao.StyleFollowingDAO;
import lookbook.entity.StyleEntity;
import lookbook.entity.StyleFollowingEntity;
import member.bean.MemberDto;
import member.dao.MemberDAO;

@Service
//@RequiredArgsConstructor
public class StyleFollowingServiceImpl implements StyleFollowingService {	
	@Autowired
	private MemberDAO memberDAO;
	@Autowired
	private StyleFollowingDAO styleFollowingDAO;
	
	
	

	
	//팔로우하기
	@Transactional
	public void save(MemberDto followerDto, MemberDto followeeDto) {
		//dto -> Entity
		StyleFollowingEntity styleFollowingEntity = StyleFollowingEntity.toFollowingEntity(followerDto, followeeDto);
		
		//엔티티 저장
		styleFollowingDAO.save(styleFollowingEntity);
	}


	//언팔하기
	@Transactional
	public void delete(int followerId, int followeeId) {
				
		//StyleFollowingEntity styleFollowingEntity = StyleFollowingEntity.toFollowingEntity(followerDto, followeeDto);
		//엔티티 삭제
		styleFollowingDAO.deleteByFollowerIdAndFolloweeId(followerId, followeeId);
		//styleFollowingDAO.delete(styleFollowingEntity);
	}
	

	
	//내 팔로잉 리스트 불러오기
//	@Transactional
//	public List<StyleDTO> getFollowing(int id){		
//		// 팔로워가 팔로잉한 목록거 가져오기
//		List<StyleEntity> followingEntityList= styleFollowingDAO.findAllByFollowerId(id);
//		///id로 팔로잉 목록 찾아와서 followee 찾기
//		List<StyleDTO> followingDTOList = new ArrayList<>();
//		//dto list에 담기		
//		for(StyleFollowingEntity styleFollowingEntity: followingEntityList) {
//			followingDTOList.add(StyleDTO.toStyleDTO(styleFollowingEntity));
//		}
//		
//		///id로 팔로잉 목록 찾아와서 followee 찾기
//		//팔로이가 아이디인 스타일엔티티 찾아오기
//		//seq최신순으로 정렬
//		
//		
//		
//		return styleDTOList;
//	}
//	
	
	
	
//	
//	//팔로워 카운트
//	
//	public Long followerCount(MemberDto follower, MemberDto followee) {
//		return  styleFollowingDAO.countFollwerByFollowee(follower,followee);
//		
//	}
//	
//	//팔로잉 카운트
//	public Long followeeCount(MemberDto follower, MemberDto followee) {
//		return styleFollowingDAO.countFolloweeByFollower(follower,followee);
//
//	}
//	
//	
	
	
}
