package my.dao;



import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import jakarta.transaction.Transactional;
import my.bean.AddressDTO;
import shop.bean.ProductDTO;

public interface AddressDAO extends JpaRepository<AddressDTO, Long> {
	
	Optional<AddressDTO> findByIdAndDefaultAddress(String id, int i);

	List<AddressDTO> findAddressDTOsByIdOrderByDefaultAddressDesc(String id);

	@Transactional
	Optional<AddressDTO> deleteByIdAndSeq(String id, long seq);

}
