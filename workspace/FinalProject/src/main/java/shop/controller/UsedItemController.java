package shop.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import shop.service.UsedItemService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path="used")
public class UsedItemController {
	
	@Autowired
	UsedItemService usedItemService;
	
	@GetMapping(path="getItem")
	public void getItem() {
		
	}
	
	
	 @PostMapping(path="upload", produces="text/html;charset-UTF-8")
	 @ResponseBody
	 public void upload2(@RequestParam("formData") List<MultipartFile> img, HttpSession session, @ModelAttribute UsedItemDTO usedItemDTO) {

//		 System.out.println(img);
//		 System.out.println(usedItemDTO);
		 System.out.println(img);
		 System.out.println(usedItemDTO);
		 
		 String path = System.getProperty("user.dir");
		 System.out.println(path);
		 int index = path.lastIndexOf("\\");
		 System.out.println(index);
		 String pathModified=path.substring(0, index);
		 System.out.println(pathModified);
		 index=pathModified.lastIndexOf("\\");
		 System.out.println(index);
		 pathModified = pathModified.substring(0,index);
		 System.out.println("경로확인"+pathModified);
		
		 
		 //String filePath=session.getServletContext().getRealPath("/");
		
		 String filePath=pathModified+"/webapp/public/storage";
	 	 System.out.println("실제폴더 : " + filePath);
		 
		 String fileName = img.getOriginalFilename();
		 
		 File file = new File(filePath, fileName);
		 
		 try {
			
			// FileCopyUtils.copy(img.getInputStream(), new FileOutputStream(file));
			 
			 img.transferTo(file);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}//복사
		
		 System.out.println(usedItemDTO);
		 usedItemDTO.setImgPath(filePath +"/" + fileName);
		 
		 System.out.println(usedItemDTO.getImgPath());

		 usedItemService.upload2(usedItemDTO);
		 
		 
		 
		 //참고자료

		//filePath를 별도로 지정한 이유: https://25gstory.tistory.com/87
	
		//현재 디렉토리 확인: https://saii42.tistory.com/68
		//https://7942yongdae.tistory.com/121
	 }
}
