import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import * as S from './CsNoticeStyle';
const CsNotice = () => {
    const [noticeList, setNoticeList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:8080/cs/getNotices")
             .then(res => res.data.length !== 0 && setNoticeList(res.data))
             .catch(error => console.log(error))
    }, [])

    const onClick = (e) => {
        navigate(`${e.target.id}`, {state:{noticeList : noticeList}})
    }
    return (
        <>
            <S.NoticeUl>
                {
                    noticeList.map(item => 
                        <S.NoticeLi key={item.seq} id={item.seq} onClick={onClick}>{item.title}</S.NoticeLi>
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
