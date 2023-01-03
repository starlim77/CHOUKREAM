package lookbook.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.UUID;

import org.apache.tomcat.util.buf.StringUtils;
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
	
		
	@PostMapping(path="upload" , produces="text/html; charset=UTF-8")
	@ResponseBody
	public void upload(@RequestBody List<MultipartFile> list,@ModelAttribute StyleDTO styleDTO, HttpSession session) {
	//public void upload(@RequestBody MultipartFile img, HttpSession session) {
	//public void upload(@RequestParam("img[]") List<MultipartFile> list, HttpSession session)  {
	
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
        String filePath=pathModified+"/webapp/public/storage";
        System.out.println("실제폴더 : " + filePath); 
	        
        
        //list에 여러개 파일이 넘어옴=> 파일네임리스트에 파일네임을 넣고 => 파일네임리스트를 한줄로 변환해서 db에 입력
	    List<String> fileNameList = new ArrayList<String>();
	    
	    //사진파일명 중복방지 랜덤숫자 생성
	    UUID uuid = UUID.randomUUID();
	        
		for(MultipartFile img : list) {
			String fileName = uuid + "_" + img.getOriginalFilename();

			fileNameList.add(fileName);
			
			File file = new File(filePath, fileName);	
			
			try {
				img.transferTo(file);	
			} catch (IOException e) {
				e.printStackTrace();
			}
		}//for
		

		String fileNameListString = StringUtils.join(fileNameList);
		System.out.println("여러 파일네임 합친거:"+fileNameListString);  //여러개파일네임 합친거 찍어보기
		

		styleDTO.setFilename(fileNameListString);
		styleDTO.setFilepath(filePath);
		
		styleService.upload(styleDTO);

		
	}
	
	
	@GetMapping(path="getMyStyleBoardList")
	public List<StyleDTO> getMyStyleBoardList() {
		return styleService.getMyStyleBoardList();
	}
	
	@GetMapping(path="getStyleBoardList")
	public List<StyleDTO> getStyleBoardList() {
		return styleService.getStyleBoardList();
	}
	
}
