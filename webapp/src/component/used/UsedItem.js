import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import UpdateBtnModal from './UpdateBtnModal';
import * as U from './UsedItemStyle';
import jwt_decode from 'jwt-decode';

const UsedItem = () => {
    const navigate = useNavigate();
    // console.log("seq = " + location.seq +" seq = "+ {seq})
    const shopKind = 'used';

    const [currentId, setCurrentId] = useState('user');
    const [isWriter, setIsWriter] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();

    const [reportHistory, setReportHistory] = useState(false);
    const [finishedNum, setFinishedNum] = useState(0);

    const [form, setForm] = useState({
        id: '',
        imgName: '',
        title: '',
        productName: '',
        size: '',
        price: '',
        likes: '',
        contents: '',
        hashTag: [],
        sellingState: true,
        shopKind: '',
    });

    const [likeForm, setLikeForm] = useState({
        seq: '',
        id: '',
        userLike: false,
        registerNo: '',
    });

    const [totalReport, setTotalReport] = useState(0);
    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            const token = localStorage.getItem('accessToken');
            const tokenJson = jwt_decode(token);
            const sub = tokenJson['sub'];

            if (tokenJson['auth'] === 'ROLE_ADMIN') {
                setIsWriter(true);
                setCurrentId('ADMIN');
            } else {
                axios
                    .get(`http://localhost:8080/used/getId?seq=${sub}`)
                    .then(res => {
                        setCurrentId(res.data);
                    })
                    .catch(err => console.log(err));
            }
        }

        axios
            .get(
                'http://localhost:8080/used/viewItem?seq=' +
                    searchParams.get('seq'),
            )
            .then(res => setForm(res.data))
            .catch(error => console.log(error));
    }, []);

    //나중에 세션값 들어오는 거랑 글 작성자랑 맞는지 확인하는 과정

    useEffect(() => {
        //여기서 글로 써놓은 게 나중에 세션을 적어줄 공간
        if (currentId === form.id) {
            setIsWriter(true);
        }

        //strictmode때문에 2번 돌아서 발생하는 오류 방지
        if (form.id) {
            //거래 완료 수 가져오기
            axios
                .get(
                    `http://localhost:8080/used/getFinishedTrade?id=${form.id}`,
                )
                .then(res => setFinishedNum(res.data))
                .catch(err => console.log(err));

            //신고수 토탈 가져오기
            axios
                .get(`http://localhost:8080/used/totalReport?id=${form.id}`)
                .then(res => setTotalReport(res.data))
                .catch(err => console.log(err));
        }
    }, [form.id]);

    useEffect(() => {
        axios
            .get(
                `http://localhost:8080/used/reportHistory?seq=${searchParams.get(
                    'seq',
                )}&reportId=${currentId}`,
            )
            .then(res => setReportHistory(res.data))
            .catch(err => console.log(err));

        axios
            .get(
                'http://localhost:8080/used/itemLike?seq=' +
                    searchParams.get('seq') +
                    '&id=' +
                    currentId +
                    '&shopKind=' +
                    shopKind,
            )
            .then(res => (res.data ? setLikeForm(res.data) : ''))
            .catch(error => console.log(error));
    }, [currentId]);

    const [splitImg, setSplitImg] = useState([]);

    const [mainImg, setMainImg] = useState('');
    const [subImg1, setSubImg1] = useState('');
    const [subImg2, setSubImg2] = useState('');
    const [subImg3, setSubImg3] = useState('');
    const [allImg, setAllImg] = useState([]);
    useEffect(() => {
        if (form.imgName) {
            const img = form.imgName.split(',');

            setMainImg(img[0]);

            img[1] && setSubImg1(img[1]);
            img[2] && setSubImg2(img[2]);
            img[3] && setSubImg3(img[3]);
            setAllImg(img);
        }
    }, [form]);

    // 관심등록

    const onInterest = () => {
        // likeForm.userLike || setLikeForm({...likeForm, userLike:'false'})

        if (currentId !== 'user') {
            setLikeForm({ ...likeForm, userLike: !likeForm.userLike });
            if (likeForm.userLike) {
                setForm({ ...form, likes: form.likes - 1 });
            } else {
                setForm({ ...form, likes: form.likes + 1 });
            }
            // console.log(likeForm)

            // // 데이터가 없어서 강제 주입
            // setLikeForm({...likeForm , seq:searchParams.get('seq'),id:'asd'})

            axios
                .post(
                    `http://localhost:8080/used/likeSet?seq=` +
                        searchParams.get('seq') +
                        '&id=' +
                        currentId +
                        '&userLike=' +
                        likeForm.userLike +
                        '&shopKind=' +
                        shopKind,
                )
                // axios.post('http://localhost:8080/used/likeSet',null,{params:likeForm})
                // axios.get('http://localhost:8080/used/likeSet'+   likeForm) 나중에 다시 해보기
                .then()
                .catch(error => console.log(error));
        } else {
            alert('로그인 후 이용가능 합니다.');
            navigate('/login');
        }
    };

    //이미지 순서 바꾸기
    const changImg = e => {
        console.log(form.hashTag);
        var id = e.target.getAttribute('id');
        //진영씨 방법
        //1. if로 아이디 값 걸러서 바꿔주기
        //2. getAttribute로 src를 받아오기
        var imgTemp = allImg[0];
        allImg[0] = allImg[id];
        allImg[id] = imgTemp;

        setMainImg(allImg[0]);
        allImg[1] && setSubImg1(allImg[1]);
        allImg[2] && setSubImg2(allImg[2]);
        allImg[3] && setSubImg3(allImg[3]);
    };

    useEffect(() => {
        var decoding = decodeURI(form.hashTag).split(',');
        setForm({
            ...form,
            hashTag: decoding,
        });

        //form이 바뀌는 걸로 설정하면 무한 루프도니까 한 번만 돌게 form.title사용
    }, [form.title]);

    const soldOut = () => {
        axios
            .put('http://localhost:8080/used/soldOut', '', {
                params: {
                    ...form,
                    hashTag: encodeURI(form.hashTag),
                },
            })
            .then(alert('판매완료 처리되었습니다.'))
            .then(window.location.reload())
            .catch(err => console.log(err));
    };

    const onSale = () => {
        // setForm({...form, title:form.title.substr(6)})

        axios
            .put('http://localhost:8080/used/onSale', '', {
                params: {
                    ...form,
                    hashTag: encodeURI(form.hashTag),
                },
            })
            .then(alert('판매중 처리되었습니다.'))
            .then(window.location.reload())
            .catch(err => console.log(err));
    };

    const addComma = price => {
        price = String(price);
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
    };

    const onSettle = () => {
        navigate(`/pay/payForm?type=${form.shopKind}&productNum=${form.seq}`);
    };

    return (
        <>
            <U.ModalDiv>
                <UpdateBtnModal
                    currentId={currentId}
                    isWriter={isWriter}
                    form={form}
                    setForm={setForm}
                    onSale={onSale}
                    soldOut={soldOut}
                    seq={searchParams.get('seq')}
                    imgNameSend={form.imgName}
                    reportHistory={reportHistory}
                ></UpdateBtnModal>
            </U.ModalDiv>
            <U.BaseBody>
                <U.ImgBody>
                    <U.MainImg
                        src={`/storage/${mainImg}`}
                        alt={mainImg}
                    ></U.MainImg>
                    <U.SmallImgBody>
                        {subImg1 && (
                            <U.SmallImg
                                src={`/storage/${subImg1}`}
                                id="1"
                                onClick={e => changImg(e)}
                            ></U.SmallImg>
                        )}
                        {subImg2 && (
                            <U.SmallImg
                                src={`/storage/${subImg2}`}
                                id="2"
                                onClick={e => changImg(e)}
                            ></U.SmallImg>
                        )}
                        {subImg3 && (
                            <U.SmallImg
                                src={`/storage/${subImg3}`}
                                id="3"
                                onClick={e => changImg(e)}
                            ></U.SmallImg>
                        )}
                    </U.SmallImgBody>
                </U.ImgBody>
                &emsp;
                <U.BaseDiv>
                    <U.TitleWrapper>
                        <U.TitleSpan>
                            {!form.sellingState && <span>[판매완료]</span>}
                            {form.title}
                        </U.TitleSpan>
                    </U.TitleWrapper>

                    <U.ProductNameWrapper>
                        <U.ProdcuctNameSpan>
                            {form.productName}
                        </U.ProdcuctNameSpan>
                    </U.ProductNameWrapper>
                    <br />

                    <U.SizeWrapper>
                        <U.Sizetitle>사이즈</U.Sizetitle>
                        <U.SizeSpan>{form.size}</U.SizeSpan>
                    </U.SizeWrapper>

                    <U.PriceWrapper>
                        <U.PriceSpan>거래가</U.PriceSpan>
                        <U.PriceSpan>{addComma(form.price)}</U.PriceSpan>
                    </U.PriceWrapper>

                    <U.InterestWrapper onClick={onInterest}>
                        <U.InterestInput
                            src={
                                likeForm.userLike
                                    ? '/image/used/blackBookmark.png'
                                    : '../image/used/bookmark.svg'
                            }
                        />
                        <U.InterestSpan>관심 상품</U.InterestSpan>&nbsp;
                        <U.InterestCount>{form.likes}</U.InterestCount>
                    </U.InterestWrapper>
                    <br />
                    <br />
                    <br></br>

                    <U.ItemWrapper>
                        <U.ItemSpan>제품설명</U.ItemSpan>
                        <br />
                        <br />
                        <U.ItemContents>{form.contents}</U.ItemContents>
                    </U.ItemWrapper>
                    <br></br>

                    {/* <U.ChatButton>채팅하기</U.ChatButton> */}
                    {form.sellingState ? (
                        <U.SettlementButton onClick={onSettle} active={true}>
                            <U.PriceDiv>{form.price}원</U.PriceDiv>결 제 하 기
                        </U.SettlementButton>
                    ) : (
                        <U.SettlementButton active={false} disabled>
                            판 매 완 료
                        </U.SettlementButton>
                    )}
                </U.BaseDiv>
            </U.BaseBody>

            <U.BottomDiv>
                <U.ProfileWrapper>
                    <U.ProfileImg></U.ProfileImg>&emsp;
                    <U.ProfileSpan>
                        작성자:{form.id}/거래수:{finishedNum}/신고수:
                        {totalReport}
                    </U.ProfileSpan>
                </U.ProfileWrapper>
            </U.BottomDiv>
        </>
    );
};

export default UsedItem;
