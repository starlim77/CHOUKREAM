package shop.dao;

import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.Parent;
import org.springframework.data.domain.jaxb.SpringDataJaxb.OrderDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;
import lombok.experimental.PackagePrivate;
import my.bean.SellBuyHistory;
import shop.bean.BrandListDTO;
import shop.bean.CompletedOrderDTO;
import shop.bean.OrderDTO;
import shop.bean.ProductDTO;

@Repository
public interface ShopDAO extends JpaRepository<ProductDTO, Integer> {

	List<ProductDTO> findProductDTOsByCategory(String shoes);
	
	@Transactional
	@Modifying
	@Query("delete from NewProductDTO newproductDTO where newproductDTO.seq = :seq ")
	// @Query(value="delete from NewProductDTO newproductDTO where newproductDTO.seq = :seq", nativeQuery = true)
	// query문 그대로 적으면된다
	public void deleteBySeq(@Param("seq") int seq);
	
	
//	@Query("select productDTO from ProductDTO productDTO where productDTO.category = :shoes")
//	List<ProductDTO> getShoesList(@Param("shoes") String shoes);
	@Query(nativeQuery = true, value = "select a.seq, a.brand, ifnull(b.order_price, '-') as price, a.title, a.sub_title, a.img from product_table as a left outer join (select seq, min(order_price) AS order_price from order_table where buy_sell = 1 group by seq ) as b on a.seq = b.seq where brand = :brand and a.seq not in(:seq) order by a.seq")
	List<BrandListDTO> getBrandList(@Param("seq") int seq, @Param("brand") String brand);
	
	@Query(nativeQuery = true, value = "select pro.brand, pro.img_name as imgName, pro.sub_title as subTitle, pay.product_num as productNum, pay.size, pay.log_time as logDate, pay.order_number as orderNumber, pay.type from product_table as pro join (select product_num, comOrd.size, log_time, order_number, type from completed_order_table as comOrd join complete_payment as comPay on comOrd.completed_order_seq = comPay.order_table_seq where comPay.id = :id and comPay.type='resell' ) as pay on pro.seq = pay.product_num;")
	List<SellBuyHistory> getBoughtHistorie(@Param("id") String email);

	@Query(nativeQuery = true, value = "select pro.seq, pro.brand, pro.img_name as imgName, pro.sub_title as subTitle, ord.size, ord.order_price as price from product_table as pro join order_table as ord on ord.seq = pro.seq where ord.buy_order_user = :id" )
	List<SellBuyHistory> getBuyingHistory(@Param("id") String email);

	@Query(nativeQuery = true, value = "select pro.seq, pro.brand, pro.img_name as imgName, pro.sub_title as subTitle, comOrd.price as price, comOrd.size from product_table as pro join completed_order_table as comOrd on pro.seq = comOrd.seq where sell_order_user = :id")
	List<SellBuyHistory> getSoldHistory(@Param("id") String email);

	@Query(nativeQuery = true, value = "select pro.seq, pro.brand, pro.img_name as imgName, pro.sub_title as subTitle, ord.size, ord.order_price as price from product_table as pro join order_table as ord on ord.seq = pro.seq where ord.sell_order_user = :id")
	List<SellBuyHistory> getSellingHistory(@Param("id") String email);

	@Query(nativeQuery = true, value = "select seq, img_name as imgName, id, title as subTitle from used_item where id = :id and selling_state=1")
	List<SellBuyHistory> getSellingUsed(@Param("id") String email);

	@Query(nativeQuery = true, value = "select used.seq, img_name as imgName, used.id, used.title as subTitle, comPay.ship_address as shipAddress, comPay.ship_name as shipName, comPay.ship_phone as shipPhone from used_item as used join complete_payment as comPay on used.seq = comPay.seq where used.id = :id and used.selling_state=0;")
	List<SellBuyHistory> getSoldUsed(@Param("id")  String email);

	@Query(nativeQuery = true, value = "select seq, img_name as imgName, id, title as subTitle from used_item where id = :id and selling_state=1")
	List<SellBuyHistory> getBuyingUsed(@Param("id")  String email);

	@Query(nativeQuery = true, value = "select used.seq, img_name as imgName, used.id, used.title as subTitle, comPay.ship_address as shipAddress, comPay.ship_name as shipName, comPay.ship_phone as shipPhone from used_item as used join complete_payment as comPay on used.seq = comPay.seq where used.id = :id and used.selling_state=0;")
	List<SellBuyHistory> getBoughtUsed(@Param("id")  String email);
	
//	List<BrandListDTO> getBrandList(@Param("seq") int seq, @Param("brand") String brand);

}
