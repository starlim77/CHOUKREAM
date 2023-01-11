
import React, { useEffect, useMemo, useState } from 'react';
import Header from '../Header/Header';
import CsNav from './Csnav/CsNav';
import { SearchInpt } from './style';

import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import CsFaqWriteForm from './CsFaqWriteForm';
import axios from 'axios';
import { Viewer } from '@toast-ui/react-editor';
import Paging from './Paging.js';





const CsFaq = () => {
    
    const [list, setList] =useState([])

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
              .then(res => setList(res.data))
              .catch(error=> console.log(error))
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
           
            console.log(list)
            setList(res.data)
           
            console.log(list)})//setList에 담기  
        
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
   
    const onClickCategory = (e) => {
       // e.preventDefault();
       setCategory(e.target.value); 
       console.log(e.target.value)
      
       
        axios.get('http://localhost:8080/cs/getCategoryList',{
            params : {
             
                category :  e.target.value
             }
        })
             .then((res) => {//주소가서 res 받아오기
                setList(res.data)})//setList에 담기   )
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


   

    return (
     
        <>
            <p>자주묻는 질문</p>
            <hr/>
           
           
            <input type ='text' value={keyword} onChange = { e=>setKeyword(e.target.value)}/>
            <button onClick={onSearch}>검색</button><br/>
           
            <table style={{border : '1px solid black'}}>
                <tr >
                    <td ><button style ={{border:'0'}} onClick={onClickCategory}  value='buying' width="150">buying</button></td>
                    <td  ><button style ={{border:'0'}} onClick={onClickCategory}  value='policy' width="150">policy</button></td>
                    <td> <button style ={{border:'0'}} onClick={onClickCategory} value='common'  width="150">common</button></td>
                </tr>
                <tr>
                    <td  onClick={onClickCategory} value='4'  width="150">4</td>
                    <td  onClick={onClickCategory} value='5' width="150">5</td>
                    <td   width="150"></td>
                   
                </tr>
            </table>
            <p>
                <Link to='/cs/CsFaqWriteForm'><button>글쓰기</button></Link>
               
            </p>
            <table>
               
                { list.slice(indexOfFirstPost, indexOfLastPost).map((item) => { //10개씩 글목록이 뜨게?? 하기 위해서 map을 list(전체)가 아닌 {list.slice(indexOfFirst, indexOfLast) 으로 돌리기..그냥 이렇게 해야 그렇게 되어서 ,,,
                    return (
                        <table key={item.seq}>
                            <tr
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleClickItem(item.seq)}
                            >
                                {/* {' '} */}
                                <td width="50">{item.category}</td>
                                <td width="200">{item.title}</td>
                            </tr>
                            {visible[item.seq] && (
                                <tr>
                                 
                                    <td colSpan='2'> <Viewer initialValue={item.content || ''} /></td>  {/*toast viewer 사용해서 toast 편집기로  작성되어 html or markdown으로 저장된 content 내용 웹에 가져오기 */}
                                    <td><Link to={'/cs/CsFaqUpdateForm/'+item.seq}><button  value ={item.seq}>수정</button></Link> </td>{/*param 가져가기 */}
                                    <button  value ={item.seq} onClick={onDelete}>삭제</button>
                                </tr>
                               
                                
                             )}
                        </table>
                    );
                })}
                
            </table>

            {/*  PAGINATION */}
            <Paging page={currentPage} count={count} setPage={setPage} />

        </>
    );
};

export default CsFaq;