import './App.css';
import Layout from './component/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsedMain from './component/Used/UsedMain'
import UsedWrite from './component/Used/UsedWrite';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element="" />   
                    <Route path='/Used/usedMain' element= { <UsedMain/>}/>
                    <Route path='/Used/usedWrite' element = { <UsedWrite/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
