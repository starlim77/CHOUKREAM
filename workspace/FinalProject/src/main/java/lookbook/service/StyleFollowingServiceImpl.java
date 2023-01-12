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
	
	
	
	//팔로잉 했는지 검사
	
	
	//팔로우하기
	@Transactional
	public void save(MemberDto follower, StyleDTO styleDTO) {
		
		//스타일에서는 member의 name을 아이디로 쓴다
		Optional<MemberDto> optionalfolloweeMemberDto =  memberDAO.findByName(styleDTO.getId());		
		MemberDto followeeMemberDto =  optionalfolloweeMemberDto.get();
		
		//dto -> Entity
		StyleFollowingEntity styleFollowingEntity = StyleFollowingEntity.toFollowingEntity(follower, followeeMemberDto);
		
		//엔티티 저장
		styleFollowingDAO.save(styleFollowingEntity).getId();
	}
	
	
	//언팔하기
	
	
	//팔로우 카운트
	
	
	
	
	
	
}
