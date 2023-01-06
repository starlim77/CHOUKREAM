import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './styleWrite';
import tagData from './TagItem';

const NewWrite = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: '',
        subTitle: '',
        brand: '',
        category: '',
        categoryDetail: '',
        gender: '',
        modelNum: '',
        releaseDate: '',
        color: '',
        size: '',
        price: '',
    });

    const {
        title,
        subTitle,
        brand,
        category,
        categoryDetail,
        gender,
        modelNum,
        releaseDate,
        color,
        size,
        price,
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
        file[0] || (--sw && alert('이미지 파일을 등록해주세요'));
        // false ||
        if (!title) {
            sw = 0;
        } else if (category === '상품 종류' || !category) {
            sw = 0;
        } else if (!price) {
            sw = 0;
        }

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
        console.log('스위치 찍어라' + 1);
        if (sw == 1) {
            // null로 하든 formData로 하든 상관없나 ?
            // axios.post('http://localhost:8080/used/writeItem',null,({params:{
            axios
                .post('http://localhost:8080/shop/newProductUpload', formData, {
                    params: form,
                })
                .then(() => {
                    alert('글작성 완료');
                })
                .catch(error => console.log(error));
        }
        navigate('/admin/newList');
    };

    // ---------------
    const [subImg, setSubImg] = useState([]);

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

            //setSubImg(urlTemp);
            file.push(items);
        });
    };

    const deleteImg = e => {
        console.log(e.target.getAttribute('id'));
        console.log(e.target);
        console.log(e.target.id);
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
    return (
        <>
            <S.WriteBody>
                <S.ImgBody>
                    {/* 이미지 소스 이용방법 2가지 사용해봄 */}
                    <S.MainImgP setPosition={subImg[0] ? true : false}>
                        <S.MainImg
                            name="mainImg"
                            sizing={subImg[0] ? true : false}
                            src={
                                subImg[0]
                                    ? subImg[0].url
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
                                        ? subImg[1].url
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
                                        ? subImg[2].url
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
                                        ? subImg[3].url
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
                </S.ImgBody>

                <S.Information>
                    <S.Necessary>* 필수 입력</S.Necessary>
                    {/* <S.Subject>* 제목</S.Subject>
                    <S.Title type="text" name="title" onChange={onInput} /> */}

                    <S.Subject> 제품 영어 이름</S.Subject>
                    <S.SubTitle type="text" name="title" onChange={onInput} />
                    <S.Subject> 제품 한글 이름</S.Subject>
                    <S.SubTitle
                        type="text"
                        name="subTitle"
                        onChange={onInput}
                    />
                    <S.Subject> 브랜드</S.Subject>
                    <S.SubTitle type="text" name="brand" onChange={onInput} />
                    <S.Subject> 제품 카테고리 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="category"
                        onChange={onInput}
                    />
                    <S.Subject> 제품 카테고리 디테일 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="categoryDetail"
                        onChange={onInput}
                    />
                    <S.Subject> 성별 </S.Subject>
                    <S.SubTitle type="text" name="gender" onChange={onInput} />
                    <S.Subject> 제품 모델 번호 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="modelNum"
                        onChange={onInput}
                    />
                    <S.Subject> 발매일 </S.Subject>
                    <S.SubTitle
                        type="text"
                        name="releaseDate"
                        onChange={onInput}
                    />
                    <S.Subject> 색상 </S.Subject>
                    <S.SubTitle type="text" name="color" onChange={onInput} />
                    <S.Subject> size </S.Subject>
                    <S.SubTitle type="text" name="size" onChange={onInput} />

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

                    <S.Necessary>* 필수</S.Necessary>
                    <S.Subject> 가격</S.Subject>
                    <S.PriceDiv>
                        <S.ItemPrice
                            type="number"
                            name="price"
                            onChange={onInput}
                        />
                        <S.ItemPriceSpan>원</S.ItemPriceSpan>
                    </S.PriceDiv>

                    {/* <S.Subject> 제품 설명</S.Subject>
                    <S.ItemContent name="contents" onChange={onInput} /> */}

                    <S.WriteBtn onClick={onWrite}>작성 완료</S.WriteBtn>
                </S.Information>
            </S.WriteBody>
        </>
    );
};

export default NewWrite;
