package shop.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import shop.bean.UsedItemDTO;

@Repository
public interface UsedItemDAO extends JpaRepository<UsedItemDTO, Integer>{


}
