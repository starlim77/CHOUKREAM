import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router';

import Header from '../Header/Header';
import CsNav from './Csnav/CsNav';

const CsFaqUpdateForm = () => {
    const [list, setList] =useState([])

    const[data ,setData] =useState([])
    const {seq} =useParams()
    useEffect(()=>{
        axios.get(`http://localhost:8080/cs/getBoard?seq=${seq}`)//

        .then((res) => {//주소가서 res 받아오기
            setForm(res.data)})//setList에 담기            
        .catch((error) => console.log(error));

    },[])
    const[form ,setForm] =useState({
        category:'',
         title : '',
         content : ''
     })
     const {category,title ,content} = form 

    const onInput=(e)=> {
        const {name,value}=e.target

        setForm({
            ...form,
            [name] : value
        })
    }
    const navigate = useNavigate()
    const onUpdate=(e) =>{
        axios.put('http://localhost:8080/cs/updateBoard',null,{
            params:{
                    seq : seq, // seq 필수로 들어가야 함 .그래야 insert가 아닌 update가  (seq가 pk) 
                    category : category,
                    title : title,
                    content :content
                 }
             })
             .then(()=>{
                alert(' 수정 등록')
                navigate("/cs/CsFaq")

             })
             .catch(error => console.log(error))
    }
    const onReset =(e) =>{
        e.preventDefault()
        // 리셋 시 변경 전 값 가져오기 위해 다시 한번 가져오기  - 
        axios.get(`http://localhost:8080/cs/getBoard?seq=${seq}`)

        .then((res) => {
            setForm(res.data)})          
        .catch((error) => console.log(error));
      
    }
    const onList=(e)=>{
        navigate("/cs/CsFaq")
    }
    return (
        <>
        <Header/>
        <CsNav/>
         <form>
            <table  style={{border : '1px solid black'}} >
                <tr>
                    <td >
                        <select name ='category' style={{width :'100px' }}  onChange={ onInput} value={category}>
                            <option>선택</option>
                            <option value='common'> 공통</option>
                            <option value='policy'>정책</option>
                            <option value='buying'>구매</option>
                        </select>
                    </td>
                    <td>
                        <input type='text'  name ='title' placeholder='제목'style={{width :'250px' }} onChange={ onInput} value={title}/>

                    </td>   
                </tr>
                <tr>
                    <td colSpan='2'>
                        <textarea name ='content' placeholder='내용' style={{width :'350px' , height:'350px' }} onChange={onInput} value={content}/>
                    </td>
                </tr>
            </table>
            </form> 
            <div>
                <p> 
                    <button onClick={onList}>목록</button>
                    <button onClick={onUpdate}>수정</button>
                    <button  onClick={onReset}>취소</button>
                </p>
             </div>
            
        </>
    );
};

export default CsFaqUpdateForm;