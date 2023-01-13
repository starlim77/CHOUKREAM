package shop.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import shop.bean.NewProductDTO;
import shop.bean.UsedItemDTO;
import shop.bean.UsedItemLikeDTO;

public interface UsedItemService {

	public void upload2(UsedItemDTO usedItemDTO);

//	public void writeItem(UsedItemDTO usedItemDTO);

	public List<UsedItemDTO> getItem();

	public Optional<UsedItemDTO> viewItem(int seq);

	public UsedItemLikeDTO itemLike(UsedItemLikeDTO usedItemLikeDTO);

	public void likeSet(UsedItemLikeDTO usedItemLikeDTO);

	public void deleteItem(int seq);

	public void usedlike(UsedItemLikeDTO usedItemLikeDTO);

	public void updateItem(UsedItemDTO usedItemDTO);

	public void soldOut(UsedItemDTO usedItemDTO);

	public void updateState(int seq, boolean sellingState);

	public List<UsedItemDTO> search(Map<String, String> map);

	public String getId(int seq);

}
