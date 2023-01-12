import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CsNoticeWrite = () => {
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

    const onUploadImage = async (img, callback) => {
        //글 등록 이전 Toast에디터 작성 페이지에 사진 뜨게 하기....
        
        const url =  window.URL.createObjectURL(img)
        console.log(img);

        const split = url.split('/');
        console.log(split)
        setImg1(split[3])
        file.push(img); 
        callback(url)
    }
    const onCsFaqWriteFormSubmit = () => {
        alert(img1 +' 이름 ->'+fileName)
        console.log(file)
        var formData = new FormData();
        file.map(files=>formData.append('img',files));
        for (let key of formData.keys()) {
            console.log(key, ":", formData.get(key));
        }axios
        .post(
            'http://localhost:8080/csnotice/write', formData, {
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
    }
        const onReset = e => {
            e.preventDefault(); //일단 submit막기
    
            setForm({
                title: '',
                content: '',
                category: 'etc',
            });
            console.log(error => console.log(error));
        };
    
    return (
        <>
        anjsi??
         <div> 
            <select name="category"  style={{ width: '100px' }} onChange={onInput}>
                <option>선택</option>
                <option value="anouncement"> 공지</option>
                <option value="event">이벤트발표</option>
                <option value="etc">기타</option>
                               
            </select>    

            <input
                                type="text"
                                name="title"
                                placeholder="제목"
                                style={{ width: '250px' }}
                                onChange={onInput}
                                value={title}
                            />
        </div>   
        <div>
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
        </div>
        <p>
                    <button onClick={onCsFaqWriteFormSubmit}>등록</button>
                    <button onClick={onReset}>취소</button>
                </p>
        </>
    );
};


export default CsNoticeWrite;