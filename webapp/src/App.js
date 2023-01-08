import React from 'react';
import './App.css';
import Layout from './component/Layout/Layout';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaymentTerms from './component/payment/PaymentTerms';
import PayHeader from './component/payment/PayHeader';
import SizePage from './component/payment/SizePage';
import OrderType from './component/payment/OrderType';

import Shop from './component/Shop/Shop';
import UserWrite from './component/Shop/register/NewWrite';
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
import ManagerPage from './component/Shop/manager/ManagerPage';
import List from './component/Shop/manager/NewList';
import AdminWrite from './component/Shop/register/NewWrite';
import NewList from './component/Shop/manager/NewList';
import NewSearch from './component/Shop/manager/NewSearch';
import NewProducts from './component/Products/NewProducts';
import UsedUpdate from './component/Used/UsedUpdate';
import FindEmailResult from './component/User/FindEmailResult';
import FindPasswordResult from './component/User/FindPasswordResult';
import Logout from './component/User/Logout';

function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element="" />

                    {/* shop */}
                    <Route path="shop" element={<Shop />} />
                    
                    <Route path="admin" element={<ManagerPage />} />
                    <Route path="admin/newWrite" element={<><ManagerPage/><AdminWrite /></>} />
                    <Route path="admin/newList" element={<><ManagerPage/><NewList /></>} />
                    <Route path="admin/newSearch" element={<><ManagerPage/><NewSearch/></>} />
                    
        
                    <Route path="Used/usedMain" element={<UsedMain />} />
                    <Route path="Used/usedWrite" element={<UsedWrite />} />
                    <Route
                        path="Used/useditem"
                        element={<UsedItem></UsedItem>}
                    ></Route>
                    <Route
                        path="Used/uploadform2"
                        element={<UploadForm2></UploadForm2>}
                    ></Route>
                    <Route path="products/:seq" element={<Products />} />
                    <Route path="/sell" element={<SizePage />} />
                    <Route path="/buy" element={<SizePage />} />
                    <Route path="/payTerms/*" element={<PaymentTerms />} />
                    <Route path="/orderType/*" element={<OrderType />} />
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
                    <Route path="newProducts/:seq" element={<NewProducts />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/login/find_email" element={<FindEmail />} />
                    <Route path="/login/find_email/result" element={<FindEmailResult />} />
                    <Route path="/login/find_password" element={<FindPassword />}/>
                    <Route path="/login/find_password/result" element={<FindPasswordResult />} />
                    <Route path="/logout" element={<Logout />} />
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
