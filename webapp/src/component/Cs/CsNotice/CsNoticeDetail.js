import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import * as S from './CsNoticeStyle';

const CsNoticeDetail = () => {
    const location = useLocation();
    const [notice, setNotice] = useState(location.state.noticeList);
    const [noticeArr, setNoticeArr] = useState(location.pathname.split('/'));
    const [noticeNum, setNoticeNum] = useState(noticeArr[noticeArr.length - 1]);
    const navigate = useNavigate()
    let content = notice.content;

    useEffect(() => {
        axios
            .get(`http://localhost:8080/csnotice/getNotice?seqString=${noticeNum}`)
            .then(res => setNotice(res.data))
            .catch(error => console(error));
    }, []);
    
    const onList = () => {
        navigate("/cs/csNotice")
    }
    return (
        <>
            <S.NoticeWrapper>
                <div>{notice.createdate}</div>
                <S.NoticeTitle>{notice.title}</S.NoticeTitle>
                <S.NoticeContent>
                    
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </S.NoticeContent>
                <S.Button onClick={onList}>목록으로</S.Button>
            </S.NoticeWrapper>
        </>
    );
};

export default CsNoticeDetail;
