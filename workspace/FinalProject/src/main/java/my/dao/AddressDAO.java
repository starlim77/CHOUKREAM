package my.dao;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import my.bean.AddressDTO;

public interface AddressDAO extends JpaRepository<AddressDTO, Long> {

	List<AddressDTO> findAddressDTOsById(String id);

}
