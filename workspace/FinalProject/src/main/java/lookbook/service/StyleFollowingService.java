package lookbook.service;

import lookbook.bean.StyleDTO;
import member.bean.MemberDto;

public interface StyleFollowingService {
	
	public void save(MemberDto followerDto, MemberDto followeeDto);

	public void delete(int followerId, int followeeId);
	
	//public void delete(MemberDto followerDto, MemberDto followeeDto);


}
