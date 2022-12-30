package user.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

//import com.siot.IamportRestClient.IamportClient;
//import com.siot.IamportRestClient.exception.IamportResponseException;
//import com.siot.IamportRestClient.response.Certification;
//import com.siot.IamportRestClient.response.IamportResponse;

import user.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {
//	@Autowired
//	private UserService userService;
	
	@PostMapping(path="certifications")
	public void certifications(@RequestBody String imp_uid) {
		System.out.println(imp_uid);
//		IamportClient client = new IamportClient("2122167683758451", "yS8BD383kFx2c55eggAGqB3HnblGRG5xYKeH46SEk4gqOTGe1m6vNpfHousJzNlrMutsqFCKyyLHZfdp");
//		IamportResponse<Certification> certificationResponse = client.certificationByImpUid(imp_uid);
//		System.out.println(certificationResponse.getResponse());
		System.out.println("본인 인증 성공");
	}
}
