import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './styleWrite';
import tagData from './TagItem';

const UsedWrite = () => {

    const[form,setForm] = useState({
        title : '',
        productName : '',
        kind : '',
        size : '',
        price : '',
        contents : '',
        hashTag : []
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
        }

        if(sw == 1) {
            axios.post('http://localhost:8080/used/writeItem',null,({params:{
               ...form,
                hashTag : encodeURI(form.hashTag)
            }}))
                 .then(() => {
                    alert('글작성 완료')
                 })
                 .catch(error => console.log(error))
        }

        console.log(form)
    }

    // ---------------
    const [subImg,setSubImg] = useState([]);

    const imgRef = useRef();

    const[file,setFile]= useState([]);

    const onSubImg = () => {
        imgRef.current.click();
    }
    const[forRendering,setForRendering]=useState('');
    const[random,setRandom]=useState();
    const onImgRead = (e) => {

        
        // var temp1=reader.readAsDataURL(e.target.files[0]);
        // console.log(reader.result);
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
         //console.log(reader.result);
       console.log(subImg);
       setRandom(Math.random);
       setForRendering(`${random}`); 
       console.log(random);
    
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


    return (
        <>
            <S.WriteBody>
               
                <S.ImgBody>
                    {/* 이미지 소스 이용방법 2가지 사용해봄 */}
                    <S.MainImgP sizing={false}>
                        <S.MainImg name='mainImg' sizing={subImg[0]?true:false} src={subImg[0]?subImg[0].url:`${process.env.PUBLIC_URL}/image/used/plusIcon.png`} onClick={onSubImg} alt={subImg[0]?subImg[0].url:"nothing"}></S.MainImg>
                        <S.DeleteImg isDisplay={subImg[0]?true:false} src='/image/used/deleteIcon.png'></S.DeleteImg>
                    </S.MainImgP>
                    <S.SubImgBody >
                        <S.SubImgP sizing={false}>
                            <S.SubImg sizing={subImg[1]?true:false} name='subImg1' src={subImg[1]?subImg[1].url:'/image/used/plusIcon.png'} onClick={onSubImg}/>
                            <S.DeleteImg></S.DeleteImg>
                        </S.SubImgP>
                        <S.SubImgP sizing={false}>
                            <S.SubImg sizing={subImg[2]?true:false} name='subImg2' src={subImg[2]?subImg[2].url:'/image/used/plusIcon.png'} onClick={onSubImg}/>
                            <S.DeleteImg></S.DeleteImg>
                        </S.SubImgP>
                        <S.SubImgP sizing={false}>
                            <S.SubImg sizing={subImg[3]?true:false} name='subImg3' src={subImg[3]?subImg[3].url:'/image/used/plusIcon.png'} onClick={onSubImg}/>
                            <S.DeleteImg></S.DeleteImg>
                        </S.SubImgP>
                    </S.SubImgBody>
                    <input type='file' name="img" style={{display: 'none'}} accept="image/*" onChange={ e=>onImgRead(e) } ref={imgRef} multiple></input>

                </S.ImgBody>
            
                
                <S.Imformation>
                    <S.Necessary>* 필수 입력</S.Necessary>
                    <S.Subject>* 제목</S.Subject>
                    <S.Title type='text' name= 'title' onChange={ onInput }/>


                    <S.Subject>* 상품 이름</S.Subject>
                    <S.SubTitle type='text' name= 'productName' onChange={ onInput }/>


                    <S.Necessary>* 필수 입력</S.Necessary>
                    <S.Subject>* 상품 정보</S.Subject>
                    <S.ItemKindPriceDiv>
                        <S.ItemKind name= 'kind' onChange={ onInput }>
                            <S.ItemKindOption>상품 종류</S.ItemKindOption>
                            {
                                tagData.map(item => <S.ItemKindOption key={item.id}>{item.title}</S.ItemKindOption>)
                            }
                        </S.ItemKind>
                        <div><S.ItemSizeSpan>Size :</S.ItemSizeSpan><S.ItemSize type='text' name= 'size' onChange={ onInput } /></div>
                    </S.ItemKindPriceDiv>


                    <S.Necessary>* 필수 입력</S.Necessary>
                    <S.Subject >* 가격</S.Subject>
                    <S.PriceDiv><S.ItemPrice type='number' name= 'price' onChange={ onInput }/><S.ItemPriceSpan>원</S.ItemPriceSpan></S.PriceDiv>

                    <S.Subject>* 상품 설명</S.Subject>
                    <S.ItemContent name= 'contents' onChange={ onInput }/>


                    <S.Subject>* Hash Tag </S.Subject>

                    <S.HashTag>
                        {
                            (form.hashTag).map((item,index) =>
                            <S.HashTagDiv key={index}>
                                <S.HasgTagSpan>{item}</S.HasgTagSpan>
                                <S.HasgTagX name={index} onClick={e => onHashX(e.currentTarget.getAttribute("name"))}>X</S.HasgTagX>
                            </S.HashTagDiv>
                            
                            )
                        }
                    </S.HashTag>

                    <S.HashTagWriteDiv>
                        <S.HashTagWrite value={hashTag2 || ''} onChange={e => setHashTag2(e.target.value)} />
                        <S.HashTagWriteBtn onClick={ onHash} />
                    </S.HashTagWriteDiv>
                    
                    <S.WriteBtn onClick={onWrite}>작성 완료</S.WriteBtn>
                </S.Imformation>
            </S.WriteBody>
        </>
    );
};

export default UsedWrite;