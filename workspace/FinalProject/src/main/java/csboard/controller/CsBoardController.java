package csboard.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import csboard.bean.CsBoardDTO;
import csboard.service.CsBoardService;





@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path="cs")
public class CsBoardController {
	
	@Autowired
	private CsBoardService csBoardService;
	
	@PostMapping(path="write")	
	public void write(@ModelAttribute CsBoardDTO csBoardDTO) {
		System.out.println(csBoardDTO);
		csBoardService.write(csBoardDTO);		
	}
	//게시판 글 가져오기
	@GetMapping(path="getList")	
	public List<CsBoardDTO> getUserList(){
		
		List<CsBoardDTO> list = csBoardService.getList();
	//	System.out.println(list.get(0).getTitle());
		return list;
		
	}
	//카테고리 버튼 클릭 시 클릭한 카테고리만 보이게 어떻게 해???ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
	@GetMapping(path="getCategoryList")	
	public List<CsBoardDTO>  getCategoryList(@RequestParam String category) {
		return csBoardService.getCategory(category);
	}
	@GetMapping(value="getKeywordSearchList")	
	public List<CsBoardDTO> getKeywordSearchList(@RequestParam String keyword) {//searchOption, keyword
		System.out.println(keyword);
		return csBoardService.getKeywordSearch(keyword);
	}
}
