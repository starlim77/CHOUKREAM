package shop.dao;

import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;
import lombok.experimental.PackagePrivate;
import shop.bean.BrandListDTO;
import shop.bean.OrderDTO;
import shop.bean.ProductDTO;
import shop.bean.SortListDTO;

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
	@Query(nativeQuery = true, value = "select a.seq, a.brand, ifnull(b.order_price, '-') as price, a.title, a.sub_title, a.img_name from product_table as a left outer join (select seq, min(order_price) AS order_price from order_table where buy_sell = 1 group by seq ) as b on a.seq = b.seq where brand = :brand and a.seq not in(:seq) order by a.seq")
	List<BrandListDTO> getBrandList(@Param("seq") int seq, @Param("brand") String brand);

	
	
	// 반환타입을 interface 로 
	@Query( nativeQuery = true, value= "select a.seq, a.brand, ifnull(b.order_price, '구매입찰') as min_price ,ifnull(c.order_price, '구매입찰') \r\n"
			+ "as max_price, a.title, a.sub_title, a.img_name, e.order_count from product_table as a \r\n"
			+ "left outer join (select seq, min(order_price) AS order_price from order_table where buy_sell = 1 group by seq ) as b on a.seq = b.seq\r\n"
			+ "left outer join (select seq, max(order_price) AS order_price from order_table where buy_sell = 0 group by seq ) as c on a.seq = c.seq\r\n"
			+ "left outer join (select seq, count(*) AS like_count from used_item_like where shop_kind = 'resell' group by seq) as d on a.seq = d.seq\r\n"
			+ "left outer join (select seq, count(*) AS order_count from completed_order_table group by seq) as e on a.seq = e.seq\r\n"
			+ "order by order_count desc")
	List<SortListDTO> favourSort();
	
//	List<BrandListDTO> getBrandList(@Param("seq") int seq, @Param("brand") String brand);
	
	@Transactional
	@Modifying
	@Query("delete from ProductDTO newproductDTO where newproductDTO.seq = :seq ")
	// @Query(value="delete from NewProductDTO newproductDTO where newproductDTO.seq = :seq", nativeQuery = true)
	// query문 그대로 적으면된다
	public void resellDelete(@Param("seq") int seq);
	
	@Query("SELECT u FROM ProductDTO u WHERE u.brand like %:keyword%")
	List<ProductDTO> getSearchBrand(String keyword);
	
	@Query("SELECT u FROM ProductDTO u WHERE u.category like %:keyword%")
	List<ProductDTO> getSearchCategory(String keyword);
	
	@Query(nativeQuery= true, value= "select a.seq, a.brand, ifnull(b.order_price, '구매입찰') as min_price ,ifnull(c.order_price, '구매입찰') \r\n"
			+ "as max_price, a.title, a.sub_title, a.img_name, d.like_count, e.order_count from product_table as a \r\n"
			+ "left outer join (select seq, min(order_price) AS order_price from order_table where buy_sell = 1 group by seq ) as b on a.seq = b.seq\r\n"
			+ "left outer join (select seq, max(order_price) AS order_price from order_table where buy_sell = 0 group by seq ) as c on a.seq = c.seq\r\n"
			+ "left outer join (select seq, count(*) AS like_count from used_item_like where shop_kind = 'resell' group by seq) as d on a.seq = d.seq\r\n"
			+ "left outer join (select seq, count(*) AS order_count from completed_order_table group by seq) as e on a.seq = e.seq\r\n"
			+ "order by (max_price + 0) asc")
	List<ProductDTO> BuySort();
	
	@Query(nativeQuery = true, value = "select a.seq, a.brand, ifnull(b.order_price, '구매입찰') as min_price ,ifnull(c.order_price, '구매입찰') \r\n"
			+ "as max_price, a.title, a.sub_title, a.img_name, d.like_count, e.order_count from product_table as a \r\n"
			+ "left outer join (select seq, min(order_price) AS order_price from order_table where buy_sell = 1 group by seq ) as b on a.seq = b.seq\r\n"
			+ "left outer join (select seq, max(order_price) AS order_price from order_table where buy_sell = 0 group by seq ) as c on a.seq = c.seq\r\n"
			+ "left outer join (select seq, count(*) AS like_count from used_item_like where shop_kind = 'resell' group by seq) as d on a.seq = d.seq\r\n"
			+ "left outer join (select seq, count(*) AS order_count from completed_order_table group by seq) as e on a.seq = e.seq\r\n"
			+ "order by (min_price + 0) desc")
	List<ProductDTO> SellSort();

	//lookbook 
	@Query("select productDTO from ProductDTO productDTO where productDTO.title like '%' || :keyword || '%' OR productDTO.subTitle like '%' || :keyword || '%' ")
	public List<ProductDTO> search(@Param("keyword") String keyword);
	

}
