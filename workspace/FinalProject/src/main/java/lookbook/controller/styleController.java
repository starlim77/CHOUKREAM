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
import lookbook.bean.LikesDTO;
import lookbook.bean.StyleCommentDTO;
import lookbook.bean.StyleDTO;
import lookbook.bean.StyleLikesDTO;
import lookbook.service.StyleCommentService;
import lookbook.service.StyleFollowingService;
import lookbook.service.StyleLikesService;
import lookbook.service.StyleService;
import member.bean.MemberDto;
import member.dao.MemberDAO;
import shop.bean.ProductDTO;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "lookbook")
public class styleController {
	@Autowired
	private StyleService styleService;
	@Autowired
	private StyleCommentService styleCommentService;
	@Autowired
	private StyleLikesService styleLikesService;
	@Autowired
	private StyleFollowingService styleFollowingService;
	@Autowired
	private MemberDAO memberDAO;
	
	
	
	//스타일 게시물 입력	
	@PostMapping(path="upload" , produces="text/html; charset=UTF-8")
	@ResponseBody
	public void upload(@RequestBody List<MultipartFile> list, @ModelAttribute StyleDTO styleDTO, HttpSession session) {
		//System.out.println("list= " + list);	
		//System.out.println("컨드롤러 dto="+ styleDTO);
		System.out.println(styleDTO.getProductSeq()+" :  상품번호 ================");		
		styleService.save(list, styleDTO);

	}
	
	
	//내 id를 들고가서 내 게시글만 뿌리기    @AuthenticationPrincipal
	@GetMapping(path="findAllMyList/{id}")
	public List<StyleDTO> findAllMyList(@PathVariable String id) {
		//System.out.println(id + " 아이디받기----------------------");
		//좋아요조회 styleService.findLikes(id,style_seq);
		return styleService.findAllMyList(id);
	}
	
	//내 id 글 1개만 보기
	@GetMapping(path="findMyListDetail/{seq}")
	@ResponseBody
	public StyleDTO findMyListDetail(@PathVariable int seq) {
		//System.out.println("컨트롤러에 seq확인 : "+ seq);
		return styleService.findMyListDetail(seq);
	}
	
   //내글 갯수 카운트
   @GetMapping(path="findCountById")
   @ResponseBody
   public Long findCountById(@RequestParam String id) {
	   //System.out.println("컨트롤러에 아이디" + id);
      return styleService.findCountById(id);
   }

	
		
	//trending 목록 가져오기
	@GetMapping(path="getStyleList")
	public List<StyleDTO> findAllByOrderBySeqDesc() {
		//DB에서 전체 게시글 데이터 를 가져온다				
		return styleService.findAllByOrderBySeqDesc();		
		
	}
   
   //detail => 좋아요 포함 전체 목록 가져오기 로그인 안했을 때
	@GetMapping(path="list")
	public List<LikesDTO> findlist() {
		//DB에서 전체 게시글 데이터 를 가져온다				
		return styleLikesService.list();		
	}
	
   //detail => 좋아요 포함 전체 목록 가져오기 로그인했을 때
	@GetMapping(path="listById")
	public List<LikesDTO> listById(@RequestParam String id) {
		System.out.println("dddddddddddddd"+id);
		//DB에서 전체 게시글 데이터 를 가져온다				
		return styleLikesService.listById(id);		
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
		//System.out.println("컨트롤러 딜리트 seq =" + seq);
		styleService.delete(seq);
	}
	
	//mystyledetail에서 좋아요버튼클릭
    @PostMapping(path="likebutton")
    public List<LikesDTO> likes(@ModelAttribute StyleLikesDTO styleLikesDTO, @RequestParam boolean isLike) { //1,0값 받는거 추가 void로 형태 변환
    	styleLikesService.save(styleLikesDTO, isLike);
    	return styleLikesService.findLikes(Long.toString(styleLikesDTO.getMemberId()));
    }
    
	//detail에서 좋아요버튼클릭
    @PostMapping(path="likebutton2")
    public List<LikesDTO> likes2(@ModelAttribute StyleLikesDTO styleLikesDTO, @RequestParam boolean isLike) { //1,0값 받는거 추가 void로 형태 변환
    	styleLikesService.save(styleLikesDTO, isLike);
    	return styleLikesService.findLikes2(Long.toString(styleLikesDTO.getMemberId()));
    }
    
