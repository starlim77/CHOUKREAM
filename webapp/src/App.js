import './App.css';
import Layout from './component/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trending from './component/Lookbook/Trending';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element="" />
                </Route>
                <Route path='/lookbook' element={<Trending/>}>
                    <Route path='/lookbook/trending' element='' />
                    {/* <Route path='/detail' element='' /> */}
                </Route>
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
