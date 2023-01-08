import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import CsNav from './Csnav/CsNav';
import CsFaq from './CsFaq';
import CsFaqUpdateForm from './CsFaqUpdateForm';
import CsInspection from './CsInspection';
import CsNotice from './CsNotice/CsNotice';
import CsHeader from './CsHeader';

const CsMain = () => {
    return (
        <>
            <CsNav/>
            <CsHeader />
            <Routes>
                <Route path='/csNotice' element={<CsNotice/>} />
                <Route path='/CsFaq' element={<CsFaq/>}/>
                <Route path="/CsFaqUpdateForm/:seq" element= {<CsFaqUpdateForm/>}/>
                <Route path='/csInspection' element={<CsInspection/>}/>
            </Routes>
        </>
    );
};

export default CsMain;