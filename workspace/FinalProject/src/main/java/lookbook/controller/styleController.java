package lookbook.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpSession;
import lookbook.bean.StyleDTO;
import lookbook.entity.StyleEntity;
import lookbook.service.StyleService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "lookbook")
public class styleController {
	@Autowired
	private StyleService styleService;
	
		
	@PostMapping(path="upload" , produces="text/html; charset=UTF-8")
	@ResponseBody
	public void upload(@RequestBody List<MultipartFile> list, @ModelAttribute StyleDTO styleDTO, HttpSession session) {
		System.out.println("list= " + list);	
		
		styleService.save(list, styleDTO);

		System.out.println("dto="+ styleDTO);
	}
	

	


	@GetMapping(path="getMyStyleBoardList")
	public List<StyleEntity> getMyStyleBoardList() {
		return styleService.getMyStyleBoardList();
	}
	
	@GetMapping(path="getStyleList")
	public List<StyleDTO> findAll() {
		//DB에서 전체 게시글 데이터 를 가져온다				
		return styleService.findAll();		

	}
	
	@GetMapping(path="getStyleBoardList")
	public List<StyleEntity> getStyleBoardList() {
		return styleService.getStyleBoardList();
	}

	
}
