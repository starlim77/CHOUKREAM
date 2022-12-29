import { TextField } from '@mui/material';
import React, { useMemo, useState } from 'react';
import Header from '../Header/Header';
import CsNav from './Csnav/CsNav';
import { SearchInpt } from './style';
import { Collapse } from '@mui/material';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import CsFaqWriteForm from './CsFaqWriteForm';

const keyword=[
    {category : '1' ,name : '질문1' , content :'질문일입니다.'},
    {category: '1' ,name : '질문1',content :'질문일입니다.'},
    
    {category: '2' ,name : '질문1',content :'질문일입니다.'},
    {category : '2' ,name: '문2',content :'질문일이니다.'},
    {category : '3' ,name: '문2',content :'질문일입123니다.'},
    {category : '3' ,name: '문2',content :'질문일입니다.'},
    {category : '4' ,name: '질문삼',content :'질문일입니다.'},
    {category : '4' ,name: '질문4',content :'질문일입니다.'},
    {category : '5' ,name: '3질문43',content :'질문일입니다.'},
    {category : '5' ,name: '343',content :'질문일입니다.'}
   
    
]

const CsFaq = () => {
    let [data, setData] =useState(keyword)
    const [text ,setText]=useState('')
    const [search ,setSearch] =useState('')
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const onSearch =() => {
        setSearch(text)
    }
    const [category , setCategory] =useState('')
    
    const onClickCategory = (e) => {
        setCategory(e.target.value)
        console.log(category)
        navigate(`/cs/CsFaq?category=${category}`);
    }
    data =useMemo(()=> {
        return keyword.filter(item =>  item.name.toLowerCase().includes(text.toLowerCase())) //data값이 직접 받는 것이라서 return이 setDAta가 아니라 바로 ???

    },[search])
    
   

    const handleClickItem = id => {
        setVisible({
            ...visible, //이전까지  visible은 그대로 
            [id]: !visible[id],  //[변수명] : 값  //  !visilble(false) -> true  만약  true면 반대로 false :  토글??
        });
    };



    return (
     
        <>
               <Header/>
                <CsNav/>

            <p>자주묻는 질문</p>
            <hr/>
           
           
            <input type ='text' value={text} onChange = { e=>setText(e.target.value)}/>
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
                {data.map((item, index) => {
                    return (
                        <table key={index}>
                            <tr
                                style={{ cursor: 'pointer' }}
                                onClick={() => handleClickItem(index)}
                            >
                                {/* {' '} */}
                                <td width="30">{item.group}</td>
                                <td width="70">{item.name}</td>
                            </tr>
                            {visible[index] && (
                                <tr>
                                    <td colSpan="2">{item.content}</td>
                                </tr>
                                
                            )}
                        </table>
                    );
                })}
            </table>

        </>
    );
};

export default CsFaq;