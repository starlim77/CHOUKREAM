import React from 'react';
import './App.css';
import Layout from './component/Layout/Layout';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaymentTerms from './component/payment/PaymentTerms';
import PayHeader from './component/payment/PayHeader';
import SizePage from './component/payment/SizePage';
import OrderType from './component/payment/OrderType';

import Shop from './component/Shop/Shop';
import UsedMain from './component/Used/UsedMain';
import UsedWrite from './component/Used/UsedWrite';
import UsedItem from './component/Used/UsedItem';
import UploadForm2 from './component/Used/UploadForm2';
import Products from './component/Products/Products';
import PayForm from './component/payment/PayForm';
import Trending from './component/Lookbook/Trending';
import Detail from './component/Lookbook/Detail';
import Mystyle from './component/Lookbook/Mystyle';
import Social from './component/Lookbook/Social';
import SearchForm from './component/Search/SearchForm';
import CsNotice from './component/Cs/CsNotice';
import CsFaq from './component/Cs/CsFaq';
import CsFaqWriteForm from './component/Cs/CsFaqWriteForm';
import LoginForm from './component/User/LoginForm';
import WriteForm from './component/User/WriteForm';
import FindEmail from './component/User/FindEmail';
import FindPassword from './component/User/FindPassword';
import UsedUpdate from './component/Used/UsedUpdate';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element="" />
                    <Route path="/sell" element={<SizePage />} />
                    <Route path="/buy" element={<SizePage />} />
                    <Route path="/payTerms/*" element={<PaymentTerms />} />
                    <Route path="/orderType/*" element={<OrderType />} />
                    <Route path="shop" element={<Shop />} />
                    <Route
                        path="Used/useditem"
                        element={<UsedItem></UsedItem>}
                    ></Route>
                    <Route path="products/:seq" element={<Products />} />
                    <Route path="pay/payForm" element={<PayForm />}></Route>
                    <Route path="Used/usedMain" element={<UsedMain />} />
                    <Route path="Used/usedItem" element={<UsedItem />} />
                    <Route path="Used/usedWrite" element={<UsedWrite />} />
                    <Route path="Used/useditem" element={<UsedItem />}></Route>
                    <Route path="Used/usedUpdate" element={<UsedUpdate />}></Route>
                    <Route
                        path="Used/uploadform2"
                        element={<UploadForm2 />}
                    ></Route>
                    <Route path="products/:seq" element={<Products />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/login/find_email" element={<FindEmail />} />
                    <Route
                        path="/login/find_password"
                        element={<FindPassword />}
                    />
                    <Route path="/join" element={<WriteForm />} />
                </Route>
                <Route path="/lookbook" element={<Trending />}>
                    <Route path="/lookbook/trending" element="" />
                    {/* <Route path='/detail' element='' /> */}
                </Route>

                <Route path="/lookbook/social" element={<Social />} />
                <Route path="/lookbook/mystyle" element={<Mystyle />} />
                <Route path="/lookbook/detail" element={<Detail />} />
                <Route path="/Search/SearchForm" element={<SearchForm />} />

                <Route path="/cs/csnotice" element={<CsNotice />} />
                <Route path="/cs/CsFaq" element={<CsFaq />} />
                <Route path="/cs/CsFaqWriteForm" element={<CsFaqWriteForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
