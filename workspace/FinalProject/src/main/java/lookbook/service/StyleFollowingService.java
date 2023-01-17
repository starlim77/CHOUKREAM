package lookbook.service;

import java.util.List;

import lookbook.bean.StyleDTO;
import member.bean.MemberDto;

public interface StyleFollowingService {
	
	public void save(MemberDto followerDto, MemberDto followeeDto);

	public void delete(int followerId, int followeeId);

	public List<StyleDTO> getFollowing(int id);

	public Long followerCount(Long id);	
	
	public Long followeeCount(Long id);	
	
}
