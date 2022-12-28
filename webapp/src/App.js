import './App.css';
import Layout from './component/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CsNotice from './component/Cs/CsNotice';
import CsFaq from './component/Cs/CsFaq';
import CsFaqWriteForm from './component/Cs/CsFaqWriteForm';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element="" />
                </Route>
            <Route path='/cs/csnotice' element={<CsNotice/>}/>
            <Route path='/cs/CsFaq' element={<CsFaq/>}/>
            <Route path='/cs/CsFaqWriteForm' element={<CsFaqWriteForm/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
