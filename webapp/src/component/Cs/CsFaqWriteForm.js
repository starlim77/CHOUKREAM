import axios from 'axios';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import CsNav from './Csnav/CsNav';
import { useRef } from 'react';

import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { UploadFile } from '@mui/icons-material';

/*
npm install @toast-ui/react-editor
버전 호환?/ 에러? 때문에 설치 할 때 --force 붙이기 .
*/

const CsFaqWriteForm = props => {

    const [showImgSrc,setShowImgSrc] = useState([]);
    const [form, setForm] = useState({
        category: '',
        title: '',
        content: '',
        filename: "",
        filepath: ""
    });
    const editorRef = useRef();
    const { category, title, content , filename, filepath } = form;
    //let [file, setFile] = useState([]);

    const navigate = useNavigate('');

    const onInput = e => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
        console.log(content);
    };

    // var formData = new FormData();
     const [img1, setImg1] = useState();
   const [url, setUrl] = useState([]);
    // const onUploadImage =() =>{}
    const [fileName,setFileName]=useState([]) 
    const[file , setFile] =useState([])

   // const onUploadImage = async (img, callback) => {
    //    const onUploadImage = async (blob, callback) => {    
        //글 등록 이전 Toast에디터 작성 페이지에 사진 뜨게 하기....

      //  formData.append("img", img)
       // const url = window.URL.createObjectURL(blob);
        //window.URL.createObjectURL(blob);
        //setImg1(url)
       // setUrl(window.URL.createObjectURL(blob))
        //callback(url); //callback 에  blob 를  넣으면 글 쓰는 페이지에 사진이 안뜸
       //callback(window.URL.createObjectURL(blob)); //callback 에  blob 를  넣으면 글 쓰는 페이지에 사진이 안뜸 
       
       
       // console.log(split)
        //setFileName(url.split)
        
      // console.log(url.split) //이미지 주소 값만 
   // };

  // const onUploadImage = async (blob,callback) => { //글 등록 이전 Toast에디터 작성 페이지에 사진 뜨게 하기....
  //  var reader = new FileReader(); //생성
  //  const url =window.URL.createObjectURL(blob)
   
  //  callback(url)
  //  const split = url.split('/')
  //  formData.append("url", split)
   
    // const split = url.split('/')
    // setFile(split[3])
    // console.log(fileName)
    // console.log(split[3])
   // reader.onload = () => {
    //            console.log(formData)   //파일확인
    
                //setFile(input.files[0])
      //          Array.from(url.files).map(items=>file.push(items))
      //          console.log(file)
       //     }
       
   
 //   console.log(fileName)
  // };


  const onUploadImage = async (img, callback) => {
    //글 등록 이전 Toast에디터 작성 페이지에 사진 뜨게 하기....
    
    const url =  window.URL.createObjectURL(img)
    console.log(img);


    
    // console.log(url);
    const split = url.split('/');
    console.log(split)
    // console.log(split)
    
    setImg1(split[3])
 //   const imageSrc =split[3]+'.png';



   alert(url)
    file.push(img);
    // formData.append("file", img)
  
   
    	// const ranTxt = Math.random().toString(36).substring(2,10); //랜덤 숫자를 36진수로 문자열 변환 
        // const date = new Date(); 
        // const randomName = ranTxt+'_'+date.getFullYear()+''+date.getMonth()+1+''+date.getDate()+''+date.getHours()+''+date.getMinutes()+''+date.getMinutes()+''+date.getSeconds(); 
        // setFileName(randomName)
       
   
    
    callback(url); //callback 에  blob 를  넣으면 글 쓰는 페이지에 사진이 안뜸
    // return randomName;

    
};

   const onCsFaqWriteFormSubmit = () => {
    alert(img1 +' 이름 ->'+fileName)
    console.log(file)
    var formData = new FormData();
    file.map(files=>formData.append('img',files));
    for (let key of formData.keys()) {
        console.log(key, ":", formData.get(key));
    }
    // console.log( "url = " +url)
    // var formData = new FormData()   //가지고가야할 데이터를 넣기

    // file.map(files=>formData.append('list',files))
    axios
        .post(
            'http://localhost:8080/cs/writeTest', formData, {
                params: {
                    category: category,
                    title: title,
                   // filepath: //img1,
                    filename: img1,
                    content: editorRef.current?.getInstance().getHTML(),
                },
            }
        )
        .then(() => {
            // callback(data.imgUrl);

            console.log(content + '성공');
            alert(' 자주 묻는 질문 글 등록');
        })
        .catch(error => {
            console.log(content);
            // console.log(formData)
            console.log(error + '완전에러');
        });
        // axios
        //     .post(
        //         'http://localhost:8080/cs/write',
        //         null,
        //         /*,formData*/ {
        //             params: {
        //                 category: category,
        //                 title: title,
        //                 filepath: url,
        //                 content: editorRef.current?.getInstance().getHTML(),
        //             },
        //         },
        //     )
        //     .then(() => {
        //         // callback(data.imgUrl);

        //         console.log(content + '성공');
        //         alert(' 자주 묻는 질문 글 등록');
        //     })
        //     .catch(error => {
        //         console.log(content);
        //         // console.log(formData)
        //         console.log(error + '완전에러');
        //     });
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

    // const onUploadImage = (blob, callback) => {
    //     var reader = new FileReader(); //생성
    //     const url = window.URL.createObjectURL(blob);

    //     reader.onload = () => {
    //         console.log(url.files[0])   //파일확인

    //         //setFile(input.files[0])
    //         Array.from(url.files).map(items=>file.push(items))
    //         console.log(file)
    //     }
    // }

    return (
        <>
            <form>
                <table style={{ border: '1px solid black' }}>
                    <tbody>
                    <tr>
                        <td>
                            <select
                                name="category"
                                style={{ width: '100px' }}
                                onChange={onInput}
                            >
                                <option>선택</option>
                                <option value="common"> 공통</option>
                                <option value="policy">정책</option>
                                <option value="buying">구매</option>
                            </select>
                        </td>

                        <td>
                            <input
                                type="text"
                                name="title"
                                placeholder="제목"
                                style={{ width: '250px' }}
                                onChange={onInput}
                                value={title}
                            />
                        </td>
                    </tr>
                    </tbody>
                    {/*Toast------------ */}
                    <tbody>
                    <tr>
                        <td colSpan="2">
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
                                    ['code', 'codeblock'],
                                ]}
                                hooks={{
                                    //사진 등록 버튼 눌렀을 때.
                                    addImageBlobHook: onUploadImage,
                                }} //
                            ></Editor>
                        </td>
                    </tr>
                    </tbody>                    {/* <tr>
                    <td colSpan='2'>
                        <textarea name ='content' placeholder='내용' style={{width :'350px' , height:'350px' }} onChange={onInput} value={content}/>
                    </td>
                </tr> */}
                </table>
            </form>
            <div>
                <p>
                    <button onClick={onCsFaqWriteFormSubmit}>등록</button>
                    <button onClick={onReset}>취소</button>
                </p>
            </div>
        </>
    );
};

export default CsFaqWriteForm;
