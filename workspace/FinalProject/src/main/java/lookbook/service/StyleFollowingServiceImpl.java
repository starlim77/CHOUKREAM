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

}
