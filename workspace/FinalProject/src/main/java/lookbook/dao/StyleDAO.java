package lookbook.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lookbook.bean.StyleDTO;

@Repository
public interface StyleDAO extends JpaRepository<StyleDTO, String> {
	

}
