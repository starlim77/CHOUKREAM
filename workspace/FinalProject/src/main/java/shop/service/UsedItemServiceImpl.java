package shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.bean.UsedItemDTO;
import shop.dao.UsedItemDAO;

@Service
public class UsedItemServiceImpl implements UsedItemService {
	
	@Autowired
	private UsedItemDAO usedItemDAO;
	
	@Override
	public void upload2(UsedItemDTO usedItemDTO) {
		usedItemDAO.save(usedItemDTO);
		
	}


	@Override
	public void writeItem(UsedItemDTO usedItemDTO) {
		usedItemDAO.save(usedItemDTO);
		
	}

	
	@Override
	public List<UsedItemDTO> getItem() {
		return usedItemDAO.findAll();
		
	}

	@Override
	public Optional<UsedItemDTO> viewItem(int seq) {
		return usedItemDAO.findById(seq);
	}
	

	
}
