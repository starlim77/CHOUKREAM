package shop.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import member.bean.MemberDto;
import member.dao.MemberDAO;
import shop.bean.NewProductDTO;
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


//	@Override
//	public void writeItem(UsedItemDTO usedItemDTO) {
//		usedItemDAO.save(usedItemDTO);
//		
//	}

	
	@Override
	public List<UsedItemDTO> getItem() {
		return usedItemDAO.findAll();
		
	}

	@Override
	public Optional<UsedItemDTO> viewItem(int seq) {
		return usedItemDAO.findById(seq);
	}


	@Override
	public UsedItemLikeDTO itemLike(UsedItemLikeDTO usedItemLikeDTO) {
		return usedItemLikeDAO.itemLike(usedItemLikeDTO.getSeq(),usedItemLikeDTO.getId(),usedItemLikeDTO.getShopKind());
	}


	@Override
	public void likeSet(UsedItemLikeDTO usedItemLikeDTO) {
		
		System.out.println(usedItemLikeDTO);
		if(usedItemLikeDTO.getUserLike()) {
			System.out.println("좋아요 ++");
			usedItemLikeDAO.save(usedItemLikeDTO);
		}else {
			System.out.println("좋아요 --");
			usedItemLikeDAO.deleteBySeqAndIdAndShopKind(usedItemLikeDTO.getSeq(),usedItemLikeDTO.getId(),usedItemLikeDTO.getShopKind());
		}
		
	}


	@Override
	public void deleteItem(int seq) {
//		usedItemDAO.deleteItem(seq);
		usedItemDAO.deleteById(seq);
	}


	@Override
	public void usedlike(UsedItemLikeDTO usedItemLikeDTO) {
		if(usedItemLikeDTO.getUserLike()) {
			usedItemDAO.likeUp(usedItemLikeDTO.getSeq());
		}else {
			usedItemDAO.likeDown(usedItemLikeDTO.getSeq());
		}
	}


	@Override
	public void updateItem(UsedItemDTO usedItemDTO) {
		usedItemDAO.save(usedItemDTO);
	}


	@Override
	public void soldOut(UsedItemDTO usedItemDTO) {
		
		usedItemDAO.save(usedItemDTO);
	}


	@Override
	public void updateState(int seq, boolean sellingState) {
		System.out.println("여기 오냐?");
		usedItemDAO.saveByIdAndSellingState(seq,sellingState);
	}


	@Override
	public List<UsedItemDTO> search(Map<String, String> map) {
		String searchOption = map.get("searchOption");
		String keyword = map.get("keyword");
		
		System.out.println("searchOption " + searchOption);
		System.out.println("keyword " + keyword);
		
		if(searchOption.equals("id")) {
			System.out.println("얘 실행");
			return usedItemDAO.getSearchId(keyword);
		}else
			return usedItemDAO.getSearchTitle(keyword);
	}


	@Override
	public String getId(int seq) {
		String sending=usedItemDAO.getId(seq);
		System.out.println(sending);
		return sending;
		
	}
	

	
}
