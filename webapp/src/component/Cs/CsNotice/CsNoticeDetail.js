import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import * as C from './CsNoticeStyle';
import jwt_decode from 'jwt-decode';
const CsNoticeDetail = () => {
    const location = useLocation();
    const [notice, setNotice] = useState(location.state.noticeList);
    const [noticeArr, setNoticeArr] = useState(location.pathname.split('/'));
    const [noticeNum, setNoticeNum] = useState(noticeArr[noticeArr.length - 1]);
    const navigate = useNavigate()
    let content = notice.content;
    const [seq,setSeq ]= useState()

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
             <C.DateSpan>{notice.createdate}</C.DateSpan>
            <C.NoticeWrapper>
               
                <C.NoticeTitle>{notice.title}</C.NoticeTitle>
                <C.NoticeContent>
                    
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                </C.NoticeContent>
                <C.Button onClick={onList}>목록으로</C.Button>
                    {tokenId === '14' &&   <Link to={'/cs/csNoticeUpdateForm/'+seq}>    <C.Button onClick={onUpdate}>수정</C.Button></Link>}
                    
                    { tokenId === '14' && <C.Button onClick={onDelete}>삭제</C.Button> }
            </C.NoticeWrapper>
        </>
    );
};

export default CsNoticeDetail;
