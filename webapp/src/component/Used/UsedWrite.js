import { integerPropType } from '@mui/utils';
import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styleWrite';
import tagData from './TagItem';

const UsedWrite = () => {

    const navigate = useNavigate();
    const[form,setForm] = useState({
        id:'홍헌',
        title : '',
        productName : '',
        kind : '',
        size : '',
        price : '',
        contents : '',
        hashTag : []
        //지훈씨한테 들은 내용(홍헌)
        //배열은 데이터 보낼 때 배열로 안보내고 리액트 내에서 Stringify하면 문자열로 보낼 수 있다.
        //데이터를 받아오고 나서는 parse로 데이터를 풀어주면 된다.
    })

    const [hashTag2,setHashTag2] = useState()

    const [count,setCount] = useState(0)

    const {title , productName , kind , size , price , contents , hashTag} = form
    
    const onInput = (e) => {
        const {name,value} = e.target

        setForm({
            ...form,
            [name] : value
        })

    }

    const onHash = () => {

        if(count === 5){
            alert('Hash Tag는 5개까지만 추가해주세요')
        }else if(hashTag2.includes('#')){
            alert('#기호가 포함되어 있습니다')
        }else{
            setCount(count+1)

            setForm({
                ...form,
                hashTag: [...hashTag,hashTag2]})
        }      
        
        setHashTag2('')

    }

    const onHashX = (name) => {
        
        form.hashTag.splice(name,1)

         setForm({
            ...form
        })

        setCount(count-1)
        console.log(form)
    }



    const onWrite = (e) =>{
        e.preventDefault()
        
        var sw = 1
       
        if(!title){
            sw=0
        }else if(kind === '상품 종류' || !kind){
            sw=0
        }else if(!price){
            sw=0
        }else if(!file[0]){
            sw=0
        }
        
        if(sw===0){
            alert("필수 항목을 입력해주세요")
        }

        var formData=new FormData();
        file.map(files=>formData.append('img',files));

        if(sw === 1) {

           // axios.post('http://localhost:8080/used/writeItem',null,({params:{
            axios.post('http://localhost:8080/used/upload',formData,({params:{
               ...form,
                hashTag : encodeURI(form.hashTag)
            }}))
                 .then(() => {
                    navigate("/used/usedMain");
                 })
                 .catch(error => console.log(error))
        }
       
        
    }

    // ---------------
    const [subImg,setSubImg] = useState([]);

    const imgRef = useRef();

    const[file,setFile]= useState([]);

    const onSubImg = () => {
        imgRef.current.click();
    }
    //const[forRendering,setForRendering]=useState('');
    const[random,setRandom]=useState();

    const onImgRead = (e) => {
       

        //유효성 검사
        //https://velog.io/@fxoco/image-input-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC
        let sw=0;
        var fileForm = /(.*?)\.(jpg|jpeg|png|gif)$/;
        Array.from(e.target.files).map(item=>item.name.match(fileForm)||++sw&&alert("'.jpeg, .jpg, .png, .gif ' 형식만 사용해주세요"));

        if(sw===0){
        //이미지 세팅 함수 호출
        addFile(e);
        }
        //push로 넣어줬기 때문에 별도의 렌더링이 되지 않는다
        //따라서 onImgRead함수가 종료될 때 강제로 렌더링이 될 수 있도록 한다.
        //굳이 Math.random을 사용하여 렌더링을 하는 이유는 렌더링 값이 기존 값과 같다면 렌더링이 되지 않기 때문이다. 
       setRandom(Math.random);
       //setForRendering(`${random}`); 
       
      
        //동일한 파일을 넣어주는 경우에 발생하는 버그 방지
       e.target.value='';
    }
    
    const addFile=(e)=>{
        //Array.from 사용 이유. 
        //e.target.files는 배열의 형태처럼 보이긴 하나 실제 배열이 아니라서 배열형태로 만들어서 map을 돌리는 것이다.
        //https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch2.md#array-likes
        Array.from(e.target.files).map((items,index)=>{
            var urlTemp=window.URL.createObjectURL(items);
           //var urlTemp=reader.readAsDataURL(items);
           //var url=urlTemp.slice(5);
           subImg.push({url:urlTemp});
           
           //setSubImg(urlTemp);
            file.push(items);
         })
    }


    const deleteImg=(e)=>{
        //console.log(e.target.getAttribute("id"));
        var id=e.target.getAttribute("id");
        
        //https://forum.freecodecamp.org/t/how-to-filter-using-array-index-in-react/403524
        //index값은 숫자인데 그냥 id값을 주면 id를 받아 문자열로 인식을 하기때문에 parseInt를 이용해 숫자로 바꿔준다. 
        var imgTemp= subImg.filter((item,index)=>index!==parseInt(id));
        var fileTemp = file.filter((item,index)=>index!==parseInt(id));
        setSubImg([...imgTemp]);
        setFile([...fileTemp]);
        //console.log(file);
       
    }

    // const imgReading=(file)=>{
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);

    // //https://velog.io/@ckm960411/FileReader-%EB%A1%9C-%EC%97%AC%EB%9F%AC-%EC%9D%B4%EB%AF%B8%EC%A7%80-%ED%8C%8C%EC%9D%BC-%EB%8F%99%EC%8B%9C%EC%97%90-%EC%B2%A8%EB%B6%80%ED%95%98%EA%B8%B0-NextReact-TypeScript
    // //https://www.inflearn.com/questions/36091/foreach-call-%EC%A7%88%EB%AC%B8%EB%93%9C%EB%A6%BD%EB%8B%88%EB%8B%A4
   
    //     reader.onload=()=>{
    //         setSubImg(reader.result);
    //     }

    // }

