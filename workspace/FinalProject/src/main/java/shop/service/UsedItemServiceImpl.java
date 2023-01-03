package shop.service;

import java.util.List;

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


	
}
