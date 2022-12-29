import './App.css';
import Layout from './component/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsedItem from './component/used/UsedItem';
import UploadForm2 from './component/used/UploadForm2';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element="" />
                    <Route path="used/useditem" element={<UsedItem></UsedItem>}></Route>
                    <Route path="used/uploadform2" element={<UploadForm2></UploadForm2>}></Route>
                </Route>
            </Routes>
            
        </BrowserRouter>
    );
}

export default App;
