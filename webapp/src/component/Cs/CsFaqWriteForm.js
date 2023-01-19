import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import CsNav from './Csnav/CsNav';
import { useRef } from 'react';

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import jwt_decode from 'jwt-decode';

import * as C from './CsFaqStyle';
/*
npm install @toast-ui/react-editor
버전 호환?/ 에러? 때문에 설치 할 때 --force 붙이기 .
*/

const CsFaqWriteForm = props => {
    
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



    const [showImgSrc,setShowImgSrc] = useState([]);
    const [form, setForm] = useState({
        category: '',
        title: '',
        content: '',
        filename: "",
        filepath: "",
        id : ''
    });
    const editorRef = useRef();
    const { category, title, content , filename, filepath,id } = form;
   
    const navigate = useNavigate('');

    const onInput = e => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
        console.log(content);
    };
    //유효성
    const [categoryValidateCheck,setCategoryValidateCheck] =useState(false)
    const [titleValidateCheck,setTitleValidateCheck]=useState(false)
    const[contentValidateCheck ,setContentValidateCheck]=useState(false)
    const[editorData ,setEditorData] =useState('')
    
     useEffect(() =>{editorRef.current?.getInstance().setHTML((content))
                 
                }
        ,[])  
    useEffect(() => {   
    setCategoryValidateCheck(false)
    setTitleValidateCheck(false)
    setContentValidateCheck(false)},[title,editorData,category])
    const onChange = () => {
    setEditorData(editorRef.current.getInstance().getHTML()) 
          
          };
    const [img1, setImg1] = useState();
    const [url, setUrl] = useState([]);
   
    const [fileName,setFileName]=useState([]) 
    const[file , setFile] =useState([])


  const onUploadImage = async (img, callback) => {
    //글 등록 이전 Toast에디터 작성 페이지에 사진 뜨게 하기....
    
    const url =  window.URL.createObjectURL(img)
    console.log(img);

    const split = url.split('/');
    console.log(split)
    // console.log(split)
    
    setImg1(split[3])
 //   const imageSrc =split[3]+'.png';


    file.push(img);
   
    callback(url); //callback 에  blob 를  넣으면 글 쓰는 페이지에 사진이 안뜸
    // return randomName;
 
};

   const onCsFaqWriteFormSubmit = () => {
    
    console.log(file)
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
            'http://localhost:8080/csfaq/write', formData, {
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

            console.log(content + '성공');
            alert(' 자주 묻는 질문 글 등록');
            console.log(editorRef.current?.getInstance().getHTML())
            navigate(-1)
        })
        .catch(error => {
            console.log(content);
            // console.log(formData)
            console.log(error + '완전에러');
        });
        
    }
    };

    const onReset = e => {
        e.preventDefault(); //일단 submit막기

        setForm({
            title: '',
            content: '',
            category: 'policy',
        });
        console.log(error => console.log(error));
    };

   

    return (
        <>
            <C.Form>
               
                  
  
                            <C.CategorySelect
                                name="category"
                                style={{ width: '100px' }}
                                onChange={onInput}
                            >
                                <option value=''>선택</option>
                                <option value="common"> 공통</option>
                                <option value="policy">이용정책</option>
                                <option value="buying">구매</option>
                                <option value="selling"> 판매</option>
                            </C.CategorySelect>
                         
                           
                       
                            < C.TitleInput style
                                type="text"
                                name="title"
                                placeholder="제목"
                               
                                onChange={onInput}
                                value={title}
                            />
                            {categoryValidateCheck ? <C.Validation>'카테고리를 선택해주세요'</C.Validation>:''}
                            {titleValidateCheck ? <C.Validation>'제목을 입력 해주세요'</C.Validation> : ''} 
       
                    {/*Toast------------ */}
                  
                            <Editor
                                ref={editorRef}
                                placeholder="내용을 입력해주세요."
                                previewStyle="vertical" // 미리보기 스타일 지정
                                height="500px" // 에디터 창 높이
                                initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
                                initialValue=''
                                toolbarItems={[
                                    // 툴바 옵션 설정
                                    ['heading', 'bold', 'italic', 'strike'],
                                    ['hr', 'quote'],
                                    ['ul', 'ol', 'task', 'indent', 'outdent'],
                                    ['table', 'image', 'link'],
                                    ['code', 'codeblock'],
                                ]}
                                plugins={[colorSyntax]}
                                hooks={{
                                    //사진 등록 버튼 눌렀을 때.
                                    addImageBlobHook: onUploadImage,
                                }} //
                                onChange={onChange}
                            ></Editor>
                            {contentValidateCheck ?<C.Validation>내용을 입력해주세요</C.Validation>  : '' }
                                     
           
            </C.Form>
            <C.ButtonWrapper>
              
                    <C.Button onClick={onCsFaqWriteFormSubmit}>등록</C.Button>
                    <C.Button onClick={onReset}>취소</C.Button>
               
            </C.ButtonWrapper>
        </>
    );
};

export default CsFaqWriteForm;
