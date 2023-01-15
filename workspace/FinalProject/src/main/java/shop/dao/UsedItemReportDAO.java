package shop.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import shop.bean.UsedItemReportDTO;

public interface UsedItemReportDAO extends JpaRepository<UsedItemReportDTO, Integer> {
	//select exists(select *from used_item_report where seq='2' and report_id="ADMIN");
	
//	@Query("select exists(select usedItemReportDTO from UsedItemReportDTO usedItemReportDTO where usedItemReportDTO.seq=:seq and usedItemReportDTO.reportId=:reportId)")
//	boolean reportHistory(@Param("seq")int seq, @Param("reportId")String reportId);
	
	
	@Query("select usedItemReportDTO from UsedItemReportDTO usedItemReportDTO where usedItemReportDTO.seq=:seq and usedItemReportDTO.reportId=:reportId")
	UsedItemReportDTO reportHistory(@Param("seq")int seq, @Param("reportId")String reportId); 
}