//읽어볼 자료.https://velog.io/@eeeve/React-07
    return (
        <>
            <S.WriteBody>
               
                <S.ImgBody>
                    {/* 이미지 소스 이용방법 2가지 사용해봄 */}
                    <S.MainImgP setPosition={subImg[0]?true:false}>
                        <S.MainImg name='mainImg' sizing={subImg[0]?true:false} src={subImg[0]?subImg[0].url:`${process.env.PUBLIC_URL}/image/used/plusIcon.png`} onClick={onSubImg} alt={subImg[0]?subImg[0].url:"nothing"}></S.MainImg>
                        <S.DeleteMainImg setPosition={subImg[0]?true:false} id="0" onClick={e=>deleteImg(e)}></S.DeleteMainImg>
                    </S.MainImgP>
                    <S.SubImgBody >
                        <S.SubImgP setPosition={subImg[1]?true:false}>
                            <S.SubImg sizing={subImg[1]?true:false} name='subImg1' src={subImg[1]?subImg[1].url:'/image/used/plusIcon.png'} onClick={onSubImg}/>
                            <S.DeleteImg setPosition={subImg[1]?true:false} id="1" onClick={e=>deleteImg(e)}></S.DeleteImg>
                        </S.SubImgP>
                        <S.SubImgP setPosition={subImg[2]?true:false}>
                            <S.SubImg sizing={subImg[2]?true:false} name='subImg2' src={subImg[2]?subImg[2].url:'/image/used/plusIcon.png'} onClick={onSubImg}/>
                            <S.DeleteImg setPosition={subImg[2]?true:false} id="2"  onClick={e=>deleteImg(e)}></S.DeleteImg>
                        </S.SubImgP>
                        <S.SubImgP setPosition={subImg[3]?true:false}>
                            <S.SubImg sizing={subImg[3]?true:false} name='subImg3' src={subImg[3]?subImg[3].url:'/image/used/plusIcon.png'} onClick={onSubImg}/>
                            <S.DeleteImg setPosition={subImg[3]?true:false} id="3"  onClick={e=>deleteImg(e)}></S.DeleteImg>
                        </S.SubImgP>
                    </S.SubImgBody>
                    
                    {/* https://blog.munilive.com/posts/input-file-type-accept-attribute.html
                    파일 형식 제한은 accept이용.
                    다만 업로드 하는 사람이 형식을 모든 파일로 받으면 다른 파일로 업로드가 가능해진다.
                    유효성 검사 필요 */}
                    <input type='file' name="img" style={{display: 'none'}} accept=".jpg,.png, .jpeg, .gif" onChange={ e=>onImgRead(e) } ref={imgRef} multiple></input>
                    *이미지는 1대 1비율이 아니면 잘려서 보일 수 있습니다.<br></br>
                    *이미지 파일만 업로드 가능합니다.
                </S.ImgBody>
            
                
                <S.Information>
                    <S.Necessary>* 필수 입력</S.Necessary>
                    <S.Subject>제목</S.Subject>
                    <S.Title type='text' name= 'title' onChange={ onInput }/>


                    <S.Subject> 상품 이름</S.Subject>
                    <S.SubTitle type='text' name= 'productName' onChange={ onInput }/>


                    <S.Necessary>* 필수</S.Necessary>
                    <S.Subject> 상품 정보</S.Subject>
                    <S.ItemKindPriceDiv>
                        <S.ItemKind name= 'kind' onChange={ onInput }>
                            <S.ItemKindOption>상품 종류</S.ItemKindOption>
                            {
                                tagData.map(item => <S.ItemKindOption key={item.id}>{item.title}</S.ItemKindOption>)
                            }
                        </S.ItemKind>
                        <div><S.ItemSizeSpan>Size :</S.ItemSizeSpan><S.ItemSize type='text' name= 'size' onChange={ onInput } /></div>
                    </S.ItemKindPriceDiv>


                    <S.Necessary>* 필수</S.Necessary>
                    <S.Subject > 가격</S.Subject>
                    <S.PriceDiv><S.ItemPrice type='number' name= 'price' onChange={ onInput }/><S.ItemPriceSpan>원</S.ItemPriceSpan></S.PriceDiv>

                    <S.Subject> 제품 설명</S.Subject>
                    <S.ItemContent name= 'contents' onChange={ onInput }/>


                    <S.Subject> Hash Tag </S.Subject>

                    <S.HashTag>
                        {
                            (form.hashTag).map((item,index) =>
                            <S.HashTagDiv key={index}>
                                <S.HasgTagSpan>{item}</S.HasgTagSpan>
                                <S.HasgTagX name={index} onClick={e => onHashX(e.currentTarget.getAttribute("name"))}>x</S.HasgTagX>
                            </S.HashTagDiv>
                            
                            )
                        }
                    </S.HashTag>

                    <S.HashTagWriteDiv>
                        <S.HashTagWrite value={hashTag2 || ''} onChange={e => setHashTag2(e.target.value)} />
                        <S.HashTagWriteBtn onClick={ onHash} />
                    </S.HashTagWriteDiv>
                    
                    <S.WriteBtn onClick={onWrite}>작성 완료</S.WriteBtn>
                </S.Information>
            </S.WriteBody>
        </>
    );
};

export default UsedWrite;