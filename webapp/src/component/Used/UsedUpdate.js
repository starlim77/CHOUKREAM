import { integerPropType } from '@mui/utils';
import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as S from './styleWrite';
import * as U from './UsedItemStyle';
import tagData from './TagItem';

const UsedUpdate = () => {
        const navigate = useNavigate();
        //참고자료 https://curryyou.tistory.com/477
        // 1. useLocation 훅 취득
        //UsedItem내에 있는 UpdateBtnModal에서 navigate로 보낸 데이터들 받는 작업
        const location = useLocation();

        const[form,setForm] = useState({
            id:'홍헌',
            title : '',
            imgName:'',
            productName : '',
            kind : '',
            size : '',
            price : '',
            contents : '',
            hashTag : [],
            sellingState:true
            //지훈씨한테 들은 내용(홍헌)
            //배열은 데이터 보낼 때 배열로 안보내고 리액트 내에서 Stringify하면 문자열로 보낼 수 있다.
            //데이터를 받아오고 나서는 parse로 데이터를 풀어주면 된다.
        })
        const {title , imgName, productName , kind , size , price , contents , hashTag,sellingState} = form
        const [subImg,setSubImg] = useState([]);
         // 2. location.state 에서 파라미터 취득
         const seq = location.state.seq;
         const isWriter = location.state.isWriter;
         const imgNameSend=location.state.imgNameSend;
        
       
        useEffect(()=>{
            axios.get("http://localhost:8080/used/viewItem",{params:{seq:seq}})
                .then(res=>setForm(res.data))
                .then(res=>{var img = (imgNameSend).split(',');
                        var img2=img.map(item=>"/storage/"+item);
                        setSubImg(img2);} )
                .catch(err=>console.log(err))
        },[])
        
        const [hashTag2,setHashTag2] = useState()
    
        const [count,setCount] = useState(0)
    
        
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
    
            console.log("해쉬부르기"+form)
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
        
            if(sw===0){
                alert("필수 항목을 입력해주세요")
            }
            
            if(sw == 1) {
                axios.put('http://localhost:8080/used/updateItem','',({params:{
                   ...form,
                    hashTag : encodeURI(form.hashTag)
                }}))
                     .then(() => {
                        alert('글작성 완료')
                     })
                     .then(navigate("/used/usedMain"))
                     .catch(error => console.log(error))
            }
    
            window.location.reload();
            
        }
  
        useEffect(()=>{
            console.log("해쉬태그"+hashTag);
            if(!hashTag){
                var decoding= decodeURI(hashTag).split(',');
                console.log(decoding);
                setForm({
                    ...form,
                    hashTag:decoding});
            }
            
            //form이 바뀌는 걸로 설정하면 무한 루프도니까 한 번만 돌게 subImg사용
        },[subImg])
    
        return (
            <>
                <S.WriteBody>
                    {/* <S.ImgBody>
                        <S.MainImgP setPosition={true}>
                            <S.MainImg name='mainImg' sizing={true} src={subImg[0]} alt={subImg[0]}></S.MainImg>
                        </S.MainImgP>

                        <S.SubImgBody spacing={true} >
                                {
                                    subImg.map((items,index)=>index===0?'':
                                        <S.SubImgP key={index} setPosition={true}>
                                            <S.SubImg sizing={true} name='subImg'  src={subImg[index]} alt={subImg[index]} />
                                        </S.SubImgP>
                                    )
                                    
                                }
                        </S.SubImgBody>
                    </S.ImgBody> */}
                  
                <U.ImgBody>
                    <U.MainImg src={subImg[0]}></U.MainImg>
                    {subImg[1]&&<U.SmallImg src={subImg[1]}></U.SmallImg>}
                    {subImg[2]&&<U.SmallImg src={subImg[2]}></U.SmallImg>}
                    {subImg[3]&&<U.SmallImg src={subImg[3]}></U.SmallImg>}
                </U.ImgBody>&emsp;
          
                    
                    <S.Information>
                        <S.Necessary>* 필수 입력</S.Necessary>
                        <S.Subject>* 제목</S.Subject>
                        <S.Title type='text' name= 'title' value={title} onChange={ onInput }></S.Title>
    
    
                        <S.Subject> 상품 이름</S.Subject>
                        <S.SubTitle type='text' name= 'productName' value={productName} onChange={ onInput }/>
    
    
                        <S.Necessary>* 필수</S.Necessary>
                        <S.Subject> 상품 정보</S.Subject>
                        <S.ItemKindPriceDiv>
                            <S.ItemKind name= 'kind' onChange={ onInput }>
                                <S.ItemKindOption>상품 종류</S.ItemKindOption>
                                {
                                    tagData.map(item => <S.ItemKindOption key={item.id}>{item.title}</S.ItemKindOption>)
                                }
                            </S.ItemKind>
                            <div><S.ItemSizeSpan>Size :</S.ItemSizeSpan><S.ItemSize type='text' name= 'size' value={size} onChange={ onInput } /></div>
                        </S.ItemKindPriceDiv>
    
    
                        <S.Necessary>* 필수</S.Necessary>
                        <S.Subject > 가격</S.Subject>
                        <S.PriceDiv><S.ItemPrice type='number' name= 'price' value={price} onChange={ onInput }/><S.ItemPriceSpan>원</S.ItemPriceSpan></S.PriceDiv>
    
                        <S.Subject> 제품 설명</S.Subject>
                        <S.ItemContent name= 'contents' value={contents} onChange={ onInput }/>
    
    
                        <S.Subject> Hash Tag </S.Subject>
    
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
                    </S.Information>
                </S.WriteBody>
            </>
        );
};

export default UsedUpdate;