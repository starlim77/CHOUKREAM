import './App.css';
import Layout from './component/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PayForm from './component/payment/PayForm';
import CsFaq from './component/payment/CsFaq';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<CsFaq></CsFaq>} />
                    <Route path="pay/payForm" element={<PayForm />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
