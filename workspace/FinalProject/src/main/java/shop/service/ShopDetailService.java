package shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.jaxb.SpringDataJaxb.OrderDto;

import lookbook.bean.StyleDTO;
import shop.bean.BidsListDTO;
import shop.bean.BrandListDTO;
import shop.bean.CompletedOrderDTO;
import shop.bean.NewProductDTO;
import shop.bean.NewProductOptionDTO;
import shop.bean.OrderDTO;
import shop.bean.ProductDTO;
import shop.bean.ProductSizeDTO;
import shop.bean.SizeMinDTO;
import shop.bean.UsedItemLikeDTO;

public interface ShopDetailService {
	
	public Optional<ProductDTO> getProduct(int seq);
	
	public List<OrderDTO> getSellOrderList(int seq);
	
	public List<OrderDTO> getBuyOrderList(int seq);

	public List<CompletedOrderDTO> getCompletedOrderList(int seq);

	public List<SizeMinDTO> getProductSize(int seq);

	public List<OrderDTO> getSellOrderListBySize(int seq, String size);

	public List<OrderDTO> getBuyOrderListBySize(int seq, String size);

	public List<CompletedOrderDTO> getCompletedOrderListBySize(int seq, String size);

	public List<SizeMinDTO> getProductSizeSell(int seq);

	public List<BidsListDTO> getSellBidsListBySize(int seq, String size);

	public List<BidsListDTO> getSellBidsList(int seq);

	public List<BidsListDTO> getBuyBidsList(int seq);

	public List<BidsListDTO> getBuyBidsListBySize(int seq, String size);

	public List<BrandListDTO> getBrandList(int seq, String brand);

	public Optional<NewProductDTO> getNewProduct(int seq);

	public Long likeCount(int seq, String shopKind);

	public void addSellOrder(OrderDTO orderDTO);
	public List<StyleDTO> getBrandStyleList(int seq);

	public List<NewProductOptionDTO> getNewProductOption(int seq);

	public void addNewProductOption(int seq, String option);

//	public Optional<Integer> getProductSizeMin(int seq, String size);
}
