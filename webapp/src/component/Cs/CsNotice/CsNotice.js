import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import * as S from './CsNoticeStyle';
const CsNotice = () => {
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
    return (
        <>
           <Link to='/cs/csNoticeWrite'> <button> 글쓰기 </button></Link>
            <S.NoticeUl>
                {
                    noticeList.map(item => 
                        <S.NoticeLi key={item.seq} id={item.seq} onClick={onClick}>{item.category}  &nbsp;&nbsp;&nbsp; {item.title}</S.NoticeLi>
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
