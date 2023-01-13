import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const CsNoticeUpdateForm = () => {
    const [list, setList] = useState([]);

    const [data, setData] = useState([]);
    const { seq } = useParams();

    const htmlString = useState('');
    const[file , setFile] =useState([])
    const [img1, setImg1] = useState();

    const [form, setForm] = useState({
        category: '',
        title: '',
        content: '',
        filename:''
    });
    const { category, title, content,filename } = form;
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
        axios
            .put('http://localhost:8080/cs/update', formData, {
                params: {
                    seq: seq, // seq 필수로 들어가야 함 .그래야 insert가 아닌 update가  (seq가 pk)
                    category: category,
                    title: title,
                    
                    content: editorRef.current?.getInstance().getHTML(),
                    filename :filename
                },
            })
            .then(() => {
                alert(' 수정 등록');
                navigate('/cs/CsFaq');
            })
            .catch(error => console.log(error));
    };
    const onReset = e => {
        e.preventDefault();
        // 리셋 시 변경 전 값 가져오기 위해 다시 한번 가져오기  -
        axios
            .get(`http://localhost:8080/cs/getNoticeInt?seq=${seq}`)

            .then(res => {
                setForm(res.data);
            })
            .catch(error => console.log(error));
    };
    const onList = e => {
        navigate('/cs/CsFaq');
    };

    
    return (
        <>
        anjdu
        {form.category}
       
        </>
        
    );
};

export default CsNoticeUpdateForm;

