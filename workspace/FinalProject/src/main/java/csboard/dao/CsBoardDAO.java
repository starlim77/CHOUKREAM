package csboard.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import csboard.bean.CsBoardDTO;

public interface CsBoardDAO extends JpaRepository<CsBoardDTO, String> {

}
