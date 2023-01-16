import axios from 'axios';
import { Avatar, Button, Card, CardHeader, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { Container } from '@mui/system';
import React, { useEffect, useRef, useState } from 'react';
import * as S from './style';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import * as M from '../Products/style';

const Mystyle = () => {

    const [form, setForm] = useState({
        id: '',    //멤버id = long type....
        content: '',
        productSeq: '',
        productTitle:'',
        productImg:''
    })
    const {id, content, productSeq, productTitle, productImg} = form  
    const navigate = useNavigate()
    const imgRef = useRef();
    const [file, setFile] = useState([])
    const [showImgSrc,setShowImgSrc] = useState([]);
    const [styleBoardWriteOpen, setStyleBoardWriteOpen] = useState(false);
    const [popUpOpen, setPopUpOpen] = useState(false);

    const [listCount, setListCount] = useState(0);
    
    const [myList, setMyList] = useState([]);   //등록한 게시물 확인

    const [itemLength,setItemLength] = useState(12) // 처음에 가져올 아이템 갯수

    const token = localStorage.getItem('accessToken');
    const [auth, setAuth] = useState('ROLE_GUEST');
    useEffect(() => {
        if (token !== null) {
            const tokenJson = jwt_decode(token);
            setAuth(tokenJson['auth']);
            //localStorage.setItem('userInfo', JSON.stringify(tokenJson));
            settokenId(tokenJson['sub']);
            // setForm({...form, id:tokenId})
        }
    }, [token]);
    const [tokenId, settokenId] = useState('')
    // console.log(auth);
    // console.log(tokenId)


    useEffect( ()=> {

        if(tokenId !== ''){
            // console.log('tokenId ===  ' + typeof(tokenId) )
            // console.log('tokenId =1==  ' + tokenId )
            // console.log('ids == ' + form.id)
            setForm({id:tokenId})

                axios.get(`http://localhost:8080/lookbook/findAllMyList/${tokenId}`)
                    .then( //res => console.log(res.data)
                        res => setMyList(res.data)
                        )
                    .catch(error => console.log(error))

                axios.get(`http://localhost:8080/lookbook/findCountById?id=${tokenId}`)
                    .then(res => setListCount(res.data))
                    .catch(error => console.log(error))
        }   
    }, [tokenId]) 


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    const handleScroll = () => {
        var heightTop = window.scrollY; // 화면의 Y축의 상단값

        const heightBottom = window.scrollY + window.innerHeight; // 화면의 Y축의 하단값
        const innerHeight = window.innerHeight;

        const scrollHeight = document.body.scrollHeight;
        // console.log('scrollHeight 스크롤 전체길이 ' + scrollHeight); // 불변

        if (heightBottom >= scrollHeight - 80) {
            // console.log( '하단높이 '+ heightBottom + ' , ' + (scrollHeight - 100));

            setItemLength(itemLength => itemLength + 8)
        }
    };
    
    const onUploadFile = (e) =>{
        imgRef.current.click()
    }
   

    const onInput = (e) => {
        const { name, value} = e.target
        setForm({
            ...form,
            [name] : value
        })
    }
 
    //이미지 상대경로 저장
    const readURL = (input) => {
        const imageLists = input.target.files;   //한번에 선택한 파일리스트
        let imageUrlLists = [...showImgSrc];

        for (let i = 0; i < imageLists.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i]);
            imageUrlLists.push(currentImageUrl);
        }

       if (imageUrlLists.length > 5) {
            imageUrlLists = imageUrlLists.slice(0, 5);
            alert("사진은 최대 5장만 등록 가능합니다");
            
        } else if (imageUrlLists.length < 6 ){
            setShowImgSrc(imageUrlLists);
            Array.from(input.target.files).map(items => file.push(items));
        }


        console.log(file)

    };

    const onImgRemove = (index) => {
        const img1 = file.filter((item, idx) => idx !== index)
        const imgShow1 = showImgSrc.filter((item, idx)=> idx !== index)

        setFile([...img1])
        setShowImgSrc([...imgShow1])
    }

    const onUpload = () => {
        var formData = new FormData()   //가지고가야할 데이터를 넣기
        file.map(files => formData.append('list',files))

        if(file.length === 0 ){
            alert("사진은 1장 이상 등록되어야 합니다")
            window.location.replace("/lookbook/mystyle") //새로고침
            
        } else if(file.length !== 0){
            console.log('id ===== ' + form.id)

            axios
                .post("http://localhost:8080/lookbook/upload", formData, {params:form})
            
                .then(
                                alert("게시물 등록 완료"),
                                setStyleBoardWriteOpen(false),
                                window.location.replace("/lookbook/mystyle"),  //새로고침
                                console.log(formData)
                )
                .catch( error => console.log(error) )
        }
    }

    const productSearch = (e) => {
        e.preventDefault();
        setPopUpOpen(true);
    }

    const [keyword, setKeyword] = useState('');
    const [productList, setProductList] = useState([{
        seq: "", img: "", price: "", title: "", brand: ""
    }]);
    
    const onSearch = (e) => {
        e.preventDefault();

        keyword.length > 1 ?

        axios.get( `http://localhost:8080/lookbook/search?keyword=${keyword}`)
             .then(res => setProductList(res.data))
             .catch(error => console.log(error))

        : alert('2글자 이상 입력하세요')

       
    }

    const photoshop = (itemImg) => {
        const img = (itemImg.split(','))
        return img[0]
    }

    const productClick = (e, seq, img, title) => {
        
        console.log("선택한 상품seq"+seq)
        setForm({...form, productSeq:seq, productTitle:title, productImg:img})
        console.log("디비로갈 상품seq"+productSeq+ title);
        setPopUpOpen(false)

    }

    const onProductImgRemove = () => {
        setForm({...form, productSeq:'', productTitle:'', productImg:''})
    }



    return (
        <Container fixed>
            <S.MyDiv>
                <div>
                    <img name='myProfile' width='130px' src='../image/myProfile.png' alt='마이프로필' 
                    style={{ borderRadius:"70%" }} />               
                </div>
                <div name='id' value='id'>{tokenId}</div>  
                <S.MyDivText>프로필 정보는 마이페이지에서 수정해주세요.</S.MyDivText>            
            </S.MyDiv>
            <S.MyDiv>
                <ul>
                    <S.MyLi>게시물<span>{listCount}</span></S.MyLi>
                    <S.MyLi>팔로워<span>0</span></S.MyLi>
                    <S.MyLi>팔로잉<span>0</span></S.MyLi>
                    <S.MyLi><span onClick={()=>{setStyleBoardWriteOpen(true)}}>게시물등록하기</span></S.MyLi>
                </ul>
            </S.MyDiv>
            <hr />

            
            
            <Dialog open={ styleBoardWriteOpen }>
                <DialogTitle>게시물 등록</DialogTitle>  
                <DialogContent>  
                    <form>
                        <Card>
                            <CardHeader
                                avatar={ <Avatar>프로필</Avatar> }
                                title={tokenId}
                                value={tokenId}
                                name='id'
                                onChange={onInput}
                            />
                            <Button onClick={ onUploadFile }> 사진등록 +</Button>

                            <input type='file' name='file' id='file' accept="image/*" multiple  ref={imgRef}   style={ {visibility: 'hidden'}}
                                    //onChange={ e=> readURL( e.target) }  
                                    onChange={readURL}
                            />
                            <S.Container>
                            <S.showImgSrcDiv>  {/*  가로로정렬   */}
                                {showImgSrc.map((item, index) => (
                                    <div key={index}>
                                        <ClearIcon onClick={() => onImgRemove(index)} style={{ position:'relative' , top:'0px', left:'470px'}}>삭제</ClearIcon>
                                        <S.showImgSrcImg src={item}  />
                                                                                
                                    </div>
                                ))}

                            </S.showImgSrcDiv>
                            {/* <S.Buttom>주황색 커스텀버튼</S.Buttom> */}
                            
                            {
                            (!productImg) &&
                            <Button onClick={(e) => productSearch(e)} >상품태그 +</Button>   
                            }

                            <div>
                                { 
                                (productImg) &&
                                                <M.ProductItem>
                                                    <M.ItemInner>
                                                        <div className='thumb_box' >
                                                            
                                                            <M.Product style={{position:'relative'}}>
                                                                <M.PictureBrandProductImg>
                                                                    <M.BrandProductImg src={`/resellList/${productImg}`} />
                                                                </M.PictureBrandProductImg>
                                                                <ClearIcon onClick={()=>onProductImgRemove()}  style={{width:'17px', position:'relative' , top:'-87px', left:'80px'}}> x </ClearIcon>
                                                            </M.Product>
                                                
                                                        </div>
                                                    <M.ProductItemInfoBox>
                                                        <div className='info_box'>
                                                            <M.BrandProductInfoBoxName>{productTitle}</M.BrandProductInfoBoxName>
                                                            
                                                        </div>
                                                    </M.ProductItemInfoBox>
                                                    </M.ItemInner>
                                                </M.ProductItem>

                                
                                }

                                
                            </div>
                           
                            


                            {/* <input type="text">{productSeq}</input> */}
                             <Dialog open={popUpOpen}>
                                    <DialogContent style={{width:'500px', height:'300px'}}>
                                        
                                        <input type='text' name='keyword' value={ keyword } placeholder='상품명 또는 브랜드명' onChange={ e=> setKeyword(e.target.value.trim()) }/> &nbsp;
                                        <Button onClick={ onSearch } >검색</Button>
                                        <Button onClick={ ()=>{setPopUpOpen(false)}}>취소</Button>
                                        <div>
                                        {
                                            productList[0].img !== '' &&

                                            productList.map((item, index) => (
                                                <M.ProductItem key={index} >
                                                    <M.ItemInner onClick={ (e) => {productClick(e, item.seq, item.img, item.title)}}>
                                                        <div className='thumb_box'>
                                                            <M.Product>
                                                                <M.PictureBrandProductImg>
                                                                    <M.BrandProductImg src={`/resellList/${photoshop(item.img)}`} />
                                                                </M.PictureBrandProductImg>
                                                            </M.Product>
                                                        </div>
                                                        <M.ProductItemInfoBox>
                                                        <div className='info_box'>
                                                            <div className='brand'>
                                                                <M.BrandTextWithOutWish>{item.brand}</M.BrandTextWithOutWish>
                                                            </div>
                                                            <M.BrandProductInfoBoxName>{item.title}</M.BrandProductInfoBoxName>
                                                            <M.BrandProductInfoBoxPrice>
                                                                <M.BrandProductInfoBoxPriceAmount>
                                                                    <M.BrandProductInfoBoxPriceAmountNum>{item.price}</M.BrandProductInfoBoxPriceAmountNum>
                                                                </M.BrandProductInfoBoxPriceAmount>
                                                                <M.BrandProductInfoBoxPriceDesc>즉시 구매가</M.BrandProductInfoBoxPriceDesc>
                                                            </M.BrandProductInfoBoxPrice>
                                                        </div>
                                                    </M.ProductItemInfoBox>
                                                    </M.ItemInner>
                                                </M.ProductItem>))
                                        }
                                        </div>
                                    </DialogContent>
                                </Dialog>
                           

                            </S.Container>


                            <textarea 
                                type='text-area'
                                name='content'
                                value={content}
                                placeholder='내용 입력'
                                onChange={onInput}
                                style={{width:494, height:80, resize:'none'}}  />
                            
                            <DialogActions>
                                <Button onClick={ onUpload }>등록</Button>
                                <Button onClick={ ()=>{setStyleBoardWriteOpen(false)}}>취소</Button>
                            </DialogActions>
                            
                        </Card>
                    </form>
                </DialogContent>
            </Dialog> 
            
            <S.MyDiv>    {/* 등록한 게시물 간단히 보기 */}
            {
                myList.map((item, index) => {
                    return (
                       
                            <S.MyPhotoMini key={item.seq} 
                                           itemLength ={itemLength}
                                           style={{display : index < itemLength ? '':'none'}}> 

                                {/* <Link to={`/lookbook/mystyledetail/${item.seq}/${item.id}`}> */}
                                <Link to={`/lookbook/mystyledetail/${item.id}`}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={'../storage/'+item.storedFileName[0]}  //입력된 대표사진1개만 보임 
                                />
                                </Link>

                                
                                <CardHeader
                                    avatar={ <Avatar>프로필</Avatar> }
                                    title={item.id}
                                    value={id}
                                    name='id'
                                />
                            </S.MyPhotoMini>
                       
                    )
                })
            }
            </S.MyDiv>
        </Container>
    );
};
export default Mystyle;