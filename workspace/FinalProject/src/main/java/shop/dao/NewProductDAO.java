package shop.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import jakarta.transaction.Transactional;
import shop.bean.NewBrandListDTO;
import shop.bean.NewProductDTO;
import shop.bean.NewSortListDTO;

@Repository
public interface NewProductDAO extends JpaRepository<NewProductDTO, Integer> {

	@Transactional
	@Modifying
	@Query("delete from NewProductDTO newproductDTO where newproductDTO.seq = :seq ")
	// @Query(value="delete from NewProductDTO newproductDTO where newproductDTO.seq = :seq", nativeQuery = true)
	// query문 그대로 적으면된다
	public void deleteBySeq(@Param("seq") int seq);
	
	// my sql 버전으로 바꿔야할듯 
	// @Query(value = "select * from NewProductDTO newproductDTO where newproductDTO.brand like '%' || :keyword || '%'", nativeQuery = true)
	// @Query(value= "select * from NewProductDTO newproductDTO  where newproductDTO.brand = :keyword", nativeQuery = true)
	// @Query("select newProductDTO from NewProductDTO newproductDTO where newproductDTO.brand = :keyword")
	@Query("SELECT u FROM NewProductDTO u WHERE u.brand like %:keyword%")
	public List<NewProductDTO> getSearchBrand(@Param("keyword") String keyword);
	
	// @Query(value = "select * from NewProductDTO newproductDTO where newproductDTO.category like '%' || :keyword || '%'", nativeQuery = true)
	// @Query(value= "select * from NewProductDTO newproductDTO  where newproductDTO.category = :keyword", nativeQuery = true)
	// @Query("select newProductDTO from NewProductDTO newproductDTO where newproductDTO.category = :keyword")
	@Query("SELECT u FROM NewProductDTO u WHERE u.category like %:keyword%")
	public List<NewProductDTO> getSearchCategory(@Param("keyword") String keyword);

	public Optional<NewProductDTO> findBySeq(int seq);

	
	@Query( nativeQuery = true, value= "select a.seq, a.brand, ifnull(b.order_price, '-') as min_price ,ifnull(c.order_price, '-') \r\n"
			+ "as max_price, a.title, a.sub_title, a.img_name, d.like_count, e.order_count, a.category, a.tag, a.gender from new_product as a \r\n"
			+ "left outer join (select seq, min(order_price) AS order_price from order_table where buy_sell = 1 group by seq ) as b on a.seq = b.seq\r\n"
			+ "left outer join (select seq, max(order_price) AS order_price from order_table where buy_sell = 0 group by seq ) as c on a.seq = c.seq\r\n"
			+ "left outer join (select seq, count(*) AS like_count from used_item_like where shop_kind = 'resell' group by seq) as d on a.seq = d.seq\r\n"
			+ "left outer join (select seq, count(*) AS order_count from completed_order_table group by seq) as e on a.seq = e.seq\r\n"
			+ "order by order_count desc")
	public List<NewSortListDTO> newFavourSort();
	
	@Query( nativeQuery = true, value= "select a.seq, a.brand, ifnull(b.order_price, '-') as min_price ,ifnull(c.order_price, '-') \r\n"
			+ "as max_price, a.title, a.sub_title, a.img_name, d.like_count, e.order_count, a.category, a.tag, a.gender from new_product as a \r\n"
			+ "left outer join (select seq, min(order_price) AS order_price from order_table where buy_sell = 1 group by seq ) as b on a.seq = b.seq\r\n"
			+ "left outer join (select seq, max(order_price) AS order_price from order_table where buy_sell = 0 group by seq ) as c on a.seq = c.seq\r\n"
			+ "left outer join (select seq, count(*) AS like_count from used_item_like where shop_kind = 'resell' group by seq) as d on a.seq = d.seq\r\n"
			+ "left outer join (select seq, count(*) AS order_count from completed_order_table group by seq) as e on a.seq = e.seq\r\n"
			+ "order by (min_price + 0) asc")
	public List<NewSortListDTO> newBuySort(); // 즉시 구매가 낮은순 

	
	@Query(nativeQuery = true, value = "select a.seq, a.brand, ifnull(b.order_price, '-') as min_price ,ifnull(c.order_price, '-') \r\n"
			+ "as max_price, a.title, a.sub_title, a.img_name, d.like_count, e.order_count, a.category, a.tag, a.release_date from new_product as a \r\n"
			+ "left outer join (select seq, min(order_price) AS order_price from order_table where buy_sell = 1 group by seq ) as b on a.seq = b.seq\r\n"
			+ "left outer join (select seq, max(order_price) AS order_price from order_table where buy_sell = 0 group by seq ) as c on a.seq = c.seq\r\n"
			+ "left outer join (select seq, count(*) AS like_count from used_item_like where shop_kind = 'resell' group by seq) as d on a.seq = d.seq\r\n"
			+ "left outer join (select seq, count(*) AS order_count from completed_order_table group by seq) as e on a.seq = e.seq\r\n"
			+ "order by (max_price + 0) desc")
	public List<NewSortListDTO> newSellSort(); // 즉시 판매가 높은순
	
	
	@Query(nativeQuery = true, value = "select a.seq, a.brand, ifnull(b.order_price, '-') as min_price ,ifnull(c.order_price, '-') \r\n"
			+ "as max_price, a.title, a.sub_title, a.img_name, d.like_count, e.order_count, a.category, a.tag, a.gender, a.release_date from new_product as a \r\n"
			+ "left outer join (select seq, min(order_price) AS order_price from order_table where buy_sell = 1 group by seq ) as b on a.seq = b.seq\r\n"
			+ "left outer join (select seq, max(order_price) AS order_price from order_table where buy_sell = 0 group by seq ) as c on a.seq = c.seq\r\n"
			+ "left outer join (select seq, count(*) AS like_count from used_item_like where shop_kind = 'resell' group by seq) as d on a.seq = d.seq\r\n"
			+ "left outer join (select seq, count(*) AS order_count from completed_order_table group by seq) as e on a.seq = e.seq\r\n"
			+ "order by release_date desc")
	public List<NewSortListDTO> newReleaseDateSort(); // 발매일순 

	@Query(nativeQuery = true, value = "select seq, brand, price, title, sub_title, img_name from new_product where brand = :brand and seq not in(:seq) order by seq")
	public List<NewBrandListDTO> getNewBrandList(int seq, String brand);
	
	
	
	
	
	
	
//	@Query("select newProductDTO from NewProductDTO newproductDTO where newproductDTO.brand like '%' || :keyword || '%'") // 이런 Query 문을 수행해주세요
//	//         객체명      객체타입(테이블명) 객체명 이건 그냥 문법 
//	public List<NewProductDTO> getSearchBrand(@Param("keyword") String keyword); // keyword 변수 받고싶을때 @Param 사용 
//	
//	@Query("select newProductDTO from NewProductDTO newproductDTO where newproductDTO.category like '%' || :keyword || '%'") // 이런 Query 문을 수행해주세요
//	public List<NewProductDTO> getSearchCategory(@Param("keyword") String keyword);
	
	
	
	
	
}
