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
import CsFaq from './component/payment/CsFaq';

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
                    <Route path="/" element={<CsFaq></CsFaq>} />
                    <Route path="pay/payForm" element={<PayForm />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
