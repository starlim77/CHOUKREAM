package lookbook.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lookbook.bean.StyleDTO;
import lookbook.dao.StyleDAO;
import lookbook.dao.StyleFollowingDAO;
import lookbook.entity.StyleEntity;
import lookbook.entity.StyleFollowingEntity;
import member.bean.MemberDto;
import member.dao.MemberDAO;

@Service
@RequiredArgsConstructor
public class StyleFollowingServiceImpl implements StyleFollowingService {	
	@Autowired
	private MemberDAO memberDAO;
	@Autowired
	private StyleDAO styleDAO;
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
	@Transactional
	public List<StyleDTO> getFollowing(int id){		
		// 팔로워가 팔로잉한 팔로잉엔티티 가져오기 		
		List<StyleFollowingEntity> followingEntityList = styleFollowingDAO.findAllByFollowerId(id);
		
		//팔로잉 엔티티리스트에 담긴 팔로이 아이디 찾아서 리스트 담기
		List<MemberDto> followeeDtoList= new ArrayList<>();		
		for(StyleFollowingEntity styleFollowingEntity : followingEntityList) {
			followeeDtoList.add(styleFollowingEntity.getFollowee());
		}
		System.out.println("11111111"+followeeDtoList);
		
		//스타일엔티티 팔로이 아이디로 찾아오기
//		List<StyleEntity> fstyleEntityList = new ArrayList<>();
//		String str = " ";
//		for(MemberDto memDto: followeeDtoList) {	
//			System.out.println(memDto.getId()+"-------");
//			str += memDto.getId() + " OR id = ";
//		}	
//		int index = str.lastIndexOf(" OR id = ");
//		str = str.substring(0, index);
//		System.out.println("str = " +  str);
//		
//		fstyleEntityList = styleDAO.getFollowing(str);
//		
//		//System.out.println(fstyleEntityList);
//		System.out.println("00000000000000000000000000000000000000");
		
		//List<StyleEntity> fstyleEntityList = new ArrayList<>();
		
		List<StyleEntity> fstyleEntityList = new ArrayList<>();
		for(MemberDto memDto: followeeDtoList) {	
			List<String> idList = new ArrayList<>();
			idList.add(memDto.getId().toString());
			fstyleEntityList = styleDAO.findAllByIdIn(idList);
			
			
		}	
			
		
		
		//entity->dto
		List<StyleDTO> fstyleDTOList = new ArrayList<>();
		for(StyleEntity fstyleEntity : fstyleEntityList) {
			fstyleDTOList.add(StyleDTO.toStyleDTO(fstyleEntity));
		}	
		System.out.println("333333"+fstyleDTOList);

		return fstyleDTOList;
	}


	
	//팔로워 카운트
	@Transactional
	public Long followerCount(Long followeeId) {
		//System.out.println("zzzzz"+styleFollowingDAO.countByFolloweeId(followeeId)+" zzzz");		
		return  styleFollowingDAO.countByFolloweeId(followeeId);
		
	}
	
	//팔로이 카운트
	@Transactional
	public Long followeeCount(Long followerId) {
		//System.out.println("aaaa"+styleFollowingDAO.countByFollowerId(followerId));
		return styleFollowingDAO.countByFollowerId(followerId);

	}
	
	
	
	
}
