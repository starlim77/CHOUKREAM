import './App.css';
import Layout from './component/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaymentTerms from './component/payment/PaymentTerms';
import PayHeader from './component/payment/PayHeader';
import SizePage from './component/payment/SizePage';
import OrderType from './component/payment/OrderType';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element="" />
                    <Route path='/sell' element={<SizePage />}/>
                    <Route path='/buy' element={<SizePage />}/>
                    <Route path='/payTerms/*' element={<PaymentTerms />}/>
                    <Route path='/orderType/*' element={<OrderType />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
