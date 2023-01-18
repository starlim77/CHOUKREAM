package csboard.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import csboard.bean.CsBoarNoticeDTO;
import csboard.bean.CsBoardDTO;
import csboard.service.CsBoardService;
import jakarta.servlet.http.HttpSession;








@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path="csfaq")
public class CsBoardController {
	
	@Autowired
	private CsBoardService csBoardService;
	
//	@PostMapping(path="write")	
//	public void write(@ModelAttribute CsBoardDTO csBoardDTO) {
//		String path = System.getProperty("user.dir");
//		 int index = path.lastIndexOf("\\");
//		 System.out.println(index +"index" + "filepath"+csBoardDTO.getFilepath());
//		 //	\FinalProject를 자르고 앞부분만 남김. ex)F:\project\finalProject\final\final1zo\workspace
//		 String pathModified=path.substring(0, index);
//		 System.out.println("pathModified"+ pathModified);
//		System.out.println(csBoardDTO);
//		csBoardService.write(csBoardDTO);		
//	}
	
	@PostMapping(path = "write" , produces="text/html; charset=UTF-8")
	@ResponseBody
	public void writeTest(@RequestBody List<MultipartFile> img, @ModelAttribute CsBoardDTO csBoardDTO, HttpSession session) {
		System.out.println(img);
		System.out.println(csBoardDTO);
		if(img!=null) {
			
		String path = System.getProperty("user.dir");
		 int index = path.lastIndexOf("\\");
		 System.out.println(index +"index" + "filepath"+csBoardDTO.getFilepath());
		 //	\FinalProject를 자르고 앞부분만 남김. ex)F:\project\finalProject\final\final1zo\workspace
		 String pathModified=path.substring(0, index);
		 
		 System.out.println("pathModified"+ pathModified);
	
		//csBoardService.write(csBoardDTO);	
		//반복
		 index=pathModified.lastIndexOf("\\");
		 pathModified = pathModified.substring(0,index);
		 System.out.println("경로확인"+pathModified);
		//실제 저장될 경로 지정
		 //ex) pathModified	= F:\project\finalProject\final\final1zo 뒤에 webapp경로 지정
		 String filePath=pathModified+"/webapp/public/storage";
	 	 System.out.println("실제폴더 : " + filePath);
	 	 
		
		 
		 System.out.println(csBoardDTO);
		 for(MultipartFile sendImg:img) {
			 String fileName = csBoardDTO.getFilename()+".png";//폴더에 저장 될 때 - 확장자명 붙여서 ??
			 File file = new File(filePath , fileName);
			try {
				sendImg.transferTo(file);
				System.out.println(file +"file 드렁옴??");
				//DTO에 사진명 수정 후 DTO에 세팅
				//String imgName;
				//imgName=fileName.substring(4, fileName.length()-1);				 
				//System.out.println(imgName +"imgName");
				
			} catch (IllegalStateException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		 };
		System.out.println();
		// csBoardfile.transferTo(new File(filePath, csBoardDTO.getFilename()));
		
		csBoardDTO.setFilepath(filePath); 
		csBoardService.write(csBoardDTO);
		}else {
		
			csBoardService.write(csBoardDTO);
		}
	 	 
	 	 	
		 
		 //원래는 img가 list형태라서 iterator를 사용하는 것이 더 올바른 방법이긴 함.
		// for(MultipartFile sendImg:list) {
		// String fileName=csBoardDTO.getFilename();
			//사진을 webapp쪽에 실제로 등록할 때 사용할 이름을 위한 변수
		//	String sendName=null;
		
	}
	
	@GetMapping(path = "getNotices")
	public List<CsBoardDTO> getNotices() {
		return csBoardService.getNotices("buying");
	}
	@GetMapping(path = "getNotice")
	public Optional<CsBoardDTO> getNotice(@RequestParam String seqString) {
		System.out.println(seqString);
		int seq = Integer.parseInt(seqString);
		System.out.println(seq);
		return csBoardService.getNotice(seq);
	}
	/*
	@PostMapping(path="write" , produces="text/html; charset=UTF-8")
	@ResponseBody
	public void write(@RequestBody List<MultipartFile> list,@ModelAttribute CsBoardDTO csBoardDTO, HttpSession session) {
		String path = System.getProperty("user.dir");
		 
		 //위 예시의 주소에서 뒤에서부터 처음에 있는 '\'가 앖에서 몇 번째 문자열에 위치하고 있는지 알려줌
		 //"\\"라고 작성한 이유는 '\'는 기호들을 문자로 인식하게 하는 것이라서 '\'를 기호로 인식하라는 의미로 "\\"이렇게 작성
		 //ex)workspace뒤에 있는 "\"의 위치를 찾음
		 int index = path.lastIndexOf("\\");
		 System.out.println(index +"index" + "list"+list);
		 
		 //	\FinalProject를 자르고 앞부분만 남김. ex)F:\project\finalProject\final\final1zo\workspace
		 String pathModified=path.substring(0, index);
		 System.out.println("pathModified"+ pathModified);
		 
		 //반복
		 index=pathModified.lastIndexOf("\\");
		 pathModified = pathModified.substring(0,index);
		 System.out.println("경로확인"+pathModified);
		
		 //실제 저장될 경로 지정
		 //ex) pathModified	= F:\project\finalProject\final\final1zo 뒤에 webapp경로 지정
		 String filePath=pathModified+"/webapp/public/storage";
	 	 System.out.println("실제폴더 : " + filePath +"DTO"+csBoardDTO);
	 	
	
		 
		 try {
			
			 
			 
			 String fileName=null;
			 
			 //원래는 img가 list형태라서 iterator를 사용하는 것이 더 올바른 방법이긴 함.
			 for(MultipartFile sendImg:list) {
				
				//사진을 webapp쪽에 실제로 등록할 때 사용할 이름을 위한 변수
				String sendName=null;
				
				//사진에 고유 값을 만들어 주는 기능.
				//사용 이유. 룩북파트 혹은 중고매물 파트는 고객들이 사진을 등록하는데 고객들이 사진의 명칭을 똑같이 해놓은 경우가 존재할 수 있음.
				//사진명이 중복되면 사진이 사라질 수 있기때문에 고유값을 만들어 사진이 삭제되는 경우를 방지
				//https://dev-gorany.tistory.com/123
				String uuid= UUID.randomUUID().toString();
				sendName=uuid + "_" +sendImg.getOriginalFilename();
				
				
				File file = new File(filePath, sendName);
				
				//db에 저장할 때 컬럼에 사진명을 배열로 저장할 수 없기 때문에 한줄로 저장후 ","를 사용하여 사진명을 분리할 예정
				fileName=fileName+sendName+",";
				sendImg.transferTo(file);
				System.out.println(fileName +"sendImg Transferto");
			 }
			 
			 //DTO에 사진명 수정 후 DTO에 세팅
			 String imgName;
			 imgName=fileName.substring(4, fileName.length()-1);
			 System.out.println(imgName +"이미지네임");
			 csBoardDTO.setFilename(imgName);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}//복사
		 
//		String fileNameListString = StringUtils.join(fileNameList);
//		System.out.println("여러 파일네임 합친거:"+fileNameListString);  //여러개파일네임 합친거 찍어보기
//		
//
//		
//		
//
//		csBoardDTO.setFilename(fileNameListString);
//		csBoardDTO.setFilepath(filePath);
//		
//		
		
		
		System.out.println(csBoardDTO);
		csBoardService.write(csBoardDTO);		
	}
	
	*/
	//게시판 글 가져오기
	@GetMapping(path="getList")	
	public List<CsBoardDTO> getUserList(){
		
		List<CsBoardDTO> list = csBoardService.getList();
	//	System.out.println(list.get(0).getTitle());
		return list;
		
	}
	//카테고리 버튼 클릭 시 클릭한 카테고리만 보이게 
	@GetMapping(path="getCategoryList")	
	public List<CsBoardDTO>  getCategoryList(@RequestParam String category) {
		if(category=="") {
			List<CsBoardDTO> list = csBoardService.getList();
			return list;
		}else {
		return csBoardService.getCategory(category);}
	}
	//content 검색 
	@GetMapping(value="getKeywordSearchList")	
	public List<CsBoardDTO> getKeywordSearchList(@RequestParam String keyword) {//searchOption, keyword
		System.out.println(keyword);
		return csBoardService.getKeywordSearch(keyword);
	}
	@GetMapping(value="getBoard")
	public Optional<CsBoardDTO>  getUser(@RequestParam int seq) {
		return csBoardService.getBoard(seq);
	}
	@DeleteMapping(path="deleteBoard")	
	public void deleteBoard(@RequestParam int seq) {
		csBoardService.delete(seq);		
	}
	@PutMapping(path="update")	
	@ResponseBody
	public void update(@RequestBody List<MultipartFile> img, @ModelAttribute CsBoardDTO csBoardDTO) {
		
		if(img != null)  {
			String path = System.getProperty("user.dir");
			 int index = path.lastIndexOf("\\");
			 System.out.println(index +"index" + "filepath"+csBoardDTO.getFilepath());
			 //	\FinalProject를 자르고 앞부분만 남김. ex)F:\project\finalProject\final\final1zo\workspace
			 String pathModified=path.substring(0, index);
			 
			 System.out.println("pathModified"+ pathModified);
		
			//csBoardService.write(csBoardDTO);	
			//반복
			 index=pathModified.lastIndexOf("\\");
			 pathModified = pathModified.substring(0,index);
			 System.out.println("경로확인"+pathModified);
			//실제 저장될 경로 지정
			 //ex) pathModified	= F:\project\finalProject\final\final1zo 뒤에 webapp경로 지정
			 String filePath=pathModified+"/webapp/public/storage";
		 	 System.out.println("실제폴더 : " + filePath);
		 	 
			
			 
			 System.out.println(csBoardDTO);
			 for(MultipartFile sendImg:img) {
				 String fileName = csBoardDTO.getFilename()+".png";//폴더에 저장 될 때 - 확장자명 붙여서 ??
				 File file = new File(filePath , fileName);
				try {
					sendImg.transferTo(file);
					System.out.println(file +"file 드렁옴??");
					//DTO에 사진명 수정 후 DTO에 세팅
					//String imgName;
					//imgName=fileName.substring(4, fileName.length()-1);				 
					//System.out.println(imgName +"imgName");
					
				} catch (IllegalStateException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
					// import 오류 날 수 있음.
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			 };
			System.out.println();
			// csBoardfile.transferTo(new File(filePath, csBoardDTO.getFilename()));
			
			csBoardDTO.setFilepath(filePath); 
			csBoardService.update(csBoardDTO);	
			
		}else {
			csBoardService.update(csBoardDTO);	
		}
		
	}
}
