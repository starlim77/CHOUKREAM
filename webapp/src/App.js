import "./App.css";
import Layout from "./component/Layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element="" />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
