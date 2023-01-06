package shop.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import shop.bean.BrandListDTO;
import shop.bean.OrderDTO;
import shop.bean.ProductDTO;

@Repository
public interface ShopDAO extends JpaRepository<ProductDTO, Integer> {

	@Query(nativeQuery = true, value = "select a.seq, a.brand, ifnull(b.order_price, '-') as price, a.title, a.sub_title, a.img from product_table as a left outer join (select seq, min(order_price) AS order_price from order_table where buy_sell = 1 group by seq ) as b on a.seq = b.seq where brand = :brand and a.seq not in(:seq) order by a.seq")
	List<BrandListDTO> getBrandList(@Param("seq") int seq, @Param("brand") String brand);
	
//	List<BrandListDTO> getBrandList(@Param("seq") int seq, @Param("brand") String brand);

}
