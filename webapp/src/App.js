import './App.css';
import Layout from './component/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './component/User/LoginForm';
import WriteForm from './component/User/WriteForm';
import FindEmail from './component/User/FindEmail';
import FindPassword from './component/User/FindPassword';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element="" />
                    <Route path='/login' element={<LoginForm />} />
                    <Route path='/login/find_email' element={<FindEmail />} />
                    <Route path='/login/find_password' element={<FindPassword />} />
                    <Route path='/join' element={<WriteForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
