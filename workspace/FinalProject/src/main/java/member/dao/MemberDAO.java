package member.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import member.bean.MemberDto;

@Repository
public interface MemberDAO extends JpaRepository<MemberDto, String> {
	public Optional<MemberDto> findByEmail(String email);
    public boolean existsByEmail(String email);
}
