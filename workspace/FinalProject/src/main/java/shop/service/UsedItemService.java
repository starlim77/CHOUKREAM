package shop.service;

import java.util.List;
import java.util.Optional;

import shop.bean.UsedItemDTO;

public interface UsedItemService {

	public void upload2(UsedItemDTO usedItemDTO);

	public void writeItem(UsedItemDTO usedItemDTO);

	public List<UsedItemDTO> getItem();

	public Optional<UsedItemDTO> viewItem(int seq);

}
