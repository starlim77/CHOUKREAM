package lookbook.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lookbook.entity.StyleEntity;
import lookbook.entity.StyleFollowingEntity;
import member.bean.MemberDto;

@Repository
public interface StyleFollowingDAO extends JpaRepository<StyleFollowingEntity, String>{

	public void deleteByFollowerIdAndFolloweeId(int followerId, int followeeId);
	

	public List<StyleFollowingEntity> findAllByFollowerId(int id);


	public Long countByFolloweeId(Long followeeId);

	
	public Long countByFollowerId(Long follower);
}
