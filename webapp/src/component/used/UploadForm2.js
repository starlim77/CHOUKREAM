import axios from 'axios';
import React, { useRef, useState } from 'react';

const UploadForm2 = () => {
    const[form,setForm]=useState({
        id:"gdhgsj",
        title:"onsale",
        productName:"airpodmax",
        size:"onesize",
        price:"100000",
        productDescription:"details상세설명"
    });

    const imgRef=useRef();
    const [showImgSrc,setShowImgSrc]=useState('');
    const[uploadImgSrc, setUploadImgSrc]=useState('');
    //const[file, setFile]=useState();
     const[file, setFile]=useState([]);
    const onCamera=(e)=>{
        imgRef.current.click();
    }
    const readUrl=(e)=>{
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        console.log(e.target.files);
        Array.from(e.target.files).map(items=>file.push(items));
        //file.push(e.target.files);
        //setFile(e.target.files);
        //setFile([...file, e.target.files]);
        //setfile로 안되는 이유
        console.log(file);


        reader.onload=()=>{

       //console.log(e.target.files);
        
           
             setShowImgSrc(reader.result);
           
            // console.log(file);
        }
    }

    const onUploadSubmit=(e)=>{
        console.log(file);
        var formData=new FormData();
        file.map(files=>formData.append('img',files));
        //formData.append('img',file);
       
        console.log(formData);
        axios.post('http://localhost:8080/used/upload',formData,
        {headers:{'Content-Type':'multipart/form-data'},params:form})
        .then(res=>console.log(res))
        .catch(error=>console.log(error));
    }
    return (
        <div>
            <img src={ showImgSrc} width='300' height='300'></img>&emsp;
            <img src='../image/icon.png' width='50' height='50' onClick={onCamera} alt='카메라'></img>
            <input type='file' name='img' accept="image/*" ref={imgRef} onChange={e=>readUrl(e)} multiple></input>
            <br></br>
            <button onClick={onUploadSubmit}>이미지 등록</button>
            <br/>
        </div>
    );
};

export default UploadForm2;
