package csboard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import csboard.bean.CsBoardDTO;
import csboard.service.CsBoardService;




@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path="cs")
public class CsBoardController {
	
	@Autowired
	private CsBoardService csBoardService;
	
	@PostMapping(path="write")	
	public void write(@ModelAttribute CsBoardDTO csBoardDTO) {
		System.out.println(csBoardDTO);
		csBoardService.write(csBoardDTO);		
	}
	
	@GetMapping(path="getList")	
	public List<CsBoardDTO> getUserList(){
		//DB연결가능하지만 비추
		List<CsBoardDTO> list = csBoardService.getList();
		System.out.println(list.get(5).getTitle());
		return list;
		
	}
}
