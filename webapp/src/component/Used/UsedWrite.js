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
    const [subImg,setSubImg] = useState([])

    const imgRef = useRef()


    const onSubImg = (name) => {
        imgRef.current.click()
    }

    const onImg = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        setSubImg({...subImg, 'src' :file})
        console.log(subImg)
    }

    return (
        <>
            <S.WriteBody>
                <S.ImgBody>
                    <S.MainImg/>

                    <S.SubImgBody>
                        <S.SubImg name='subImg1' onClick={onSubImg}/>
                        <S.SubImg name='subImg2' onClick={onSubImg}/>
                        <S.SubImg name='subImg3' onClick={onSubImg}/>
                        <input type='file' style={{display: 'none'}} onChange={ e => onImg(e.target.files[0]) } ref={imgRef}/>
                    </S.SubImgBody>
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