import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import * as H from './CsHeaderStyle';

const CsHeader = () => {
    const location = useLocation()
    const title = location.pathname.split("/")[2]
    const [titleKor, setTitleKor] = useState()
    useEffect(() => {
        console.log(title)
        title === "csNotice" |"csNoticeWrite"
            ?setTitleKor("공지사항")
            :title === "csFaq"|'csFaqUpdateForm'|'csFaqWriteForm'
            ?setTitleKor("자주 묻는 질문")
            :title === "csInspection"
            &&setTitleKor("검수 기준")
    }, [location])
    return (
        <>
            <H.HeaderWrapper>
                <H.HeaderText>{ titleKor }</H.HeaderText>
            </H.HeaderWrapper>
        </>
    );
};

export default CsHeader;
