import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import CsNav from './Csnav/CsNav';

const CsFaqWriteForm = () => {
    const[form ,setForm] =useState({
       category: '',
        title : '',
        content : ''
    })
    const {category,title ,content} = form 
   
    
    const navigate = useNavigate('')

    const onInput=(e)=> {
        const {name,value}=e.target

        setForm({
            ...form,
            [name] : value
        })
    }
    const onCsFaqWriteFormSubmit =( ) =>{
        axios.post('http://localhost:8080/cs/write',null,{
            params:{
                    category : category,
                    title : title,
                    content :content
                 }
             })
             .then(()=>{
                alert(' 자주 묻는 질문 글 등록')
                navigate("/cs/CsFaq")

             })
             .catch(error => console.log(error))
    }
    const onReset =(e) =>{
        e.preventDefault()//일단 submit막기
        setForm({
            title : '',
            content : '',
            category : 'policy'
           
        })
    }
    return (
        <>
        <Header/>
        <CsNav/>

           <form>
            <table  style={{border : '1px solid black'}} >
                <tr>
                    <td >
                        <select name ='category' style={{width :'100px' }}  onChange={ onInput}>
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
                    <button onClick={onCsFaqWriteFormSubmit}>등록</button>
                    <button  onClick={onReset}>취소</button>
                </p>
             </div>

             <table  style={{border : '1px solid black'}} >
                <tr>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                 <td>3</td>
                 <td>4</td>
                </tr>

             </table>



             
        </>
    );
};

export default CsFaqWriteForm;