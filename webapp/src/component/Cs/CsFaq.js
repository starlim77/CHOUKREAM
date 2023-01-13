
import React, { useEffect, useMemo, useState } from 'react';
import Header from '../Header/Header';
import CsNav from './Csnav/CsNav';
import { SearchInpt } from './style';

import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import CsFaqWriteForm from './CsFaqWriteForm';
import axios from 'axios';
import { Viewer } from '@toast-ui/react-editor';
import Paging from './Paging.js';
import * as C from './CsFaqStyle';




const CsFaq = () => {
    
    const [list, setList] =useState([])
    const [style, setStyle] = useState('');

    const [keyword ,setKeyword]=useState('')
    const [search ,setSearch] =useState('')
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
   
    const onSearch =(e) => {
        e.preventDefault()
        axios.get('http://localhost:8080/cs/getKeywordSearchList',{
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
        axios.get('http://localhost:8080/cs/getList')//포트 다르니가 풀주소

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
   const onInput = (e) =>{
    setKeyword (e.target.value) 
    setStyle('')
   }
    const onClickCategory = (e) => {
       // e.preventDefault();
       setCategory(e.target.value); 
       console.log(e.target.value)
      
       
        axios.get('http://localhost:8080/cs/getCategoryList',{
            params : {
             
                category :  e.target.value
             }
        })
             .then((res) => {
               
                setList(res.data)
           
            })//setList에 담기   )
             .catch((error) => console.log(error))
        
        
    }
 /*
    list = useMemo(()=> {
        return list.filter(item =>  item.name.toLowerCase().includes(text.toLowerCase())) //data값이 직접 받는 것이라서 return이 setDAta가 아니라 바로 ???

    },[search])
    
    search 다시 하기
   */

    const handleClickItem = id => {
        setVisible({
            ...visible, //이전까지  visible은 그대로 
            [id]: !visible[id],  //[변수명] : 값  //  !visilble(false) -> true  만약  true면 반대로 false :  토글??
        });
    };

    const onDelete =(e) =>{
    const seq = e.target.value;
    console.log(seq)
    axios.get(`http://localhost:8080/cs/getBoard?seq=${seq}`)
         .then(
             axios.delete(`http://localhost:8080/cs/deleteBoard?seq=${seq}`)
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
           
       
           
            <C.SearchInput type ='text' value={keyword} onChange = { onInput} onKeyPress={onKeyPress} placeholder='검색'/>
          
           
            <C.CsCategoryTable>
                <C.CsCategoryTbody>
                <C.CsCategoryTr>
                    <C.CsCategoryTd ><C.CategoryButton onClick={onClickCategory}  value='buying'> buying</C.CategoryButton></C.CsCategoryTd>
                    <C.CsCategoryTd ><C.CategoryButton onClick={onClickCategory}  value='policy'>policy</C.CategoryButton></C.CsCategoryTd>
                    <C.CsCategoryTd><C.CategoryButton onClick={onClickCategory} value='common'> common</C.CategoryButton></C.CsCategoryTd>
                </C.CsCategoryTr>
                <C.CsCategoryTr>
                    <C.CsCategoryTd> <C.CategoryButton  onClick={onClickCategory} value='4'  >4</C.CategoryButton></C.CsCategoryTd>
                    <C.CsCategoryTd > <C.CategoryButton onClick={onClickCategory} value='5' >5</C.CategoryButton></C.CsCategoryTd>
                    <C.CsCategoryTd  ></C.CsCategoryTd>
                   
                </C.CsCategoryTr>
                </C.CsCategoryTbody>
            </C.CsCategoryTable>
            <p>
                <Link to='/cs/CsFaqWriteForm'><button>글쓰기</button></Link>
               
            </p>
            
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
                               {item.category} &nbsp;&nbsp;&nbsp;
                                {item.title}
                            </C.NoticeLi>
                            {visible[item.seq] && (
                            
                                    <C.NoticeContent>
                                      
                                      {/*   <div dangerouslySetInnerHTML={{ __html: item.content }}></div> */} 
                                        <Viewer initialValue={(item.content).replace('<img src="blob:http://localhost:3000/'+item.filename+'" contenteditable="false">', '<img src="/storage/'+item.filename+'.png" contenteditable="false">') } />
                                        <p>
                                         <Link to={'/cs/CsFaqUpdateForm/'+item.seq}><C.ModifiedButton  value ={item.seq}>수정</C.ModifiedButton></Link> {/*param 가져가기 */}
                                         <C.ModifiedButton  value ={item.seq} onClick={onDelete}>삭제</C.ModifiedButton>
                                         </p>
                                    </C.NoticeContent>
                         
                               
                                
                             )}
                        </C.NoticeUl>
                  
                    );
               
                })}
              

            {/*  PAGINATION * 검색결과 있을 때만 페이지 띄우기 */}
            {list.length >1 &&
            <Paging page={currentPage} count={count} setPage={setPage} />}
           

        </>
    );
};

export default CsFaq;