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
import lookbook.entity.StyleEntity;
import lookbook.entity.StyleFileEntity;
import member.dao.MemberDAO;


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

	//내 글 list 
	@Transactional
	public List<StyleDTO> findAllMyList(String id) {
		  System.out.println("서비스에 id가 넘어갓냥? "+id);
		  	
	      List<StyleEntity> styleEntityList = styleDAO.findAllById(id);
	      
//		  List<StyleDTO> styleDTOList = styleEntityList.stream().map(StyleDTO::toStyleDTO).collect(Collectors.toList());		
	        
	      //List<StyleDTO> 일경우 
	      List<StyleDTO> styleDTOList = new ArrayList<>();
	      
	      for (StyleEntity styleEntity: styleEntityList) {
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
	
	public void save(List<MultipartFile> list, StyleDTO styleDTO) {		
			
		styleDTO.setStyleFile(list);			
		System.out.println("리스트 담겻나"+styleDTO);
		
		if(styleDTO.getStyleFile() == null || styleDTO.getStyleFile().isEmpty()) {
	    	//첨부파일 없음
			StyleEntity styleEntity = StyleEntity.toSaveEntity(styleDTO);
	    	styleDAO.save(styleEntity);
	    }else {
	    	 //첨부파일 있음
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
	 	    	System.out.println("최종"+styleFileEntity);
	 	    	styleFileDAO.save(styleFileEntity);//저장
	 	     }//for
	 	    
	    	 
	     }//else	
		
		
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


	 
	 
/*	 
	//좋아요 했는지 찾기
		 @Override
		    public int findLike(String boardId, String id) {
		        
			 // 저장된 DTO 가 없다면 0, 있다면 1
		        Optional<StyleLikesEntity> findLike = likesDAO.findByStyleEntity_IdAndMemberDto_Id(boardId, id);
		        if (findLike.isEmpty()){
		            return 0;
		        }else {
		            return 1;
		        }
		    }

	//좋아요 저장하기
	//참고 : https://velog.io/@hellocdpa/220220-SpringBoot%EC%A2%8B%EC%95%84%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
			@Transactional
		    @Override
		    public int saveLike(String boardId, String id) {
		        Optional<StyleLikesEntity> findLike = likesDAO.findByStyleEntity_IdAndMemberDto_Id(boardId, id);

		        System.out.println(findLike.isEmpty());

		        if (findLike.isEmpty()){
		            MemberDto memberDto = memberDAO.findById(id).get();
		            StyleEntity styleEntity = styleDAO.findById(boardId).get();

		            StyleLikesEntity styleLikesEntity = LikesEntity.toLikeEntity(memberDto, styleEntity);
		            likesDAO.save(likeEntity);
		            //styleDAO.plusLike(boardId);
		            return 1;
		        }else {
		        	likesDAO.deleteByStyleEntity_IdAndMemberDto_Id(boardId, id);
		            //styleDAO.minusLike(boardId);
		            return 0;

		        }

		    }
		*/
	
	 
		//이터레이터로 반복문돌리기 . 전체글 불러오기까지
//		@Transactional
//		public List<StyleDTO> findAllMyList(String id) {
//			  Optional<StyleEntity> styleEntityList = styleDAO.findById(id);
//		      List<StyleDTO> styleDTOList = new ArrayList<>();
//		      
//		      for (StyleEntity styleEntity: styleEntityList) {
//			         styleDTOList.add(StyleDTO.toStyleDTO(styleEntity));
//			      }
//		      
////		      Iterator<StyleEntity> iter = styleEntityList.iterator();	      
////		      
////		      while(iter.hasNext()) {
////		    	  StyleEntity styleEntity = iter.next();
////		    	  styleDTOList.add(StyleDTO.toStyleDTO(styleEntity));
////		      }
	//
//		      return styleDTOList; 
//		}

	
}

