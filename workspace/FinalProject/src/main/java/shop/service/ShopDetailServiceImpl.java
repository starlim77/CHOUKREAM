package shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import shop.bean.CompletedOrderDTO;
import shop.bean.OrderDTO;
import shop.bean.ProductDTO;
import shop.bean.ProductSizeDTO;
import shop.bean.SizeMinDTO;
import shop.dao.CompletedOrderRepository;
import shop.dao.OrderRepository;
import shop.dao.ProductSizeRepository;
import shop.dao.ShopDAO;

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
		return completedOrderRepository.findBySeqOrderByTradeDateDescBySize(seq, size);
	}

}
