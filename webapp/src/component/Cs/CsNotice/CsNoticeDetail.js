import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import * as S from './CsNoticeStyle';

const CsNoticeDetail = () => {
    const location = useLocation();
    const [notice, setNotice] = useState(location.state.noticeList);
    const [noticeArr, setNoticeArr] = useState(location.pathname.split('/'));
    const [noticeNum, setNoticeNum] = useState(noticeArr[noticeArr.length - 1]);
    const navigate = useNavigate()
    let content = notice.content;
    const [seq,setSeq ]= useState()

    useEffect(() => {
        axios
            .get(`http://localhost:8080/csnotice/getNotice?seqString=${noticeNum}`)
            .then(res => setNotice(res.data))
            .catch(error => console(error));
            setSeq(noticeNum)
    }, []);
    
    const onList = () => {
        navigate("/cs/csNotice")
    }
    const onUpdate = () =>{
        
    }

    const onDelete =( ) => {
             
             console.log(seq)
             axios.delete(`http://localhost:8080/csnotice/deleteNotice?seqString=${noticeNum}`)
                        .then(() =>{
                            alert("글 삭제");
                            navigate(-1);

                        })
                        .catch(error=> console.log(error))
        
    
        .catch(error=> console.log(error))
    }
      

     
    return (
        <>
             <S.DateSpan>{notice.createdate}</S.DateSpan>
            <S.NoticeWrapper>
               
                <S.NoticeTitle>{notice.title}</S.NoticeTitle>
                <S.NoticeContent>
                    
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </S.NoticeContent>
                <S.Button onClick={onList}>목록으로</S.Button>
                <Link to={'/cs/csNoticeUpdateForm/'+seq}>    <S.Button onClick={onUpdate}>수정</S.Button></Link>
                <S.Button onClick={onDelete}>삭제</S.Button>
            </S.NoticeWrapper>
        </>
    );
};

export default CsNoticeDetail;
