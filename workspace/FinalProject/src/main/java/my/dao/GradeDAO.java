package my.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import my.bean.GradeDTO;

public interface GradeDAO extends JpaRepository<GradeDTO, String>{
	
}
