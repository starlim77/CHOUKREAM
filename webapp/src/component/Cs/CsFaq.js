
import React, { useEffect, useMemo, useState } from 'react';
import Header from '../Header/Header';
import CsNav from './Csnav/CsNav';
import { SearchInpt } from './style';

import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { Viewer } from '@toast-ui/react-editor';
import Paging from './Paging.js';
import * as C from './CsFaqStyle';
import jwt_decode from 'jwt-decode';
import { IconName, RxChevronDown, RxChevronUp, RxCrossCircled } from "react-icons/rx";
import { icon } from '@fortawesome/fontawesome-svg-core';




const CsFaq = () => {
    const token = localStorage.getItem('accessToken');
    const [auth, setAuth] = useState('ROLE_GUEST');
    const [tokenId, settokenId] = useState('')
    useEffect(() => {
        if (token !== null) {
            const tokenJson = jwt_decode(token);
            setAuth(tokenJson['auth']);
            //localStorage.setItem('userInfo', JSON.stringify(tokenJson));
            settokenId(tokenJson['sub']);
            // setForm({...form, id:tokenId})
        }
    }, [token]);


    
    const [list, setList] =useState([])
    const [style, setStyle] = useState('');

    const [keyword ,setKeyword]=useState('')
    const [search ,setSearch] =useState('')
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
   
    const onSearch =(e) => {
        e.preventDefault()
        axios.get('http://localhost:8080/csfaq/getKeywordSearchList',{
            params : {
                 
                 keyword : keyword
             }
         })
         .then((res) => {//주소가서 res 받아오기
           
          
            setList(res.data)
            console.log(list)
            })//setList에 담기  
              .catch(error=> console.log(error))
    }
    const onKeyPress =(e) => {
        if(e.key=='Enter'){
            onSearch(e)
        }
    }
    const [category , setCategory] =useState('')
    //--Paging-----
   // npm i react-js-pagination --force  설치
 
   const [count, setCount] = useState(0); // 아이템 총 개수
   const [currentPage, setCurrentPage] = useState(1); // 현재 페이지. default 값으로 1
   const [postPerPage] = useState(10); // 한 페이지에 보여질 아이템 수 
   const [indexOfLastPost, setIndexOfLastPost] = useState(0); // 현재 페이지의 마지막 아이템 인덱스
   const [indexOfFirstPost, setIndexOfFirstPost] = useState(0); // 현재 페이지의 첫번째 아이템 인덱스
   const [currentPosts, setCurrentPosts] = useState(0); // 현재 페이지에서 보여지는 아이템들
   
   
    useEffect(()=>{
        axios.get('http://localhost:8080/csfaq/getList')//포트 다르니가 풀주소

        .then((res) => {//주소가서 res 받아오기
           
          
            setList(res.data)
            })//setList에 담기  
        
        .catch((error) => console.log(error));
        

    },[])

     //pagination 관련
     useEffect(() => {
      
        setCount(list.length);
        setIndexOfLastPost(currentPage * postPerPage);
        setIndexOfFirstPost(indexOfLastPost - postPerPage);
        setCurrentPosts(list.slice(indexOfFirstPost, indexOfLastPost));
    },[currentPage, indexOfLastPost, indexOfFirstPost, list, postPerPage])

    const setPage = (error) => {
        setCurrentPage(error);
      };
  
    const [visibleReset ,setVisibleRest] = useState(false)  
   const onInput = (e) =>{
    setKeyword (e.target.value) 
    console.log(keyword)
   
    setVisibleRest(true)

}
const onReset =(e)=>{
    setKeyword('')
    setVisibleRest(false)
}
 
   
    const onClickCategory = (e) => {
       // e.preventDefault();
       setCategory(e.target.value); 
       console.log(e.target.value)
      
       
        axios.get('http://localhost:8080/csfaq/getCategoryList',{
            params : {
             
                category :  e.target.value
             }
        })
             .then((res) => {
               
                setList(res.data)
           
            })//setList에 담기   )
             .catch((error) => console.log(error))
        
        
    }

    const [upanddown ,setUpanddown] =useState(true)
    const handleClickItem =(id)  => {
        setVisible({
         //   ...visible, //이전까지  visible은 그대로 
            
            [id]: !visible[id],  //[변수명] : 값  //  !visilble(false) -> true  만약  true면 반대로 false :  토글??
            
        });
      
     
    };

    const onDelete =(e) =>{
    const seq = e.target.value;
    console.log(seq)
    axios.get(`http://localhost:8080/csfaq/getBoard?seq=${seq}`)
         .then(
             axios.delete(`http://localhost:8080/csfaq/deleteBoard?seq=${seq}`)
                        .then(() =>{
                            alert("글 삭제");
                            navigate(0);

                        })
                        .catch(error=> console.log(error))
        
    )
        .catch(error=> console.log(error))
    }
    //e=>setKeyword(e.target.value)

   

    return (
     
        <>
           
       
            <div>
              
           
            {visibleReset ?
            <C.SearchReset  onClick={onReset}><RxCrossCircled/></C.SearchReset>  : <C.SearchReset ></C.SearchReset>     }
            
            <C.SearchInput type ='search' value={keyword} onChange = { onInput} onKeyPress={onKeyPress} placeholder='검색'/>
          
            </div>
          
           
            <C.CsCategoryTable>
                <C.CsCategoryTbody>
                <C.CsCategoryTr>
                    <C.CsCategoryTd ><C.CategoryButton onClick={onClickCategory}  style={category===''? {fontWeight: "bold"}:{} }value=''> 전체</C.CategoryButton></C.CsCategoryTd>
                    <C.CsCategoryTd ><C.CategoryButton onClick={onClickCategory}  style={category==="policy"? {fontWeight: "bold"}:{} }value='policy'>이용정책</C.CategoryButton></C.CsCategoryTd>
                    <C.CsCategoryTd><C.CategoryButton onClick={onClickCategory}   style={category==="common"? {fontWeight: "bold"}:{} }value='common'> 공통</C.CategoryButton></C.CsCategoryTd>
                </C.CsCategoryTr>
                <C.CsCategoryTr>
                <C.CsCategoryTd><C.CategoryButton onClick={onClickCategory}   style={category==="buying"? {fontWeight: "bold"}:{} }value='buying'> 구매</C.CategoryButton></C.CsCategoryTd>
                    <C.CsCategoryTd> <C.CategoryButton  onClick={onClickCategory}  style={category==="selling"? {fontWeight: "bold"}:{} }value='selling'  >판매</C.CategoryButton></C.CsCategoryTd>
                    <C.CsCategoryTd ></C.CsCategoryTd>
                    
                   
                </C.CsCategoryTr>
                </C.CsCategoryTbody>
            </C.CsCategoryTable>
            
            
                {list.length===0 && <C.NoResult>검색결과가 없습니다
                                  <p>  <C.ChatButton>채팅하기</C.ChatButton></p>
                                    </C.NoResult>
                                    }
                
                { list.slice(indexOfFirstPost, indexOfLastPost).map((item) => { //10개씩 글목록이 뜨게?? 하기 위해서 map을 list(전체)가 아닌 {list.slice(indexOfFirst, indexOfLast) 으로 돌리기..그냥 이렇게 해야 그렇게 되어서 ,,,
                    return (
                        
                        
                        <C.NoticeUl key={item.seq}>
                            <C.NoticeLi
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleClickItem(item.seq)}
                            >
                                {/* {' '} */}
                              <C.StrongCategory> {item.category==='' ? '전체':
                                                   item.category==='policy' ? '구매정책' :
                                                   item.category==='common' ? '공통' :
                                                   item.category==='buying' ? '구매' :
                                                   item.category==='selling' ? '판매' :
                                                   ''}
                             </C.StrongCategory>
                                 &nbsp;&nbsp;&nbsp;                   
                                {item.title}
                             <C.UpdownIcon> {visible[item.seq] ? <RxChevronUp/>  :   <RxChevronDown/> }</C.UpdownIcon>  
                            </C.NoticeLi>
                            {visible[item.seq] && (
                            
                                    <C.NoticeContent>
                                      
                                      {/*   <div dangerouslySetInnerHTML={{ __html: item.content }}></div> */} 
                                        <Viewer initialValue={(item.content).replace('<img src="blob:http://localhost:3000/'+item.filename+'" contenteditable="false">', '<img src="/storage/'+item.filename+'.png" contenteditable="false">') } />
                                        <C.ButtonRight>
                                         {tokenId === '14' && 
                                         <Link to={'/cs/CsFaqUpdateForm/'+item.seq}><C.ModifiedButton  value ={item.seq}>수정</C.ModifiedButton></Link> } {/*param 가져가기 */}
                                         {tokenId === '14' &&  <C.ModifiedButton  value ={item.seq} onClick={onDelete}>삭제</C.ModifiedButton> }
                                      
                                       
                                           </C.ButtonRight>
                                    </C.NoticeContent>
                         
                               
                                
                             )}
                        </C.NoticeUl>
                  
                    );
               
                })}
              

            {/*  PAGINATION * 검색결과 있을 때만 페이지 띄우기 */}
            {list.length >1 &&
            <Paging page={currentPage} count={count} setPage={setPage} /> }
            <C.WriteBtn>{tokenId === '14' &&  <Link to='/cs/CsFaqWriteForm'><C.Button>글쓰기</C.Button></Link>}</C.WriteBtn>
          
               
           

        </>
    );
};

export default CsFaq;