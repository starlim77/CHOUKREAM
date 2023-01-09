package lookbook.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import jakarta.servlet.http.HttpSession;
import lookbook.bean.StyleCommentDTO;
import lookbook.bean.StyleDTO;
import lookbook.service.StyleCommentService;
import lookbook.entity.StyleCommentEntity;
import lookbook.entity.StyleEntity;
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
	
	
	//내 id를 들고가서 내 게시글만 뿌리기
	@GetMapping(path="findAllMyList/{id}")
	@ResponseBody
	public List<StyleDTO> findAllMyList(@PathVariable String id) {
		System.out.println("컨트롤러에 id가 넘어갓냥? "+ id);
		return styleService.findAllMyList(id);
		//return null;
	}
		
	//trending,detail 목록 가져오기
	@GetMapping(path="getStyleList")
	public List<StyleDTO> findAllByOrderBySeqDesc() {
		//DB에서 전체 게시글 데이터 를 가져온다				
		return styleService.findAllByOrderBySeqDesc();		
		
	}

	//상세에서 댓글 등록기능
	@PostMapping(path="commentSave")
	@ResponseBody
	public void commentSave(@ModelAttribute StyleCommentDTO styleCommentDTO, @RequestParam int styleSeq ) {
//		ResponseEntity
		System.out.println(styleCommentDTO);
		
		styleCommentService.save(styleCommentDTO);//댓글저장
//		Long saveResult = styleCommentService.save(styleCommentDTO);//댓글저장
//		if(saveResult != null) {
//			//작성 성공하면 댓글 목록을 가져와서 리턴
//			//댓글목록: 해당 게시글의 댓글 전체 (게시글 아이디 필요)			
//			List<StyleCommentDTO> styleCommentDTOList = styleCommentService.findAll(styleCommentDTO.getStyleSeq());
//			return new ResponseEntity<>(styleCommentDTOList, HttpStatus.OK);//내가 전달하려는 바디값(styleCommentDTOList)과 상태값(HttpStatus.OK)
//		} else {
//			return new ResponseEntity<>("해당 게시글이 존재하지 않습니다.", HttpStatus.NOT_FOUND);//내가 전달하려는 바디값("해당 게시글이 존재하지 않습니다.")
//		}
	}
	//댓글 가져오기
	@GetMapping(path="commentGet")	
	public ResponseEntity commentGet(@ModelAttribute StyleCommentDTO styleCommentDTO) {
		
		Long saveResult = styleCommentService.save(styleCommentDTO);//댓글저장
		if(saveResult != null) {
			//작성 성공하면 댓글 목록을 가져와서 리턴
			//댓글목록: 해당 게시글의 댓글 전체 (게시글 아이디 필요)			
			List<StyleCommentDTO> styleCommentDTOList = styleCommentService.findAll(styleCommentDTO.getStyleSeq());
			return new ResponseEntity<>(styleCommentDTOList, HttpStatus.OK);//내가 전달하려는 바디값(styleCommentDTOList)과 상태값(HttpStatus.OK)
		} else {
			return new ResponseEntity<>("해당 게시글이 존재하지 않습니다.", HttpStatus.NOT_FOUND);//내가 전달하려는 바디값("해당 게시글이 존재하지 않습니다.")
		}
		
	}
	
	
	


//	@GetMapping(path="getMyStyleBoardList")
//	public List<StyleDTO> getMyStyleBoardList() {
//		return styleService.getMyStyleBoardList();
//	}

}
