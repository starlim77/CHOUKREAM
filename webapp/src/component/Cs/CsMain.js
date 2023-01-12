import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import * as S from './style';
import CsNav from './Csnav/CsNav';
import CsFaq from './CsFaq';
import CsFaqUpdateForm from './CsFaqUpdateForm';
import CsInspection from './CsInspection';
import CsNotice from './CsNotice/CsNotice';
import CsHeader from './CsHeader';
import CsFaqWriteForm from './CsFaqWriteForm';
import CsNoticeDetail from './CsNotice/CsNoticeDetail';
import CsNoticeWrite from './CsNotice/CsNoticeWrite';

const CsMain = () => {
    return (
        <S.MainContainer>
            <S.MainWrapper>
                <CsNav />
                <S.MainRight>
                    <CsHeader />
                    <Routes>
                        <Route path="/csNotice" element={<CsNotice />} />
                        <Route
                            path="/csNotice/:seq"
                            element={<CsNoticeDetail />}
                        />
                        <Route path ='/csNoticeWrite' element={<CsNoticeWrite/>}/>

                        <Route path="/CsFaq" element={<CsFaq />} />
                        <Route
                            path="/CsFaqUpdateForm/:seq"
                            element={<CsFaqUpdateForm />}
                        />
                        <Route
                            path="/CsFaqWriteForm/"
                            element={<CsFaqWriteForm />}
                        />
                        <Route
                            path="/csInspection"
                            element={<CsInspection />}
                        />
                    </Routes>
                </S.MainRight>
            </S.MainWrapper>
        </S.MainContainer>
    );
};

export default CsMain;
