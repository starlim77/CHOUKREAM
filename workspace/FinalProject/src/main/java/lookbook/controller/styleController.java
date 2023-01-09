package lookbook.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;
import lookbook.bean.StyleCommentDTO;
import lookbook.bean.StyleDTO;
import lookbook.service.StyleCommentService;
import lookbook.entity.StyleCommentEntity;
import lookbook.entity.StyleEntity;
import lookbook.service.StyleService;

@RestController
@CrossOrigin(origins = "*")
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
		//System.out.println("list= " + list);	
		
		System.out.println("컨드롤러 dto="+ styleDTO);
		styleService.save(list, styleDTO);

	}
	
	
	//내 id를 들고가서 내 게시글만 뿌리기
	@GetMapping(path="findAllMyList/{id}")
	public List<StyleDTO> findAllMyList(@PathVariable String id) {
		//좋아요조회 styleService.findLikes(id,style_seq);
		return styleService.findAllMyList(id);
	}
	
	//내 id 글 1개만 보기
	@GetMapping(path="findMyListDetail/{seq}")
	@ResponseBody
	public StyleDTO findMyListDetail(@PathVariable int seq) {
		System.out.println("컨트롤러에 seq확인 : "+ seq);
		return styleService.findMyListDetail(seq);
	}
	
		
	//trending,detail 목록 가져오기
	@GetMapping(path="getStyleList")
	public List<StyleDTO> findAllByOrderBySeqDesc() {
		//DB에서 전체 게시글 데이터 를 가져온다				
		return styleService.findAllByOrderBySeqDesc();		
		
	}
	
	//피드 내용만 업데이트
	@PutMapping(path="update", produces="text/html; charset=UTF-8")
	@ResponseBody
	public void update(@ModelAttribute StyleDTO styleDTO) {
		styleService.save(styleDTO);
	}
	
	//피드 삭제
	@DeleteMapping(path="delete", produces="text/html; charset=UTF-8")
	@Transactional
	@ResponseBody
	public void delete(@RequestParam int seq) {
		System.out.println("컨트롤러 딜리트 seq =" + seq);
		styleService.delete(seq);
	}
	

	
//좋아요
    @PostMapping(path="likes")
    @ResponseBody
    //public int likes(String member_id, int style_seq) {
    //public int likes(@RequestParam String member_id, @RequestParam int seq) {
    public int likes(@ModelAttribute StyleDTO styleDTO) {
//    	System.out.println("컨트롤러  member_id "+ member_id);
//        System.out.println("컨트롤러 style_seq" + seq);
//    	int result = styleService.saveLikes(member_id,seq);
//        return result;
        return 100;
    }
		

	//상세에서 댓글 등록기능
	@PostMapping(path="commentSave")
	@ResponseBody
	public void commentSave(@ModelAttribute StyleCommentDTO styleCommentDTO ) {
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
	@GetMapping(path="getComment")	
	public ResponseEntity getComment(@ModelAttribute StyleCommentDTO styleCommentDTO) {
				
		List<StyleCommentDTO> styleCommentDTOList = styleCommentService.findAll(styleCommentDTO.getStyleSeq());
		return new ResponseEntity<>(styleCommentDTOList, HttpStatus.OK);//내가 전달하려는 바디값(styleCommentDTOList)과 상태값(HttpStatus.OK)
		
	}
	
	
	


//	@GetMapping(path="getMyStyleBoardList")
//	public List<StyleDTO> getMyStyleBoardList() {
//		return styleService.getMyStyleBoardList();
//	}

}
