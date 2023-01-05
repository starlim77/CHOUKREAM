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
import lookbook.service.StyleCommentService;
import lookbook.service.StyleService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "lookbook")
public class styleController {
	@Autowired
	private StyleService styleService;
	@Autowired
	private StyleCommentService styleCommentService;
	
	//스타일 게시물 입력	
	@PostMapping(path="upload" , produces="text/html; charset=UTF-8")
	@ResponseBody
	public void upload(@RequestBody List<MultipartFile> list, @ModelAttribute StyleDTO styleDTO, HttpSession session) {
		System.out.println("list= " + list);	
		
		styleService.save(list, styleDTO);

		System.out.println("dto="+ styleDTO);
	}
	
	
	//trending 목록 가져오기
	@GetMapping(path="getStyleList")
	public List<StyleDTO> findAllByOrderBySeqDesc() {
		//DB에서 전체 게시글 데이터 를 가져온다				
		return styleService.findAllByOrderBySeqDesc();		
		
	}
	
	

	
	//상세에서 댓글 등록기능
	//@PostMapping("/uploadComment")
	


//	@GetMapping(path="getMyStyleBoardList")
//	public List<StyleDTO> getMyStyleBoardList() {
//		return styleService.getMyStyleBoardList();
//	}
//	
	
	
	
}
