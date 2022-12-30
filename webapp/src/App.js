import './App.css';
import Layout from './component/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './component/main/Index';
import Shop from './component/Shop/Shop';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Index/>} />
                    <Route path="shop" element={<Shop/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
