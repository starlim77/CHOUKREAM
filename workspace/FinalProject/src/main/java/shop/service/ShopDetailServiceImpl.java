package shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.bean.BidsListDTO;
import shop.bean.BrandListDTO;
import shop.bean.CompletedOrderDTO;
import shop.bean.NewNewProductDTO;
import shop.bean.OrderDTO;
import shop.bean.ProductDTO;
import shop.bean.ProductSizeDTO;
import shop.bean.SizeMinDTO;
import shop.bean.UsedItemLikeDTO;
import shop.dao.CompletedOrderRepository;
import shop.dao.NewNewProductRepository;
import shop.dao.OrderRepository;
import shop.dao.ProductSizeRepository;
import shop.dao.ShopDAO;
import shop.dao.UsedItemLikeDAO;

@Service
public class ShopDetailServiceImpl implements ShopDetailService {	
	@Autowired
	private ShopDAO shopDAO;	
	@Autowired
	private OrderRepository orderRepository;	
	@Autowired
	private CompletedOrderRepository completedOrderRepository;
	@Autowired
	private ProductSizeRepository productSizeRepository; 
	@Autowired
	private NewNewProductRepository newNewProductRepository;
	@Autowired
	private UsedItemLikeDAO useItemLikeDAO;
	
	@Override
	public Optional<ProductDTO> getProduct(int seq) {
		return shopDAO.findById(seq);
	}
	
	@Override
	public List<OrderDTO> getSellOrderList(int seq) {
		return orderRepository.getSellOrderList(seq);
	}
	
	@Override
	public List<OrderDTO> getBuyOrderList(int seq) {
		return orderRepository.getBuyOrderList(seq);
	}
	
	@Override
	public List<CompletedOrderDTO> getCompletedOrderList(int seq) {
		return completedOrderRepository.findBySeqOrderByTradeDateDesc(seq);
	}
	
	@Override
	public List<SizeMinDTO> getProductSize(int seq) {
		return orderRepository.getProductSize(seq);
	}
	
	@Override
	public List<OrderDTO> getSellOrderListBySize(int seq, String size) {
		return orderRepository.getSellOrderListBySize(seq, size);
	}
	
	@Override
	public List<OrderDTO> getBuyOrderListBySize(int seq, String size) {
		return orderRepository.getBuyOrderListBySize(seq, size);
	}
	
	@Override
	public List<CompletedOrderDTO> getCompletedOrderListBySize(int seq, String size) {
		// TODO Auto-generated method stub
		return completedOrderRepository.findBySeqOrderByTradeDateDescBySize(seq, size);
	}
	
	@Override
	public List<SizeMinDTO> getProductSizeSell(int seq) {
		return orderRepository.getProductSizeSell(seq);
	}
	
	@Override
	public List<BidsListDTO> getSellBidsList(int seq) {
		return orderRepository.getSellBidsList(seq);
	}
	
	@Override
	public List<BidsListDTO> getSellBidsListBySize(int seq, String size) {
		return orderRepository.getSellBidsListBySize(seq, size);
	}
	
	@Override
	public List<BidsListDTO> getBuyBidsList(int seq) {
		return orderRepository.getBuyBidsList(seq);
	}
	
	@Override
	public List<BidsListDTO> getBuyBidsListBySize(int seq, String size) {
		return orderRepository.getBuyBidsListBySize(seq, size);
	}
	
	@Override
	public List<BrandListDTO> getBrandList(int seq, String brand) {
		return shopDAO.getBrandList(seq, brand);
	}
	
	@Override
	public Optional<NewNewProductDTO> getNewProduct(int seq) {
		return newNewProductRepository.findById(seq);
	}
	
	@Override
	public Long likeCount(int seq, String shopKind) {
		return useItemLikeDAO.likeCount(seq, shopKind);
	}
}
