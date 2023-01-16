import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import * as S from './CsNoticeStyle';
import jwt_decode from 'jwt-decode';
const CsNotice = () => {
    const token = localStorage.getItem('accessToken');
    const [auth, setAuth] = useState('ROLE_GUEST');
    const [tokenId, settokenId] = useState('')
    useEffect(() => {
        if (token !== null) {
            const tokenJson = jwt_decode(token);
            setAuth(tokenJson['auth']);
            //localStorage.setItem('userInfo', JSON.stringify(tokenJson));
            settokenId(tokenJson['sub']);
            // setForm({...form, id:tokenId})
        }
    }, [token]);
   
    const [noticeList, setNoticeList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8080/csnotice/getNotices")
             .then(res => res.data.length !== 0 && setNoticeList(res.data))
             .catch(error => console.log(error))
    }, [])

    const onClick = (e) => {
        navigate(`${e.target.id}`, {state:{noticeList : noticeList}})
    }
    //스크롤
    const [itemLength,setItemLength] = useState(12) // 처음에 가져올 아이템 갯수
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
    return (
        <>
          {tokenId === '14'&& <Link to='/cs/csNoticeWrite'> <S.Button> 글쓰기 </S.Button></Link>}
            <S.NoticeUl>
                {
                    noticeList.map(item => 
                        <S.NoticeLi key={item.seq} id={item.seq} onClick={onClick}>
                         [  {item.category==='anouncement' ? '공지':
                        item.category==='event' ? '이벤트 발표' :
                        item.category==='etc' ? '기타' :
                        ''} ]  &nbsp;&nbsp;&nbsp; {item.title}</S.NoticeLi>
                    )
                }
                {/* <S.NoticeLi>[이벤트 발표] 발표 1번</S.NoticeLi> */}
                {/* <S.NoticeLi>[이벤트 발표] 발표 2번</S.NoticeLi> */}
                {/* <S.NoticeLi>[이벤트 발표] 발표 3번</S.NoticeLi> */}
            </S.NoticeUl>
        </>
    );
};

export default CsNotice;
