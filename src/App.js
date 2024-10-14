import './App.css';
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/SignIn" element={<SignIn />} />
            </Routes>
        </BrowserRouter>   
    );
}
