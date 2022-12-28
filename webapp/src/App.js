import './App.css';
import Layout from './component/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trending from './component/Lookbook/Trending';
import Detail from './component/Lookbook/Detail';
import Mystyle from './component/Lookbook/Mystyle';
import Social from './component/Lookbook/Social';

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
                
                <Route path="/lookbook/social" element={<Social /> } />
                <Route path="/lookbook/mystyle" element={<Mystyle /> } />
                <Route path="/lookbook/detail" element={<Detail /> } />

            </Routes>
        </BrowserRouter>
    );
}

export default App;
