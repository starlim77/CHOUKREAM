package lookbook.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lookbook.entity.StyleFollowingEntity;
import member.bean.MemberDto;

@Repository
public interface StyleFollowingDAO extends JpaRepository<StyleFollowingEntity, String>{

	public void deleteByFollowerIdAndFolloweeId(int followerId, int followeeId);

	//public void deleteByStyleFollowingEntity(StyleFollowingEntity styleFollowingEntity);

	



}
