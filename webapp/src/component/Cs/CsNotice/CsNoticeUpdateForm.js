import { Editor } from '@toast-ui/react-editor';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as C from './CsNoticeStyle';
import jwt_decode from 'jwt-decode';

const CsNoticeUpdateForm = () => {

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

    const { seq } = useParams();
    const [list, setList] = useState([]);

    const [data, setData] = useState([]);

    const htmlString = useState('');
    const[file , setFile] =useState([])
    const [img1, setImg1] = useState();
    const [fileName,setFileName]=useState([]) 

    const [form, setForm] = useState({
        category: '',
        title: '',
        content: '',
        filename:'',
        createdate : ''
    });
    const { category, title, content,filename,createdate } = form;
    const editorRef = useRef();
    useEffect(() => {
        axios
            .get(`http://localhost:8080/csnotice/getNoticeInt?seq=${seq}`) //

            .then(res => {
               
              
            setForm(res.data)
       //     content = content.replace('<img src="blob:http://localhost:3000/'+filename+'" contenteditable="false">', '<img src="/storage/'+filename+'.png" contenteditable="false">')
           // editorRef.current?.getInstance().setHTML(content)
          
          }
          
           
            )        
        .catch((error) => console.log(error));

    },[])

    useEffect(() => {
        
        editorRef.current?.getInstance().setHTML((content))
    }, [form]) 

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
       
        callback(url); 
        
    };
    
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
            'http://localhost:8080/csnotice/update', formData, {
                params: {
                    seq:seq,
                    category: category,
                    title: title,
                    id : tokenId,
                    filename: img1,
                    content: editorRef.current?.getInstance().getHTML(),
                    createdate :createdate 
                },
            }
        )
        .then(() => {
            // callback(data.imgUrl);

            console.log(content + '성공');
            alert('  공지 수정  등록');
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
    const onList = e => {
        navigate('/cs/CsNotice');
    };

    const onReset = e => {
        e.preventDefault();
        // 리셋 시 변경 전 값 가져오기 위해 다시 한번 가져오기  -
        axios
            .get(`http://localhost:8080/csnotice/getNoticeInt?seq=${seq}`)

            .then(res => {
                setForm(res.data);
            })
            .catch(error => console.log(error));
    };
    const[editorData ,setEditorData] =useState('')
    const [categoryValidateCheck,setCategoryValidateCheck] =useState(false)
    const [titleValidateCheck,setTitleValidateCheck]=useState(false)
    const[contentValidateCheck ,setContentValidateCheck]=useState(false)
    useEffect(() => {   
        setCategoryValidateCheck(false)
        setTitleValidateCheck(false)
        setContentValidateCheck(false)},[title,editorData,category])
     const onChange = () => {
        setEditorData(editorRef.current.getInstance().getHTML()) 
          
          };
    return (
        <>
       <C.Form>
  
                            <C.CategorySelect
                                    name="category"
                                    onChange={onInput}
                                    value={form.category}
                                >
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
                                    value={form.title}
                                />
                                 {categoryValidateCheck ? <C.Validation>'카테고리를 선택해주세요'</C.Validation>:''}
                                  {titleValidateCheck ? <C.Validation>'제목을 입력 해주세요'</C.Validation> : ''} 
                      
                                {/* {content} */}
                                <Editor
                                    ref={editorRef}
                                    previewStyle="vertical" // 미리보기 스타일 지정
                                    height="500px" // 에디터 창 높이
                                    initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
                                    onChange={onChange}
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
                                    plugins={[colorSyntax]}//color pulgins
                                    hooks={{
                                        //사진 등록 버튼 눌렀을 때.
                                        addImageBlobHook: onUploadImage,
                                    }} //
                                ></Editor>
                                  {contentValidateCheck ?<C.Validation>내용을 입력해주세요</C.Validation>  : '' }
                              
            </C.Form>
           
            <C.ButtonWrapper>
                <C.Button onClick={onList}>목록</C.Button>  
                <C.Button onClick={onUpdate}>수정</C.Button>
                <C.Button onClick={onReset}>취소</C.Button>
         
             </C.ButtonWrapper>
                  
        </>
       
       
        
    );
};

export default CsNoticeUpdateForm;

