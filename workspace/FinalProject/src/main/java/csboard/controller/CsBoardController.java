package csboard.controller;

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
}
