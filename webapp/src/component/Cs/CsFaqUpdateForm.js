import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';

import { useNavigate, useParams } from 'react-router';

import Header from '../Header/Header';
import CsNav from './Csnav/CsNav';
import { useRef } from 'react';

import { Editor, Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import * as C from './CsFaqStyle';
import jwt_decode from 'jwt-decode';


// 리액트가 새 컴파일/ 랜더링 되어야지 수정 전 내용이 뜸  - 즉 리액트가 새로고침이 안되면 내용이 수정페이지에 안들어옴 (제목이랑 카테고리는들어옴.)
const CsFaqUpdateForm = () => {
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
    const [list, setList] = useState([]);

    const [data, setData] = useState([]);
    const { seq } = useParams();

    const htmlString = useState('');
    const[file , setFile] =useState([])
    const [img1, setImg1] = useState();
    const [fileName,setFileName]=useState([]) 
    const [form, setForm] = useState({
        id : '',
        category: '',
        title: '',
        content: '',
        filename:'',
   
    });
    const { id,category, title, content,filename } = form;
    const editorRef = useRef();
    //유효성
    const [categoryValidateCheck,setCategoryValidateCheck] =useState(false)
    const [titleValidateCheck,setTitleValidateCheck]=useState(false)
    const[contentValidateCheck ,setContentValidateCheck]=useState(false)
    useEffect(() => {
        
        axios
            .get(`http://localhost:8080/csfaq/getBoard?seq=${seq}`) //

            .then(res => {
              
            setForm(res.data)
          }
          
           
            )        
        .catch((error) => console.log(error));

    },[])

    useEffect(() => {
        
        editorRef.current?.getInstance().setHTML((content))
    }, [form.filename]) 

    const onInput = e => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const navigate = useNavigate();
    const onUploadImage = async (img, callback) => {
        const url =  window.URL.createObjectURL(img)
        console.log(img);
    
        const split = url.split('/');
        console.log(split)
      
        setImg1(split[3])
     
       alert(url)
        file.push(img);
      
        callback(url); //callback 에  blob 를  넣으면 글 쓰는 페이지에 사진이 안뜸
       
    };
    useEffect(() => {   // 값 입력시 유효성 해제 
        setCategoryValidateCheck(false)
        setTitleValidateCheck(false)
        setContentValidateCheck(false)},[title,content,category])

    const onUpdate = e => {
   
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
        .put(
            'http://localhost:8080/csfaq/update', formData, {
                params: {
                    seq:seq,
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
            alert(' 자주 묻는 질문 글 수정 등록');
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
        e.preventDefault();
        // 리셋 시 변경 전 값 가져오기 위해 다시 한번 가져오기  -
        axios
            .get(`http://localhost:8080/csfaq/getBoard?seq=${seq}`)

            .then(res => {
                setForm(res.data);
            })
            .catch(error => console.log(error));
    };
    const onList = e => {
        navigate('/cs/csFaq');
    };
    return (
        <>
            <C.Form>
                
                                <C.CategorySelect
                                    name="category"
                                    style={{ width: '100px' }}
                                    onChange={onInput}
                                    value={form.category}
                                >
                                    <option value=''>선택</option>
                                    <option value="common"> 공통</option>
                                    <option value="policy">이용정책</option>
                                    <option value="buying">구매</option>
                                    <option value="selling">판매</option>
                                </C.CategorySelect>
                                
                            
                                <C.TitleInput
                                    type="text"
                                    name="title"
                                    placeholder="제목"
                                    style={{ width: '250px' }}
                                    onChange={onInput}
                                    value={form.title}
                                />
                                 {categoryValidateCheck ? <C.Validation>'카테고리를 선택해주세요'</C.Validation>:''}
                                 {titleValidateCheck ? <C.Validation>'제목을 입력 해주세요'</C.Validation> : ''} 
                            
                        
                                <Editor
                                    ref={editorRef}
                                    previewStyle="vertical" // 미리보기 스타일 지정
                                    height="500px" // 에디터 창 높이
                                    initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
                                  //  initialValue={(form.content) }   
                                    toolbarItems={[
                                        // 툴바 옵션 설정
                                        ['heading', 'bold', 'italic', 'strike'],
                                        ['hr', 'quote'],
                                        [
                                            'ul',
                                            'ol',
                                            'indent',
                                            'outdent', 
                                        ],
                                        ['table', 'image', 'link'],
                                        ['code', 'codeblock'],
                                    ]}
                                    plugins={[colorSyntax]}
                                    hooks={{
                                        //사진 등록 버튼 눌렀을 때.
                                        addImageBlobHook: onUploadImage,
                                    }} //
                                ></Editor>
                                
                                {/* <textarea name ='content' placeholder='내용' style={{width :'350px' , height:'350px' }} onChange={onInput} value={content}/> */}
                            
            </C.Form>
           
         
               
             <C.ButtonWrapper>
                <C.Button onClick={onList}>목록</C.Button>  
                <C.Button onClick={onUpdate}>수정</C.Button>
                <C.Button onClick={onReset}>취소</C.Button>
         
             </C.ButtonWrapper>
                  
                  
        </>
    );
};

export default CsFaqUpdateForm;
