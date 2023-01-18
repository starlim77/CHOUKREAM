package lookbook.service;

import java.io.File;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lookbook.bean.StyleDTO;
import lookbook.dao.StyleDAO;
import lookbook.dao.StyleFileDAO;
import lookbook.dao.StyleLikesDAO;
import lookbook.entity.StyleEntity;
import lookbook.entity.StyleFileEntity;
import member.bean.MemberDto;
import member.dao.MemberDAO;
import shop.bean.ProductDTO;
import shop.dao.ShopDAO;


//DTO  -->  Entity
//Entity -->  DTO 

@Service
@RequiredArgsConstructor
public class StyleServiceImpl implements StyleService {
	@Autowired
	private StyleDAO styleDAO;
	@Autowired
	private StyleFileDAO styleFileDAO;
	@Autowired
	private MemberDAO memberDAO;
	@Autowired
	private StyleLikesDAO styleLikesDAO;
	@Autowired
	private ShopDAO shopDAO;


	//내 글 list 
	@Transactional
	public List<StyleDTO> findAllMyList(String id) {
      List<StyleEntity> styleEntityList = styleDAO.findAllByIdOrderBySeqDesc(id);
      List<StyleDTO> styleDTOList = new ArrayList<>();
     
      for (StyleEntity styleEntity : styleEntityList) {
         styleDTOList.add(StyleDTO.toStyleDTO(styleEntity));
      }
      
      return styleDTOList; 
	}

	
	//내 글 1개만 보기
	@Override
	public StyleDTO findMyListDetail(int seq) {
        Optional<StyleEntity> optionalStyleEntity = styleDAO.findBySeq(seq);
        if (optionalStyleEntity.isPresent()) {
            StyleEntity styleEntity = optionalStyleEntity.get();
            StyleDTO styleDTO = StyleDTO.toStyleDTO(styleEntity);
            return styleDTO;
        } else {
            return null;
        }
	}
	
	//업데이트. 글만 업데이트 가능
	@Override
	public void save(StyleDTO styleDTO) {
		//업데이트 할 때 파일이 있는 경우 수정이라서 toSaveFileEntity로 사용 
		StyleEntity styleEntity = StyleEntity.toSaveFileEntity(styleDTO);
    	styleDAO.save(styleEntity);
		
	}
	
	//글삭제
	@Override
	public void delete(int seq) {
		//System.out.println("서비스임플 seq ="+seq);
		styleDAO.deleteBySeq(seq);
		
	}
	
