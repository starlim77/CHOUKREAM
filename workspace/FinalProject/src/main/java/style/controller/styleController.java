package style.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import style.bean.StyleDTO;
import style.service.StyleService;

@Controller
public class styleController {
	@Autowired
	private StyleService styleService;
	
	@PostMapping(value="styleWrite")
	public void styleWrite(StyleDTO styleDTO) {
		styleService.styleWrite(styleDTO);
	}
	
	
	
	

}
