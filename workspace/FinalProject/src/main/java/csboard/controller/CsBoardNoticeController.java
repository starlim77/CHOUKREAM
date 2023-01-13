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
import csboard.service.CsBoardNoticeService;

import jakarta.servlet.http.HttpSession;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path="csnotice")
public class CsBoardNoticeController {
	@Autowired
	private CsBoardNoticeService csBoardNoticeService;
	
	@PostMapping(path = "write" , produces="text/html; charset=UTF-8")
	@ResponseBody
	public void write(@RequestBody List<MultipartFile> img, @ModelAttribute CsBoarNoticeDTO csBoardNoticeDTO, HttpSession session) {
		System.out.println(img);
		System.out.println(csBoardNoticeDTO);
		 
		if(img != null)  {
			//이미지 첨부시 
		String path = System.getProperty("user.dir");
		 int index = path.lastIndexOf("\\");
		 System.out.println(index +"index" + "filepath"+csBoardNoticeDTO.getFilepath());
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
	 	 
		
		 
		 System.out.println(csBoardNoticeDTO);
		 for(MultipartFile sendImg:img) {
			 String fileName = csBoardNoticeDTO.getFilename()+".png";//폴더에 저장 될 때 - 확장자명 붙여서 ??
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
		
		csBoardNoticeDTO.setFilepath(filePath); 
		csBoardNoticeService.write(csBoardNoticeDTO);
		}else {//이미지 없을 떄 
			csBoardNoticeService.write(csBoardNoticeDTO);
		}
	}
	
	@GetMapping(path = "getNotices")
	public List<CsBoarNoticeDTO> getNotices() {
		return csBoardNoticeService.getNotices("buying");
	}
	@GetMapping(path = "getNotice")
	public Optional<CsBoarNoticeDTO> getNotice(@RequestParam String seqString) {
		System.out.println(seqString);
		int seq = Integer.parseInt(seqString);
		System.out.println(seq);
		return csBoardNoticeService.getNotice(seq);
	}
	@GetMapping(path = "getNoticeInt")
	public Optional<CsBoarNoticeDTO> getNoticeInt(@RequestParam int seq) {
		
		System.out.println(seq);
		return csBoardNoticeService.getNoticeInt(seq);
	}
	
	@DeleteMapping(path="deleteNotice")	
	public void deleteBoard(@RequestParam String seqString) {
		int seq = Integer.parseInt(seqString);
		csBoardNoticeService.delete(seq);		
	}
	@PutMapping(path="update")	
	@ResponseBody
	public void update( @RequestBody List<MultipartFile> img, @ModelAttribute  CsBoarNoticeDTO csBoardNoticeDTO , HttpSession session) {
		
		if(img != null)  {
			String path = System.getProperty("user.dir");
			 int index = path.lastIndexOf("\\");
			 System.out.println(index +"index" + "filepath"+csBoardNoticeDTO.getFilepath());
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
		 	 
			
			 
			 System.out.println(csBoardNoticeDTO);
			 for(MultipartFile sendImg:img) {
				 String fileName = csBoardNoticeDTO.getFilename()+".png";//폴더에 저장 될 때 - 확장자명 붙여서 ??
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
			
			csBoardNoticeDTO.setFilepath(filePath); 
			csBoardNoticeService.update(csBoardNoticeDTO);	
			
		}else {
			csBoardNoticeService.update(csBoardNoticeDTO);	
		}
		
	}
}