    //좋아요 확인 -> mystyle에서 좋아요 포함 전체 리스트 받아오기
    @GetMapping(path="findLikes")
    public List<LikesDTO> findLikes(@RequestParam String id) {
    	//System.out.println("컨트롤러 조아요 확인 styleLikesDTO ==== "+ styleLikesDTO);
    	return styleLikesService.findLikes(id);
    }
    
    //좋아요만 확인
//    @GetMapping(path="checkLikes")
//    public boolean checkLikes(@ModelAttribute StyleLikesDTO styleLikesDTO) {
//    	//System.out.println("컨트롤러 조아요 확인 styleLikesDTO ==== "+ styleLikesDTO);
//    	return styleLikesService.checkLikes(styleLikesDTO);
//
//    }
    
    //보드등록시 상품검색하기
	@GetMapping(value="search")
	public List<ProductDTO> search(@RequestParam String keyword){ 
		//System.out.println(keyword + "==============");
		return styleService.search(keyword);
	}
	
	//
	@GetMapping(value="styleProductSearch")
	public Optional<ProductDTO> search(@RequestParam int seq){ 
		return styleService.styleProductSearch(seq);
	}
	
	//상품번호로 sytleDTO 뽑기
	@GetMapping(value="styleOneProduct")
	public List<StyleDTO> styleOneProduct(@RequestParam int productSeq){ 
		System.out.println("ddddd" + productSeq);
		return styleService.styleOneProduct(productSeq);
	}
	
//댓글
    
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
		System.out.println(styleCommentDTO);
			
		List<StyleCommentDTO> styleCommentDTOList = styleCommentService.findAll(styleCommentDTO.getStyleSeq());
		return new ResponseEntity<>(styleCommentDTOList, HttpStatus.OK);//내가 전달하려는 바디값(styleCommentDTOList)과 상태값(HttpStatus.OK)
		
	}
	
	//댓글 삭제
	@DeleteMapping(path="deleteComment")
	public void deleteComment(@RequestParam String id, String styleSeq) {
		System.out.println("댓글 삭제"+ id);
		styleCommentService.delete(id,styleSeq);
	}
	
	
//팔로잉
	
	//팔로우
	@PostMapping(path="saveFollow/{followerId}/{followeeId}")
	@ResponseBody
	public void follow(@PathVariable int followerId, @PathVariable int followeeId) {
		System.out.println("followee 글쓴사람 아이디"+followeeId);
		System.out.println("follower 현재 로그인한 아이디"+ followerId);	
		
		MemberDto followerDto = memberDAO.findById(followerId);
		MemberDto followeeDto = memberDAO.findById(followeeId);
		//id로 일단은 수정???
		//스타일에서는 member의 name을 아이디로 쓴다
		
		styleFollowingService.save(followerDto, followeeDto);	
	}
	//언팔
	@DeleteMapping(path="unFollow/{followerId}/{followeeId}")
	@ResponseBody
	public void unFollow(@PathVariable int followerId, @PathVariable int followeeId) {
		
		System.out.println("111111111111"+followeeId);
		System.out.println("22222222222222222"+ followerId);	

		//MemberDto followerDto = memberDAO.findById(followerId);
		//MemberDto followeeDto = memberDAO.findById(followeeId);
		//id로 일단은 수정???
		//스타일에서는 member의 name을 아이디로 쓴다

		styleFollowingService.delete(followerId, followeeId);
		//styleFollowingService.delete(followerDto, followeeDto);

	}
	
	//팔로잉 페이지 팔로우 목록 불러오기
	@GetMapping(path="getFollowing/{id}")
	public List<StyleDTO> getFollowing(@PathVariable int id){
		//int id= sub;
		System.out.println("-----------id" + id);
		return styleFollowingService.getFollowing(id);
	}
	
	// 팔로워 개수 가져오기 
	@GetMapping(path="getFollower/{id}")
	public Long getFollower(@PathVariable Long id) {
		return styleFollowingService.followerCount(id);
	}
	
	
	//팔로이 개수 가져오기
	@GetMapping(path="getFollowee/{id}")
	public Long getFollowee(@PathVariable Long id) {
		return styleFollowingService.followeeCount(id);
	}
	
	//디테일-로그인 후 내 팔로이 불러오기
	@GetMapping(path="getMyFollowee/{id}")
	public List<String> getMyFollowee(@PathVariable Long id){
		return styleFollowingService.getMyFollowee(id);
	}
	

}
