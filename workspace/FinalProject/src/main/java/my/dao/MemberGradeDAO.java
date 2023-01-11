package my.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import my.bean.MemberGradeDTO;

public interface MemberGradeDAO extends JpaRepository<MemberGradeDTO, String>{

}
