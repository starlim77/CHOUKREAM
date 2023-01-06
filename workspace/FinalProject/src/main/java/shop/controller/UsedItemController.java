package shop.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpSession;
import shop.bean.UsedItemDTO;
import shop.bean.UsedItemLikeDTO;
import shop.dao.UsedItemDAO;
import shop.service.UsedItemService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path="used")
public class UsedItemController {
	
	@Autowired
	UsedItemService usedItemService;
	
	@GetMapping(path="getItem")
	public List<UsedItemDTO> getItem() {
		return usedItemService.getItem();
	}
	
	@GetMapping(path="viewItem")
	public Optional<UsedItemDTO> viewItem(@RequestParam int seq) {
		return usedItemService.viewItem(seq);
	}
	
	
	@GetMapping(path="itemLike")
	public UsedItemLikeDTO itemLike(@ModelAttribute UsedItemLikeDTO usedItemLikeDTO){
		//System.out.println("라이크 찍기"+seq);
		UsedItemLikeDTO imsi = usedItemService.itemLike(usedItemLikeDTO);
		//System.out.println("임시용 "+imsi);
		return imsi;
		//return usedItemService.itemLike(seq);
	}
	
	@PostMapping(path="likeSet")
	public void likeSet(@ModelAttribute UsedItemLikeDTO usedItemLikeDTO){
		System.out.println(usedItemLikeDTO);
		
		if(usedItemLikeDTO.getUserLike() == null)usedItemLikeDTO.setUserLike(false);
		
		System.out.println("들어온 userLike"+usedItemLikeDTO.getUserLike());
		usedItemLikeDTO.setUserLike(!usedItemLikeDTO.getUserLike());
		System.out.println("바꾼 userLike"+usedItemLikeDTO.getUserLike());
		usedItemService.likeSet(usedItemLikeDTO);
		
		
	}
	
//	@PostMapping(path="writeItem")
//	public void writeItem(@ModelAttribute UsedItemDTO usedItemDTO) {
//		System.out.println("찍어라"+usedItemDTO);
//		usedItemService.writeItem(usedItemDTO);
//	}
	
	
	 @PostMapping(path="upload", produces="text/html;charset-UTF-8")
	 @ResponseBody
	 public void upload2(@RequestBody List<MultipartFile> img, HttpSession session, @ModelAttribute UsedItemDTO usedItemDTO) {

		
		 //이미지 저장 경로 설정
		 //1. properties 이용하여 저장 경로를 지정하는 방법 https://saii42.tistory.com/68
		 //2. 직접 저장 경로를 지정하는 방법 https://25gstory.tistory.com/87
		 //3. getRealPath사용 방법(스프링부트 마지막날 수업 자료 참고): 해당 프로젝트는 현재 webapp과 프로젝트가 동일한 프로젝트파일 내에 있는 것이 아니라 별도로 관리됨.
		 //		따라서 getRealPath로 사용하게 되면 내장 tomcat에서 지정해주는 주소로 들어가게 됨.
		 //4. 내가 사용한 방법 https://7942yongdae.tistory.com/121
		 //선택한 이유.
		 //현재 프로젝트 참여자별로 로컬에 프로젝트를 설정해놓은 경로가 다름.
		 //따라서 상대주소로 저장소 public 파일을 찾아가야하는데 path 설정시 상대주소를 이용하는 방법이 없음.
		 //그래서 수동으로 상대주소를 이용하는 것처럼 주소값 생성
		 
		 //로컬에 저장된 내 프로젝트 디렉토리를 알려줌
		 //홍헌 컴퓨터 ex) F:\project\finalProject\final\final1zo\workspace\FinalProject
		 String path = System.getProperty("user.dir");
		 
		 //위 예시의 주소에서 뒤에서부터 처음에 있는 '\'가 앖에서 몇 번째 문자열에 위치하고 있는지 알려줌
		 //"\\"라고 작성한 이유는 '\'는 기호들을 문자로 인식하게 하는 것이라서 '\'를 기호로 인식하라는 의미로 "\\"이렇게 작성
		 //ex)workspace뒤에 있는 "\"의 위치를 찾음
		 int index = path.lastIndexOf("\\");
		 
		 //	\FinalProject를 자르고 앞부분만 남김. ex)F:\project\finalProject\final\final1zo\workspace
		 String pathModified=path.substring(0, index);
		 
		 //반복
		 index=pathModified.lastIndexOf("\\");
		 pathModified = pathModified.substring(0,index);
		 //System.out.println("경로확인"+pathModified);
		
		 //실제 저장될 경로 지정
		 //ex) pathModified	= F:\project\finalProject\final\final1zo 뒤에 webapp경로 지정
		 String filePath=pathModified+"/webapp/public/storage";
	 	 System.out.println("실제폴더 : " + filePath);
	 	
	
		 
		 try {
			
			 
			 
			 String fileName=null;
			 
			 //원래는 img가 list형태라서 iterator를 사용하는 것이 더 올바른 방법이긴 함.
			 for(MultipartFile sendImg:img) {
				
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
				System.out.println(fileName);
			 }
			 
			 //DTO에 사진명 수정 후 DTO에 세팅
			 String imgName;
			 imgName=fileName.substring(4, fileName.length()-1);
			 System.out.println(imgName);
			 usedItemDTO.setImgName(imgName);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}//복사
				 
		 usedItemService.upload2(usedItemDTO);
		 
	 }
	 
	 @DeleteMapping(path="deleteItem")
	 public void deleteItem(@RequestParam int seq) {
		 System.out.println(seq);
		 usedItemService.deleteItem(seq);
		 
	 }
}
