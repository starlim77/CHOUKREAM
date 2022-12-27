import React from 'react';
import './App.css';
import Layout from './component/Layout/Layout';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchForm from './component/Search/SearchForm';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element="" />                    
                </Route>
                    <Route path="/Search/SearchForm" element={<SearchForm/>} />                    
            </Routes>
        </BrowserRouter>
    );
}

export default App;
