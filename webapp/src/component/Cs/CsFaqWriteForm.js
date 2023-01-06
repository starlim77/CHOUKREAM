import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import CsNav from './Csnav/CsNav';
import { useRef } from 'react';

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
/*
npm install @toast-ui/react-editor
버전 호환?/ 에러? 때문에 설치 할 때 --force 붙이기 .
*/

const CsFaqWriteForm = (props) => {
    const[form ,setForm] =useState({
       category: '',
        title : '',
       content : ''
    })
    const editorRef = useRef();
    const {category,title ,content} = form 
   
    
    const navigate = useNavigate('')

    const onInput=(e)=> {
        const {name,value}=e.target

        setForm({
            ...form,
            [name] : value
        })
        console.log(content)
    }

    const onCsFaqWriteFormSubmit =( ) =>{
        axios.post('http://localhost:8080/cs/write',null,{
            params:{
                    category : category,
                    title : title,
                    //content :editorRef.current?.getInstance()
                    content:editorRef.current?.getInstance().getHTML()
                 }
             })
             .then(()=>{
                console.log(content)
                alert(' 자주 묻는 질문 글 등록')
                navigate(-1)

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
        console.log(error => console.log(error))
    }

   
    


    return (
        <>
      
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
               {/*Toast------------ */}
                <tr>
                    <td colSpan='2'>
                    <Editor
             ref={editorRef}         
          placeholder="내용을 입력해주세요."
          previewStyle="vertical" // 미리보기 스타일 지정
          height="300px" // 에디터 창 높이
          initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
          toolbarItems={[
            // 툴바 옵션 설정
            ['heading', 'bold', 'italic', 'strike'],
            ['hr', 'quote'],
            ['ul', 'ol', 'task', 'indent', 'outdent'],
            ['table', 'image', 'link'],
            ['code', 'codeblock']
          ]} 
       
        ></Editor>
   

                    </td>
                </tr>
                {/* <tr>
                    <td colSpan='2'>
                        <textarea name ='content' placeholder='내용' style={{width :'350px' , height:'350px' }} onChange={onInput} value={content}/>
                    </td>
                </tr> */}
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