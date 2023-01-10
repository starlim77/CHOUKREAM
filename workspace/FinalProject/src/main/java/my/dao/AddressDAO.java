package my.dao;



import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


import my.bean.AddressDTO;

public interface AddressDAO extends JpaRepository<AddressDTO, Long> {
	
	Optional<AddressDTO> findByIdAndDefaultAddress(String id, int i);

	List<AddressDTO> findAddressDTOsByIdOrderByDefaultAddressDesc(String id);
}
