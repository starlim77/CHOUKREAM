package my.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import my.bean.PointDTO;

public interface PointDAO extends JpaRepository<PointDTO, String>{
	
}
