package lookbook.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lookbook.bean.StyleDTO;
import lookbook.dao.StyleFollowingDAO;
import lookbook.entity.StyleFollowingEntity;
import member.bean.MemberDto;
import member.dao.MemberDAO;

@Service
@RequiredArgsConstructor
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
