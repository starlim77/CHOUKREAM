package shop.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import shop.bean.UsedItemDTO;
import shop.bean.UsedItemLikeDTO;

@Repository
public interface UsedItemDAO extends JpaRepository<UsedItemDTO, Integer>{

	
}
