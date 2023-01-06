package shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.bean.UsedItemDTO;
import shop.bean.UsedItemLikeDTO;
import shop.dao.UsedItemDAO;
import shop.dao.UsedItemLikeDAO;

@Service
public class UsedItemServiceImpl implements UsedItemService {
	
	@Autowired
	private UsedItemDAO usedItemDAO;
	
	@Autowired
	private UsedItemLikeDAO usedItemLikeDAO;
	
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


	//DAO는 테이블로 만들 DAO의 개수만큼 만들어줘야 한다.
	@Override
	public List<UsedItemLikeDTO> itemLike(int seq) {

		//System.out.println("서비스에 있는 시퀀스"+seq);
		return null;
//		return usedItemDAO.itemLike(seq);
	}


	@Override
	public UsedItemLikeDTO itemLike2(int seq) {

		//System.out.println("서비스에 있는 시퀀스"+seq);
		//return null;

		return usedItemLikeDAO.itemLike2(seq);
	}


	@Override
	public void likeSet(UsedItemLikeDTO usedItemLikeDTO) {
		// TODO Auto-generated method stub
		usedItemLikeDAO.save(usedItemLikeDTO);
	}


	@Override
	public void deleteItem(int seq) {
		usedItemDAO.deleteItem(seq);
		//usedItemDAO.deleteById(seq);
	}
	

	
}