    @Override
    public Long findCountById(String id) {
    	//System.out.println("서비스임플에 id" + id);
       return styleDAO.countById(id);
    	
       
    }

	
	public void save(List<MultipartFile> list, StyleDTO styleDTO) {		
			
		styleDTO.setStyleFile(list);			
		//System.out.println("리스트 담겻나"+styleDTO);
		
		//아이디로 이메일 불러와서 스타일 디티오에 저장
			String id = styleDTO.getId();
			System.out.println(id + "id *******************************************");
			MemberDto memberDTO = memberDAO.findEmailById(id);
			String email = memberDTO.getEmail();
			System.out.println(email + "email *****************************************");
			styleDTO.setEmail(email);
		
		if(styleDTO.getStyleFile() == null || styleDTO.getStyleFile().isEmpty()) {
	    	//첨부파일 없음
			
			
			
			StyleEntity styleEntity = StyleEntity.toSaveEntity(styleDTO);
			
			
			styleEntity.setEmail(null);
	    	styleDAO.save(styleEntity);
	    }else {
	    	 //첨부파일 있음
	    	 System.out.println("DTO = " + styleDTO);
	 		//String filePath = session.getServletContext().getRealPath("/webapp/public/storage");  //저장할경로설정
	 		
	 		 String path = System.getProperty("user.dir");
//	 	     System.out.println(path);
	 	     int index = path.lastIndexOf("\\");
//	 	     System.out.println(index);
	 	     String pathModified=path.substring(0, index);
//	 	     System.out.println(pathModified);
	 	     index=pathModified.lastIndexOf("\\");
//	 	     System.out.println(index);
	 	     pathModified = pathModified.substring(0,index);
//	 	     System.out.println("경로확인"+pathModified);
	 	     
	 	     
	    	 
	 	     StyleEntity styleEntity = StyleEntity.toSaveFileEntity(styleDTO);
	 	     int savedSeq = styleDAO.save(styleEntity).getSeq();
	 	     StyleEntity style = styleDAO.findBySeq(savedSeq).get();//부모 엔티티 가져옴 id가 있으니까
	 	     
	 	    
	 	     for(MultipartFile styleFile: styleDTO.getStyleFile()) {
	 	    	
	 	    	//MultipartFile styleFile = styleDTO.getImgList();//파일꺼내기
	 	    	
	 	    	String originalFileName = styleFile.getOriginalFilename(); //서버 저장용이름
	 	    	String storedFileName = System.currentTimeMillis() + "_" + originalFileName;
	 	    	String filePath = pathModified+"/webapp/public/storage";
	 	    	System.out.println("originalFileName"+originalFileName+"storedFileName"+storedFileName);
	 	    	try {
					styleFile.transferTo(new File(filePath, storedFileName));
				
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}//경로에 실제파일 저장 
	 	    	StyleFileEntity styleFileEntity = StyleFileEntity.toStyleFileEntity(style, originalFileName, storedFileName);//boardFileEntity로 전환
	 	    	//System.out.println("최종"+styleFileEntity);
	 	    	styleFileDAO.save(styleFileEntity);//저장
	 	     }//for
	 	    
	    	 
	     }//else	
		
		
	}

	@Transactional
	public List<StyleDTO> findAllByOrderBySeqDesc(){
		List<StyleEntity> styleEntityList = styleDAO.findAllByOrderBySeqDesc();
		List<StyleDTO> styleDTOList = new ArrayList<>();
		for (StyleEntity styleEntity: styleEntityList) {
			styleDTOList.add(StyleDTO.toStyleDTO(styleEntity));			
		}
		return styleDTOList; 
		
	}

	
	  @Transactional
	  public List<StyleDTO> findAll() {
	      List<StyleEntity> styleEntityList = styleDAO.findAll();
	      List<StyleDTO> styleDTOList = new ArrayList<>();
	      for (StyleEntity styleEntity: styleEntityList) {
	         styleDTOList.add(StyleDTO.toStyleDTO(styleEntity));
	      }
	      return styleDTOList; 
	      
	   }
	
	 @Transactional
	    public StyleDTO findBySeq(int seq) {
	        Optional<StyleEntity> optionalStyleEntity = styleDAO.findBySeq(seq);
	        if (optionalStyleEntity.isPresent()) {
	            StyleEntity styleEntity = optionalStyleEntity.get();
	            StyleDTO styleDTO = StyleDTO.toStyleDTO(styleEntity);
	            return styleDTO;
	        } else {
	            return null;
	        }
	    }


	 //상품검색
	@Override
	public List<ProductDTO> search(String keyword) {	
		return shopDAO.search(keyword);
	}
	
	@Override
	public Optional<ProductDTO> styleProductSearch(int seq) {
		return shopDAO.findById(seq);
	}


	@Override
	public List<StyleDTO> styleOneProduct(int productSeq) {		
//		System.out.println("================================="+productSeq);
		List<StyleEntity> styleEntityList = styleDAO.findByProductSeqOrderBySeqDesc(productSeq);
	      List<StyleDTO> styleDTOList = new ArrayList<>();
	      for (StyleEntity styleEntity: styleEntityList) {
	         styleDTOList.add(StyleDTO.toStyleDTO(styleEntity));
	      }
	      return styleDTOList; 

	}

	
}

