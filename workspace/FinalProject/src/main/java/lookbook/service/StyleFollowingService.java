package lookbook.service;

import lookbook.bean.StyleDTO;
import member.bean.MemberDto;

public interface StyleFollowingService {

	public void save(MemberDto follower, StyleDTO styleDTO);

}
