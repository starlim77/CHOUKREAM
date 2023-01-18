import { Description } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from '.././register/styleWrite';
import NewOption from './NewOption';

const NewUpdate = () => {

    const [modalOpen, setModalOpen] = useState(false);


    const location = useLocation();
    const checkedId = location.state.checkedId;
    // const updateList = location.state.updateList;
    const imgNameSend = location.state.updateList[0].imgName;
    console.log(imgNameSend)
    
    // console.log(location.state)
    // console.log(location.state.updateList[0].subTitle)
    // useEffect (() => {
        
    // },[])
    
    // console.log( '' + typeof(checkedId))
    // console.log( '' + checkedId)
    
    // update 화면 처음떴을때 전에 등록했던 사진이 떠야함 
    const [subImg, setSubImg] = useState([]);
    useEffect(() => {
        var img = imgNameSend.split(',');
        var img2 = img.map(item => '/newProductList/'+item);
        setSubImg(img2);
    }, []);
    

    const navigate = useNavigate();
    
    const date = new Date();

    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const dateStr = year + '.' + month + '.' + day;
    
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const seconds = ('0' + date.getSeconds()).slice(-2);
    const timeStr = ' ' + hours + ':' + minutes;
    
    // console.log(dateStr + timeStr);
    
    const [form, setForm] = useState({
        seq: checkedId,
        registerProductDate: dateStr + timeStr,
        imgName: imgNameSend,
        title: location.state.updateList[0].title,
        subTitle: location.state.updateList[0].subTitle,
        brand: location.state.updateList[0].brand,
        releaseDate: location.state.updateList[0].releaseDate,
        tag: location.state.updateList[0].tag,
        category: location.state.updateList[0].category,
        gender: location.state.updateList[0].gender,
        descriptionImg: location.state.updateList[0].descriptionImg,
        price: location.state.updateList[0].price,
        businessName: location.state.updateList[0].businessName,
        color: location.state.updateList[0].color,
        comRegNo: location.state.updateList[0].comRegNo,
        representative: location.state.updateList[0].representative,
        businessLocation: location.state.updateList[0].businessLocation,
        serviceCall: location.state.updateList[0].serviceCall,
        material: location.state.updateList[0].material,
        manufacturer: location.state.updateList[0].manufacturer,
        countryOfManufacturer: location.state.updateList[0].countryOfManufacturer,
        dateOfManufacturer: location.state.updateList[0].dateOfManufacturer,
    });

    const {
        seq,
        registerProductDate,
        imgName,
        title,
        subTitle,
        brand,
        releaseDate,
        tag,
        category,
        gender,
        descriptionImg,
        price,
        businessName,
        color,
        comRegNo,
        representative,
        businessLocation,
        serviceCall,
        material,
        manufacturer,
        countryOfManufacturer,
        dateOfManufacturer,
    } = form;

    const onInput = e => {
        const { name, value } = e.target;
        // 객체로 보내기 위해서 이렇게함
        setForm({
            ...form,
            [name]: value,
        });

        // console.log('form ' + form);
        // // 자바스크립트 객체 내부 확인하는 방법
        // Object.keys(form).forEach(key => {
        //     console.log(key);
        //     console.log(form[key]);
        // });
    };

    const onWrite = e => {
        e.preventDefault(); // 기본동작 막아주고
        console.log('보내기' + form);
        console.log(form);
        var sw = 1;
        console.log('file[0] ', file[0]);
        // console.log(--sw);
        // file[0] || (--sw && alert('이미지 파일을 등록해주세요'));
        // false ||

        var formData = new FormData();
        file.map(files => formData.append('img', files)); // 무조건 문자열로 반환된다
        // formData.append('item', 'hi'); // <input name="item" value="hi"> 와 같다.
        // FormData 객체 만들어서 담아서 보낸다
        // 하지만 HTML이 아닌 자바스크립트 단 에서 form 전송 동작이 필요한 경우가 있는데, 이미지 같은 멀티미디어 파일을 페이지 전환 없이 폼 데이터를 비동기로 제출 하고 싶을 때나,
        //  자바스크립트로 좀더 타이트하게 폼 데이터를 관리하고 싶을때 formData 객체를 이용한다고 보면 된다.
        Object.keys(formData).forEach(key => {
            console.log('키' + key);
            console.log('formData[key]' + formData[key]);
        });
        
        if (sw == 1) {
            // null로 하든 formData로 하든 상관없나 ?
            // axios.post('http://localhost:8080/used/writeItem',null,({params:{
            // 이게맞음 
            console.log('디비가러 가는길 ~ ' + checkedId )
            axios
                // .put(`http://localhost:8080/shop/update?seq=${checkedId}`, null, {
                .put('http://localhost:8080/shop/newUpdate', formData, {
                    params: form,
                })
                .then(() => {
                    alert('새상품 수정 완료')
                })
                .catch(error => console.log(error))
        }
        // navigate('/admin/newList');
        // window.location.reload();
    };
    // ---------------
    

    const imgRef = useRef();

    const [file, setFile] = useState([]);

    const onSubImg = () => {
        imgRef.current.click();
        console.log(imgRef); // { current : input}이 저장됨
    };
    //const[forRendering,setForRendering]=useState('');
    const [random, setRandom] = useState();

    const onImgRead = e => {
        console.log('하이루');
        //유효성 검사
        //https://velog.io/@fxoco/image-input-%EC%9C%A0%ED%9A%A8%EC%84%B1-%EA%B2%80%EC%82%AC
        let sw = 0;
        var fileForm = /(.*?)\.(jpg|jpeg|png|gif)$/;
        Array.from(e.target.files).map(
            item =>
                item.name.match(fileForm) ||
                (++sw &&
                    alert("'.jpeg, .jpg, .png, .gif ' 형식만 사용해주세요")),
        );

        if (sw === 0) {
            //이미지 세팅 함수 호출
            addFile(e);
        }
        //push로 넣어줬기 때문에 별도의 렌더링이 되지 않는다
        //따라서 onImgRead함수가 종료될 때 강제로 렌더링이 될 수 있도록 한다.
        //굳이 Math.random을 사용하여 렌더링을 하는 이유는 렌더링 값이 기존 값과 같다면 렌더링이 되지 않기 때문이다.
        setRandom(Math.random);
        //setForRendering(`${random}`);

        //동일한 파일을 넣어주는 경우에 발생하는 버그 방지
        e.target.value = '';
    };

    const addFile = e => {
        //Array.from 사용 이유.
        //e.target.files는 배열의 형태처럼 보이긴 하나 실제 배열이 아니라서 배열형태로 만들어서 map을 돌리는 것이다.
        //https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch2.md#array-likes
        Array.from(e.target.files).map((items, index) => {
            console.log('ㅎㅇㅎㅇ items ' + items);
            var urlTemp = window.URL.createObjectURL(items);
            console.log('ㅎㅇㅎㅇ urlTemp' + urlTemp);
            //var urlTemp=reader.readAsDataURL(items);
            //var url=urlTemp.slice(5);
            subImg.push({ url: urlTemp });
            // push 해서 onImgRead 파일 자동으로 땡겨지게 해준다 / push 없는거 자동으로 땡겨서 채워줌 
        
            //setSubImg(urlTemp);
            file.push(items);
        });
    };

    const deleteImg = e => {
        // console.log(e.target.getAttribute('id'));
        // console.log(e.target);
        // console.log(e.target.id);
        var id = e.target.getAttribute('id');

        //https://forum.freecodecamp.org/t/how-to-filter-using-array-index-in-react/403524
        //index값은 숫자인데 그냥 id값을 주면 id를 받아 문자열로 인식을 하기때문에 parseInt를 이용해 숫자로 바꿔준다.
        var imgTemp = subImg.filter((item, index) => index !== parseInt(id));
        var fileTemp = file.filter((item, index) => index !== parseInt(id));
        console.log(imgTemp);
        console.log(fileTemp); // 빈배열을 넣어줘서 삭제한다
        setSubImg([...imgTemp]);
        setFile([...fileTemp]);
        //console.log(file);
    };

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
    
    // console.log(location + 'ddd');
    // console.log(location);
    // console.log(location.state.name);
    
    return (
        <>
            <h1>상품 수정 </h1>
            <S.WriteBody>
                <S.ImgBody>
                    {/* 이미지 소스 이용방법 2가지 사용해봄 */}
                    <S.MainImgP setPosition={subImg[0] ? true : false}>
                        <S.MainImg
                            name="mainImg"
                            sizing={subImg[0] ? true : false}
                            src={
                                subImg[0]
                                    ? subImg[0]
                                    : `${process.env.PUBLIC_URL}/image/used/plusIcon.png`
                            }
                            onClick={onSubImg}
                            alt={subImg[0] ? subImg[0].url : 'nothing'}
                        ></S.MainImg>
                        <S.DeleteMainImg
                            setPosition={subImg[0] ? true : false}
                            id="0"
                            onClick={e => deleteImg(e)}
                        ></S.DeleteMainImg>
                    </S.MainImgP>
                    <S.SubImgBody>
                        <S.SubImgP setPosition={subImg[1] ? true : false}>
                            <S.SubImg
                                sizing={subImg[1] ? true : false}
                                name="subImg1"
                                src={
                                    subImg[1]
                                        ? subImg[1]
                                        : '/image/used/plusIcon.png'
                                }
                                onClick={onSubImg}
                            />
                            <S.DeleteImg
                                setPosition={subImg[1] ? true : false}
                                id="1"
                                onClick={e => deleteImg(e)}
                            ></S.DeleteImg>
                        </S.SubImgP>
                        <S.SubImgP setPosition={subImg[2] ? true : false}>
                            <S.SubImg
                                sizing={subImg[2] ? true : false}
                                name="subImg2"
                                src={
                                    subImg[2]
                                        ? subImg[2]
                                        : '/image/used/plusIcon.png'
                                }
                                onClick={onSubImg}
                            />
                            <S.DeleteImg
                                setPosition={subImg[2] ? true : false}
                                id="2"
                                onClick={e => deleteImg(e)}
                            ></S.DeleteImg>
                        </S.SubImgP>
                        <S.SubImgP setPosition={subImg[3] ? true : false}>
                            <S.SubImg
                                sizing={subImg[3] ? true : false}
                                name="subImg3"
                                src={
                                    subImg[3]
                                        ? subImg[3]
                                        : '/image/used/plusIcon.png'
                                }
                                onClick={onSubImg}
                            />
                            <S.DeleteImg
                                setPosition={subImg[3] ? true : false}
                                id="3"
                                onClick={e => deleteImg(e)}
                            ></S.DeleteImg>
                        </S.SubImgP>
                    </S.SubImgBody>
                    {/* https://blog.munilive.com/posts/input-file-type-accept-attribute.html
                    파일 형식 제한은 accept이용.
                    다만 업로드 하는 사람이 형식을 모든 파일로 받으면 다른 파일로 업로드가 가능해진다.
                    유효성 검사 필요 */}
                    <input
                        type="file"
                        name="img"
                        style={{ display: 'none' }}
                        accept=".jpg,.png, .jpeg, .gif"
                        onChange={e => onImgRead(e)}
                        ref={imgRef}
                        multiple
                    ></input>
                    *이미지는 1대 1비율이 아니면 잘려서 보일 수 있습니다.
                    <br></br>
                    *이미지 파일만 업로드 가능합니다.
                </S.ImgBody>
                {/* onImgRead 함수가 파일 올렸을때 자동으로 땡겨지게해준다 */}

                <S.Information>
                    {/* <S.Necessary>* 필수 입력</S.Necessary> */}
                    {/* <S.Subject>* 제목</S.Subject>
                    <S.Title type="text" name="title" onChange={onInput} /> */}

                    <S.Subject> 제품 영어 이름</S.Subject>
                    <S.SubTitle
                        type="text"
                        name="title"
                        onChange={onInput}
                        value={title}
                    />
                    <S.Subject> 제품 한글 이름</S.Subject>
                    <S.SubTitle
                        type="text"
                        name="subTitle"
                        onChange={onInput}
                        value={subTitle}
                    />
                    <S.Subject> 브랜드</S.Subject>
                    <S.SubTitle
                        type="text"
                        name="brand"
                        onChange={onInput}
                        value={brand}
                    />
                    <S.Subject> 성별</S.Subject>
                    <S.SubTitle
                        type="text"
                        name="gender"
                        onChange={onInput}
                        value={gender}
                    />
                    <S.Subject> 발매일</S.Subject>
                    <S.SubTitle
                        type="text"
                        name="releaseDate"
                        onChange={onInput}
                        value={releaseDate}
                    />
                    <S.Subject> 태그</S.Subject>
                    <S.SubTitle
                        type="text"
                        name="tag"
                        onChange={onInput}
                        value={tag}
                    />
                    <S.Subject> 제품 카테고리 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="category"
                        onChange={onInput}
                        value={category}
                    />
                    <S.Subject> 상세설명 이미지 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="descriptionImg"
                        onChange={onInput}
                        value={descriptionImg}
                    />
                    <S.Subject> 판매가 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="price"
                        onChange={onInput}
                        value={price}
                    />
                    <S.Subject> 상호명 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="businessName"
                        onChange={onInput}
                        value={businessName}
                    />
                    <S.Subject> 색상 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="color"
                        onChange={onInput}
                        value={color}
                    />
                    <S.Subject> 사업자 번호 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="comRegNo"
                        onChange={onInput}
                        value={comRegNo}
                    />
                    <S.Subject> 대표자 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="representative"
                        onChange={onInput}
                        value={representative}
                    />
                    <S.Subject> 사업장 소재지 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="businessLocation"
                        onChange={onInput}
                        value={businessLocation}
                    />
                    <S.Subject> 고객센터 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="serviceCall"
                        onChange={onInput}
                        value={serviceCall}
                    />
                    <S.Subject> 소재 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="material"
                        onChange={onInput}
                        value={material}
                    />
                    <S.Subject> 제조 회사 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="manufacturer"
                        onChange={onInput}
                        value={manufacturer}
                    />
                    <S.Subject> 제조국 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="countryOfManufacturer"
                        onChange={onInput}
                        value={countryOfManufacturer}
                    />
                    <S.Subject> 제조 날짜 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="dateOfManufacturer"
                        onChange={onInput}
                        value={dateOfManufacturer}
                    />

                    {/* <S.Necessary>* 필수</S.Necessary>
                    <S.Subject> 상품 정보</S.Subject> */}
                    {/* <S.ItemKindPriceDiv>
                        <S.ItemKind name="kind" onChange={onInput}>
                            <S.ItemKindOption>상품 종류</S.ItemKindOption>
                            {tagData.map(item => (
                                <S.ItemKindOption key={item.id}>
                                    {item.title}
                                </S.ItemKindOption>
                            ))}
                        </S.ItemKind>
                        <div>
                            <S.ItemSizeSpan>Size :</S.ItemSizeSpan>
                            <S.ItemSize
                                type="text"
                                name="size"
                                onChange={onInput}
                            />
                        </div>
                    </S.ItemKindPriceDiv> */}

                    {/* <S.Necessary>* 필수</S.Necessary>
                    <S.Subject> 가격</S.Subject>
                    <S.PriceDiv>
                        <S.ItemPrice
                            type="number"
                            name="price"
                            onChange={onInput}
                        />
                        <S.ItemPriceSpan>원</S.ItemPriceSpan>
                    </S.PriceDiv> */}

                    {/* <S.Subject> 제품 설명</S.Subject>
                    <S.ItemContent name="contents" onChange={onInput} /> */}
                    {modalOpen && <NewOption setModalOpen={setModalOpen} seq={seq}></NewOption>}
                    <S.WriteBtn onClick={onWrite}>작성 완료</S.WriteBtn>
                    <S.WriteBtn onClick={() => setModalOpen(true)}>사이즈 관리</S.WriteBtn>
                </S.Information>
            </S.WriteBody>
        </>
    );
};

export default NewUpdate;
