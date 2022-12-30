package lookbook.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
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
import lookbook.bean.StyleDTO;
import lookbook.service.StyleService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "lookbook")
public class styleController {
	@Autowired
	private StyleService styleService;
	
	@PostMapping(path="styleBoardWrite")
	public void styleBoardWrite(@ModelAttribute StyleDTO styleDTO) {
		styleService.styleBoardWrite(styleDTO);
	}
		
	@PostMapping(path="upload" , produces="text/html; charset=UTF-8")
	@ResponseBody
	public void upload(@RequestParam List<MultipartFile> img, @ModelAttribute StyleDTO styleDTO, HttpSession session) {
	//public void upload(@RequestParam("img[]") List<MultipartFile> list, HttpSession session)  {
		System.out.println("DTO = " + styleDTO);
		//String filePath = session.getServletContext().getRealPath("/webapp/public/storage");  //저장할경로설정
		
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
	      
	       
	    // String filePath=pathModified+"/webapp/public/storage";
	     //System.out.println("실제폴더 : " + filePath);
		
	     //파일첨부에 따라 로직 분리
	     if(styleDTO.getImgList().isEmpty()) {
	    	 //첨부파일 없음
	    	 styleService.upload(styleDTO);
	     }else {
	    	 //첨부파일 있음
	    	 
	    	 MultipartFile styleFile = styleDTO.getImgList();
	    	 String originalFileName = styleFile.getOriginalFilename(); //서버 저장용이름
	    	 String storedFileName = System.currentTimeMillis() + "_" + originalFileName;
	    	 String filePath = pathModified+"/webapp/public/storage"+ storedFileName;
	    	 styleFile.transferTo(new File(filePath));//경로에 실제파일 저장
	    	 
	     }
	    	 
	       
	       for(MultipartFile image : img) {   	   
	       
	    	   String fileName = image.getOriginalFilename();
	    	   File file = new File(filePath, fileName);
		       
	    	   try {
	    		   
					image.transferTo(file);
					styleDTO.setFilepath(filePath);
					styleDTO.setFilename(fileName);
				} catch (IOException e) {
					e.printStackTrace();
				}
	    	   styleService.upload(styleDTO);
	    	   
	    	   
	       }//for
	       
	       
	       //for(MultipartFile img : list) {
//	       String fileName = img.getOriginalFilename();
//	       File file = new File(filePath, fileName);
//	       
//	       try {
//	    	   img.transferTo(file);
//	       } catch (IOException e) {
//	    	   e.printStackTrace();
//	       }
	     //}//for
		
		
	}
	
	
	
	@GetMapping(path="getStyleList")
	public List<StyleDTO> getStyleList() {
		return styleService.getStyleList();
	}
	
	
}
