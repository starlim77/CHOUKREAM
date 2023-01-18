//Toast
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as C from './CsNoticeStyle';
import jwt_decode from 'jwt-decode';
const CsNoticeWrite = () => {

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

    const [form, setForm] = useState({
        category: '',
        title: '',
        content: '',
        filename: "",
        filepath: "",
        id : ''
    });
    const editorRef = useRef();
    const { category, title, content , filename, filepath } = form;
  
    useEffect(() =>{editorRef.current?.getInstance().setHTML((content))},[])  //TostEditor에 입력하는 값 나오기
    
   //유효성 
    const [categoryValidateCheck,setCategoryValidateCheck] =useState(false)
    const [titleValidateCheck,setTitleValidateCheck]=useState(false)
    const[contentValidateCheck ,setContentValidateCheck]=useState(false)
    const[data ,setData] =useState('')

    useEffect(() => {   
        setCategoryValidateCheck(false)
        setTitleValidateCheck(false)
        setContentValidateCheck(false)},[title,data,category])
    
    const navigate = useNavigate('');

    const onInput = e => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
        console.log(content);
    };
  
    const onChange = () => {
        setData(editorRef.current.getInstance().getHTML()) 
      
      };
   const [img1, setImg1] = useState();
   
    const [fileName,setFileName]=useState([]) 
    const[file , setFile] =useState([])

    const onUploadImage = async (img, callback) => { 
        //글 등록 이전 Toast에디터 작성 페이지에 사진 뜨게 하기....
        
        const url =  window.URL.createObjectURL(img)
        console.log(img);

        const split = url.split('/');
        console.log(split)
        setImg1(split[3]) //파일 이름 
        file.push(img); //파일로 저장 
        callback(url)
    }
//글 등록
    const onCsFaqWriteFormSubmit = (e) => {
        e.preventDefault()
        console.log('글등록 버튼 누름')

        // console.log(file)
        var formData = new FormData();
        file.map(files=>formData.append('img',files));
        for (let key of formData.keys()) {
            console.log(key, ":", formData.get(key));
        }
        if(category===''){
            setCategoryValidateCheck(true)
         
        }else if(title===''){
            setTitleValidateCheck(true)
         
    
        }else if(editorRef.current?.getInstance().getHTML()==='<p><br></p>'){
           setContentValidateCheck(true)
       
    
        }else{
        axios
        .post(
            'http://localhost:8080/csnotice/write', formData, {
                params: {
                    category: category,
                    title: title,
                    id : tokenId,
                    filename: img1,
                    content: editorRef.current?.getInstance().getHTML(),
                },
            }
        )
        .then(() => {
            // callback(data.imgUrl);

            // console.log(content + '성공');
            alert('  공지  등록');
            navigate('/cs/csNotice')
        
         
        })
        .catch(error => {
            console.log(content);
           
            console.log(error + '완전에러');
        });

       
      }
    }
        
    const onReset = e => {
            e.preventDefault(); 
    
            setForm({
                title: '',
                content: '',
                category: 'etc',
            });
            console.log(error => console.log(error));
        };
    
    return (
        <>
        
            <C.Form>
            <C.CategorySelect name="category"   onChange={onInput}>
                <option value=''>선택</option>
                <option value="anouncement"> 공지</option>
                <option value="event">이벤트발표</option>
                <option value="etc">기타</option>
                               
            </C.CategorySelect>    
          
            <C.TitleInput
                                type="text"
                                name="title"
                                placeholder="제목"
                                
                                onChange={onInput}
                                value={title}
                            />
                {categoryValidateCheck ? <C.Validation>'카테고리를 선택해주세요'</C.Validation>:''}
                {titleValidateCheck ? <C.Validation>'제목을 입력 해주세요'</C.Validation> : ''} 
        
       

        <Editor
                                ref={editorRef}
                                placeholder="내용을 입력해주세요."
                                previewStyle="vertical" // 미리보기 스타일 지정
                                height="500px" // 에디터 창 높이
                                initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
                                onChange={onChange}
                                toolbarItems={[
                                    // 툴바 옵션 설정
                                    ['heading', 'bold', 'italic', 'strike'],
                                    ['hr', 'quote'],
                                    ['ul', 'ol', 'task', 'indent', 'outdent'],
                                    ['table', 'image', 'link'],
                                    ['code', 'codeblock'],
                                ]}
                                plugins={[colorSyntax]}  // colorSyntax 플러그인 적용
                                hooks={{
                                    //사진 등록 버튼 눌렀을 때.
                                    addImageBlobHook: onUploadImage,
                                }} //
                            ></Editor>
                             {contentValidateCheck ?<C.Validation>내용을 입력해주세요</C.Validation>  : '' }
  
         <C.ButtonWrapper>
                    <C.Button onClick={onCsFaqWriteFormSubmit}>등록</C.Button>
                    <C.Button onClick={onReset}>취소</C.Button>
         </C.ButtonWrapper>
         </C.Form>
               
        </>
    );
};


export default CsNoticeWrite;