import './App.css';
import Layout from './component/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaymentTerms from './component/payment/PaymentTerms';
import PayHeader from './component/payment/PayHeader';
import SizePage from './component/payment/SizePage';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element="" />
                    <Route path='/size' element={<SizePage />}/>
                    <Route path='/payTerms/*' element={<PaymentTerms />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
