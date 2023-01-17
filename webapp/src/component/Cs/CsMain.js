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
import CsNoticeUpdateForm from './CsNotice/CsNoticeUpdateForm';

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
                        <Route
                            path="/csNoticeUpdateForm/:seq"
                            element={<CsNoticeUpdateForm />}
                        />
                        <Route path ='/csNoticeWrite' element={<CsNoticeWrite/>}/>

                        <Route path="/csFaq" element={<CsFaq />} />
                        <Route
                            path="/csFaqUpdateForm/:seq"
                            element={<CsFaqUpdateForm />}
                        />
                        <Route
                            path="/csFaqWriteForm/"
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
